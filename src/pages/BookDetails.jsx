import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpenIcon } from "lucide-react";
import { fetchBooksById } from "../services/api";

const BookDetails = () => {
  const { id } = useParams(); // pega o :id da URL (/livro/:id)
  const [estado, setEstado] = useState({ id: null, livro: null, erro: null });

  useEffect(() => {
    let cancelado = false;

    fetchBooksById(id)
      .then((livro) => {
        if (!cancelado) setEstado({ id, livro, erro: null });
      })
      .catch((erro) => {
        if (!cancelado) setEstado({ id, livro: null, erro: erro.message });
      });

    return () => {
      cancelado = true;
    };
  }, [id]);

  const carregando = estado.id !== id;
  const { livro, erro } = estado;

  if (carregando) {
    return <p className="text-slate-400 text-center py-20">Carregando...</p>;
  }

  if (erro || !livro) {
    return (
      <div className="text-center py-20">
        <p className="text-red-400">{erro ?? "Livro não encontrado."}</p>
        <Link to="/" className="mt-4 inline-block text-inatel-claro hover:underline">
          Voltar ao catálogo
        </Link>
      </div>
    );
  }

  const dados = [
    ["Autor", livro.autores?.join(", ")],
    ["Editora", livro.editora],
    ["Ano", livro.ano],
    [
      "Disponíveis",
      livro.quantidade == null
        ? null
        : `${livro.quantidade} ${livro.quantidade === 1 ? "exemplar" : "exemplares"}`,
    ],
  ].filter(([, valor]) => valor); // esconde o que não tem valor

  return (
    <main className="max-w-md mx-auto px-4 py-6">
      <Link to="/" className="text-sm text-inatel-claro hover:underline">
        ← Voltar ao catálogo
      </Link>

      <article className="mt-4 flex flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
        <div className="flex justify-center bg-slate-900/40 p-4">
          <div className="flex aspect-3/4 w-44 items-center justify-center overflow-hidden rounded-md bg-slate-700">
            {livro.capa ? (
              <img
                src={livro.capa}
                alt={`Capa do livro ${livro.titulo}`}
                className="h-full w-full object-cover"  
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <BookOpenIcon size={40} />
                <span className="text-xs">Sem capa</span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-700 p-4">
          <h2 className="text-lg font-bold text-slate-100">{livro.titulo}</h2>

          <div className="mt-2 space-y-1 text-sm text-slate-400">
            {dados.map(([rotulo, valor]) => (
              <p key={rotulo}>
                <span className="font-semibold text-slate-300">{rotulo}:</span>{" "}
                {valor}
              </p>
            ))}
          </div>
        </div>

        <Link
          to={`/reservar/${id}`}
          className="border-t border-slate-700 p-3 text-center text-sm font-medium text-inatel-claro hover:underline"
        >
          Solicitar Reserva
        </Link>
      </article>
    </main>
  );
};

export default BookDetails;