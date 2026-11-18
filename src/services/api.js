console.log("chave:", import.meta.env.VITE_GOOGLE_BOOKS_KEY);

const BASE = "https://www.googleapis.com/books/v1";
const KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;

export const GENRES = [
  { id: 0, name: "Todos", query: "subject:engineering" },
  { id: 1, name: "Cálculo", query: "calculo" },
  { id: 2, name: "Física", query: "subject:physics" },
  { id: 3, name: "Engenharia de Software", query: "engenharia de software" },
  { id: 4, name: "Algoritmos", query: "algoritmos" },
  { id: 5, name: "Circuitos", query: "circuitos eletricos" },
];

// Guarda respostas já pedidas, para não repetir chamadas (ajuda a evitar o erro 429)
const cache = new Map();

const get = async (path, params, mensagemErro) => {
  const url = new URL(`${BASE}${path}`);
  Object.entries(params).forEach(([chave, valor]) => {
    url.searchParams.set(chave, valor);
  });
  if (KEY) url.searchParams.set("key", KEY);

  const id = url.toString();
  if (cache.has(id)) return cache.get(id);

  const response = await fetch(url);

  if (response.status === 429) {
    throw new Error(
      "Muitas requisições ao Google Books. Aguarde um pouco e tente de novo."
    );
  }
  if (!response.ok) throw new Error(mensagemErro);

  const data = await response.json();
  cache.set(id, data);
  return data;
};

const formatCapa = (info) =>
  info.imageLinks?.thumbnail?.replace("http://", "https://");

// Transforma o formato do Google Books em objetos simples
const formatBooks = (data) =>
  (data.items ?? []).map((item) => ({
    id: item.id,
    titulo: item.volumeInfo.title,
    autores: item.volumeInfo.authors ?? [],
    editora: item.volumeInfo.publisher,
    capa: formatCapa(item.volumeInfo),
  }));

const buscar = async (q, mensagemErro) =>
  formatBooks(await get("/volumes", { q, maxResults: 40 }, mensagemErro));

export const fetchBooks = () =>
  buscar(GENRES[0].query, "Erro ao buscar livros.");

export const searchBooks = (query) => {
  if (!query?.trim()) return Promise.resolve([]);
  return buscar(query.trim(), "Erro ao buscar livros.");
};

export const fetchBooksByGenre = (genreId) => {
  const genre = GENRES.find((g) => g.id === genreId) ?? GENRES[0];
  return buscar(genre.query, "Erro ao buscar livros por gênero.");
};

export const fetchBooksById = async (id) => {
  const item = await get(
    `/volumes/${id}`,
    {},
    "Erro ao buscar detalhes do livro."
  );
  const info = item.volumeInfo;

  return {
    id: item.id,
    titulo: info.title,
    autores: info.authors ?? [],
    editora: info.publisher,
    // O Google devolve a descrição com tags HTML; aqui tiramos as tags
    descricao: info.description?.replace(/<[^>]*>/g, ""),
    paginas: info.pageCount,
    dataPublicacao: info.publishedDate,
    capa: formatCapa(info),
  };
};
