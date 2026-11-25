import { Link } from "react-router-dom";
import { BookOpenIcon } from "lucide-react";
import { useBiblioteca } from "../context/BibliotecaContext";
import { diasDeAtraso, formatarData } from "../utils/Datas";

const Reservas = () => {
  const { registros, retirarLivro } = useBiblioteca();

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 pb-20 sm:px-6">
      <h2 className="text-xl font-bold text-texto">Histórico de reservas</h2>
      <p className="mt-1 text-sm text-texto-mudo">
        Você tem até 7 dias para retirar o livro reservado.
      </p>

      {registros.length === 0 ? (
        <div className="py-20 text-center text-texto-mudo">
          <p>Nenhuma reserva ainda.</p>
          <Link to="/" className="mt-3 inline-block text-inatel-claro hover:underline">
            Ir ao catálogo
          </Link>
        </div>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {registros.map((r) => {
            const aguardando = r.status === "reservado";
            const vencida = aguardando && diasDeAtraso(r.prazoRetirada) > 0;

            return (
              <li
                key={r.id}
                className="flex gap-3 rounded-lg border border-borda bg-superficie p-3 sm:gap-4 sm:p-4"
              >
                <div className="shrink-0 w-20 sm:w-24 aspect-3/4 overflow-hidden rounded-md border border-borda bg-superficie-2 flex items-center justify-center">
                  {r.capa ? (
                    <img
                      src={r.capa}
                      alt={`Capa do livro ${r.titulo}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-texto-mudo">
                      <BookOpenIcon size={24} />
                      <span className="text-xs">Sem capa</span>
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="wrap-break-word font-bold text-texto">{r.titulo}</h3>
                      {r.editora && (
                        <p className="text-sm text-texto-mudo">{r.editora}</p>
                      )}
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                        vencida
                          ? "bg-red-500/20 text-red-700 dark:text-red-300"
                          : aguardando
                            ? "bg-inatel text-white"
                            : "bg-superficie-2 text-texto-suave"
                      }`}
                    >
                      {vencida ? "Prazo vencido" : aguardando ? "Aguardando retirada" : "Retirado"}
                    </span>
                  </div>

                  <div className="mt-3 space-y-1 text-sm text-texto-mudo">
                    <p>Reservado em: {formatarData(r.dataReserva)}</p>
                    <p>
                      {aguardando
                        ? `Retirar até: ${formatarData(r.prazoRetirada)}`
                        : `Retirado em: ${formatarData(r.dataEmprestimo)}`}
                    </p>
                  </div>

                  {aguardando && (
                    <button
                      type="button"
                      onClick={() => retirarLivro(r.id)}
                      className="mt-4 w-full rounded-lg bg-inatel hover:bg-inatel-claro px-4 py-2 text-sm font-semibold text-white transition-colors sm:w-auto"
                    >
                      Simular retirada
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Reservas;
