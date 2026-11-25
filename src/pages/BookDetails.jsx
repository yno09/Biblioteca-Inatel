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
    return <p className="text-texto-mudo text-center py-20">Carregando...</p>;
  }

  if (erro || !livro) {
    return (
      <div className="text-center py-20">
        <p className="text-red-700 dark:text-red-400">{erro ?? "Livro não encontrado."}</p>
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
    <main className="mx-auto max-w-md px-4 py-6 sm:px-6 md:max-w-4xl">
      <Link to="/" className="text-sm text-inatel-claro hover:underline">
        ← Voltar ao catálogo
      </Link>

      {/*
        Grid da página:
        - celular: capa, informações e botão empilhados
        - md+:     capa à esquerda (ocupando as 2 linhas), informações e botão à direita
      */}
      <article className="mt-4 grid overflow-hidden rounded-lg border border-borda bg-superficie md:grid-cols-[16rem_1fr] md:grid-rows-[1fr_auto]">
        <div className="flex items-center justify-center bg-fundo/40 p-4 md:row-span-2 md:border-r md:border-borda md:p-6">
          <div className="flex aspect-3/4 w-44 items-center justify-center overflow-hidden rounded-md bg-superficie-2 md:w-full">
            {livro.capa ? (
              <img
                src={livro.capa}
                alt={`Capa do livro ${livro.titulo}`}
                className="h-full w-full object-cover"  
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-texto-mudo">
                <BookOpenIcon size={40} />
                <span className="text-xs">Sem capa</span>
              </div>
            )}
          </div>
        </div>

        <div className="min-w-0 border-t border-borda p-4 md:border-t-0 md:p-6">
          <h2 className="wrap-break-word text-lg font-bold text-texto md:text-2xl">
            {livro.titulo}
          </h2>

          <div className="mt-2 space-y-1 text-sm text-texto-mudo md:mt-4 md:space-y-2 md:text-base">
            {dados.map(([rotulo, valor]) => (
              <p key={rotulo}>
                <span className="font-semibold text-texto-suave">{rotulo}:</span>{" "}
                {valor}
              </p>
            ))}
          </div>
        </div>

        <Link
          to={`/reservar/${id}`}
          className="border-t border-borda p-3 text-center text-sm font-medium text-inatel-claro hover:underline md:p-4"
        >
          Solicitar Reserva
        </Link>
      </article>
    </main>
  );
};

export default BookDetails;