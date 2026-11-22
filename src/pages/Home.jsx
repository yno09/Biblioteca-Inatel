import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { GENRES, searchBooks, fetchBooksByGenre } from "../services/api";

const ORDENACOES = [
  { id: "padrao", label: "Padrão" },
  { id: "titulo-az", label: "Título (A–Z)" },
  { id: "autor-az", label: "Autor (A–Z)" },
  { id: "editora-az", label: "Editora (A–Z)" },
  { id: "disponiveis", label: "Disponíveis primeiro" },
  { id: "mais-exemplares", label: "Mais exemplares disponíveis" },
];

// Compara textos em português, ignorando acentos e maiúsculas
const comparar = (a, b) =>
  (a ?? "").localeCompare(b ?? "", "pt-BR", { sensitivity: "base" });

const ordenar = (livros, ordem, invertido) => {
  const lista = [...livros]; // não altera a lista original

  switch (ordem) {
    case "titulo-az":
      lista.sort((a, b) => comparar(a.titulo, b.titulo));
      break;
    case "autor-az":
      lista.sort((a, b) => comparar(a.autores?.[0], b.autores?.[0]));
      break;
    case "editora-az":
      lista.sort((a, b) => comparar(a.editora, b.editora));
      break;
    case "disponiveis":
      lista.sort(
        (a, b) =>
          Number((b.quantidade ?? 0) > 0) - Number((a.quantidade ?? 0) > 0) ||
          comparar(a.titulo, b.titulo)
      );
      break;
    case "mais-exemplares":
      lista.sort(
        (a, b) =>
          (b.quantidade ?? 0) - (a.quantidade ?? 0) ||
          comparar(a.titulo, b.titulo)
      );
      break;
    default:
      return lista;
  }

  return invertido ? lista.reverse() : lista;
};

const Home = () => {
  const [texto, setTexto] = useState("");
  const [ordem, setOrdem] = useState("padrao");
  const [invertido, setInvertido] = useState(false);
  const [filtro, setFiltro] = useState({ genreId: 0, termo: "" });
  const [resultado, setResultado] = useState({
    filtro: null,
    livros: [],
    erro: null,
  });

  useEffect(() => {
    let cancelado = false;

    const requisicao = filtro.termo
      ? searchBooks(filtro.termo)
      : fetchBooksByGenre(filtro.genreId);

    requisicao
      .then((livros) => {
        if (!cancelado) setResultado({ filtro, livros, erro: null });
      })
      .catch((erro) => {
        if (!cancelado) setResultado({ filtro, livros: [], erro: erro.message });
      });

    return () => {
      cancelado = true;
    };
  }, [filtro]);

  // Enquanto o resultado guardado não for do filtro atual, ainda está carregando
  const carregando = resultado.filtro !== filtro;

  // Texto exibido na caixinha: troca "A–Z" por "Z–A" quando invertido
  const rotulo = (o) =>
    invertido && o.id === ordem ? o.label.replace("A–Z", "Z–A") : o.label;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setFiltro({ genreId: 0, termo: texto.trim() });
  };

  const escolherGenero = (genreId) => {
    setTexto("");
    setFiltro({ genreId, termo: "" });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 pb-20">
      <h2 className="text-xl font-bold text-texto">
        Escolha o seu próximo livro
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Buscar por autor, título ou editora..."
          className="flex-1 bg-superficie border border-borda rounded-xl px-4 py-3 text-sm text-texto placeholder:text-texto-mudo focus:outline-none focus:border-inatel-claro"
        />
        <button
          type="submit"
          id="search-button"
          className="rounded-xl bg-inatel hover:bg-inatel-claro px-5 py-3 text-sm font-semibold text-white transition-colors"
        >
          Buscar
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-3">
        {GENRES.map((g) => {
          const ativo = !filtro.termo && filtro.genreId === g.id;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => escolherGenero(g.id)}
              className={`rounded-full px-5 py-2 text-xs transition-colors ${
                ativo
                  ? "bg-inatel text-white"
                  : "bg-superficie text-texto-suave hover:bg-superficie-2"
              }`}
            >
              {g.name}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label htmlFor="ordenar" className="text-sm text-texto-suave">
          Ordenar por
        </label>
        <select
          id="ordenar"
          value={ordem}
          onChange={(e) => {
            setOrdem(e.target.value);
            setInvertido(false);
          }}
          className="bg-superficie border border-borda rounded-xl px-3 py-2 text-sm text-texto focus:outline-none focus:border-inatel-claro"
        >
          {ORDENACOES.map((o) => (
            <option key={o.id} value={o.id}>
              {rotulo(o)}
            </option>
          ))}
        </select>

        {[
          { label: "A–Z", inverter: false },
          { label: "Z–A", inverter: true },
        ].map((b) => {
          const ativo = ordem === "titulo-az" && invertido === b.inverter;
          return (
            <button
              key={b.label}
              type="button"
              onClick={() => {
                if (ativo) {
                  setOrdem("padrao");
                  setInvertido(false);
                } else {
                  setOrdem("titulo-az");
                  setInvertido(b.inverter);
                }
              }}
              className={`rounded-full px-4 py-2 text-xs transition-colors ${
                ativo
                  ? "bg-inatel text-white"
                  : "bg-superficie text-texto-suave hover:bg-superficie-2"
              }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      {carregando && (
        <p className="text-texto-mudo text-center py-20">Carregando livros...</p>
      )}

      {!carregando && resultado.erro && (
        <p className="text-red-700 dark:text-red-400 text-center py-20">
          {resultado.erro}
        </p>
      )}

      {!carregando && !resultado.erro && resultado.livros.length === 0 && (
        <p className="text-texto-mudo text-center py-20">
          Nenhum livro encontrado.
        </p>
      )}

      {!carregando && resultado.livros.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ordenar(resultado.livros, ordem, invertido).map((livro) => (
            <BookCard key={livro.id} book={livro} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;