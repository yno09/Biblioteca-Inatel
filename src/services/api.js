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

<<<<<<< HEAD
// Ajusta o caminho da capa para funcionar tanto no computador quanto no
// GitHub Pages (que publica o site em uma subpasta). Em livros.js use
// capa: "/capas/arquivo.jpg" e este código cuida do resto.
const prepararCapa = (livro) =>
  livro.capa
    ? { ...livro, capa: `${import.meta.env.BASE_URL}${livro.capa.replace(/^\//, "")}` }
    : livro;

// Mantém o formato assíncrono (Promise), igual ao de uma API de verdade.
// Assim, se um dia você trocar por um backend, só este arquivo muda.
export const fetchBooks = async () => LIVROS.map(prepararCapa);
=======
// Mantém o formato assíncrono (Promise), igual ao de uma API de verdade.
// Assim, se um dia você trocar por um backend, só este arquivo muda.
export const fetchBooks = async () => LIVROS;
>>>>>>> 61b91a9b6d0e41a87e11340e349280c7f8da8ff5

export const searchBooks = async (query) => {
  const termo = normalizar(query?.trim() ?? "");
  if (!termo) return [];

  return LIVROS.filter((livro) =>
    normalizar([livro.titulo, livro.editora, ...livro.autores].join(" ")).includes(termo)
<<<<<<< HEAD
  ).map(prepararCapa);
};

export const fetchBooksByGenre = async (genreId) =>
  (genreId === 0 ? LIVROS : LIVROS.filter((livro) => livro.genero === genreId)).map(
    prepararCapa
  );
=======
  );
};

export const fetchBooksByGenre = async (genreId) =>
  genreId === 0 ? LIVROS : LIVROS.filter((livro) => livro.genero === genreId);
>>>>>>> 61b91a9b6d0e41a87e11340e349280c7f8da8ff5

export const fetchBooksById = async (id) => {
  const livro = LIVROS.find((l) => l.id === id);
  if (!livro) throw new Error("Livro não encontrado.");
<<<<<<< HEAD
  return prepararCapa(livro);
};
=======
  return livro;
};
>>>>>>> 61b91a9b6d0e41a87e11340e349280c7f8da8ff5
