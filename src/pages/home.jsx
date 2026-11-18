import { useEffect, useState } from "react";
import { GENRES, searchBooks, fetchBooksByGenre } from "../services/api";

const Home = () => {
  const [texto, setTexto] = useState("");
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
      <h2 className="text-xl font-bold text-slate-100">
        Escolha o seu próximo livro
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Buscar por autor, título ou editora..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-inatel-claro"
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
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {g.name}
            </button>
          );
        })}
      </div>

      {carregando && (
        <p className="text-slate-400 text-center py-20">Carregando livros...</p>
      )}

      {!carregando && resultado.erro && (
        <p className="text-red-400 text-center py-20">{resultado.erro}</p>
      )}

      {!carregando && !resultado.erro && resultado.livros.length === 0 && (
        <p className="text-slate-400 text-center py-20">
          Nenhum livro encontrado.
        </p>
      )}

      {!carregando && resultado.livros.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {resultado.livros.map((livro) => (
            <BookCard key={livro.id} book={livro} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;