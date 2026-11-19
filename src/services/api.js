import { LIVROS } from "../data/livros";

export const GENRES = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Cálculo" },
  { id: 2, name: "Física" },
  { id: 3, name: "Engenharia de Software" },
  { id: 4, name: "Algoritmos" },
  { id: 5, name: "Circuitos" },
  { id: 6, name: "Redes e Sistemas" },
];

// Tira acentos e maiúsculas, para "calculo" encontrar "Cálculo"
const normalizar = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

// Mantém o formato assíncrono (Promise), igual ao de uma API de verdade.
// Assim, se um dia você trocar por um backend, só este arquivo muda.
export const fetchBooks = async () => LIVROS;

export const searchBooks = async (query) => {
  const termo = normalizar(query?.trim() ?? "");
  if (!termo) return [];

  return LIVROS.filter((livro) =>
    normalizar([livro.titulo, livro.editora, ...livro.autores].join(" ")).includes(termo)
  );
};

export const fetchBooksByGenre = async (genreId) =>
  genreId === 0 ? LIVROS : LIVROS.filter((livro) => livro.genero === genreId);

export const fetchBooksById = async (id) => {
  const livro = LIVROS.find((l) => l.id === id);
  if (!livro) throw new Error("Livro não encontrado.");
  return livro;
};