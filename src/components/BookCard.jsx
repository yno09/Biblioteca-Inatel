import { Link } from "react-router-dom";
import { BookOpenIcon } from "lucide-react";

const BookCard = ({ book }) => {
  // quantidade = exemplares disponíveis na biblioteca
  const quantidade = book.quantidade ?? 0;
  const disponivel = quantidade > 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
      <div className="aspect-[3/4] bg-slate-700 flex items-center justify-center">
        {book.capa ? (
          <img
            src={book.capa}
            alt={`Capa do livro ${book.titulo}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <BookOpenIcon size={32} />
            <span className="text-xs">Sem capa</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3 border-t border-slate-700 p-3">
        {disponivel ? (
          <>
            <div>
              <h2 className="line-clamp-2 text-sm font-bold text-slate-100">
                {book.titulo}
              </h2>
              <p className="mt-1 line-clamp-1 text-xs text-slate-400">
                {book.editora ?? book.autores?.join(", ") ?? "Editora não informada"}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                {quantidade}{" "}
                {quantidade === 1 ? "exemplar disponível" : "exemplares disponíveis"}
              </p>
            </div>

            <Link
              to={`/livro/${book.id}`}
              className="text-sm font-medium text-inatel-claro hover:underline"
            >
              Ver Detalhes
            </Link>
          </>
        ) : (
          <p className="py-4 text-center text-sm font-bold text-slate-300">
            Indisponível
          </p>
        )}
      </div>
    </article>
  );
};

export default BookCard;