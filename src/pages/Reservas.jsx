import { Link } from "react-router-dom";
import { useBiblioteca } from "../context/BibliotecaContext";
import { diasDeAtraso, formatarData } from "../utils/Datas";

const Reservas = () => {
  const { registros, retirarLivro } = useBiblioteca();

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
      <h2 className="text-xl font-bold text-slate-100">Histórico de reservas</h2>
      <p className="mt-1 text-sm text-slate-400">
        Você tem até 7 dias para retirar o livro reservado.
      </p>

      {registros.length === 0 ? (
        <div className="py-20 text-center text-slate-400">
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
                className="rounded-lg border border-slate-700 bg-slate-800 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-100">{r.titulo}</h3>
                    <p className="text-sm text-slate-400">
                      {r.nome} ({r.matricula}) · {r.curso}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                      vencida
                        ? "bg-red-500/20 text-red-300"
                        : aguardando
                          ? "bg-inatel text-white"
                          : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {vencida ? "Prazo vencido" : aguardando ? "Aguardando retirada" : "Retirado"}
                  </span>
                </div>

                <div className="mt-3 space-y-1 text-sm text-slate-400">
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
                    className="mt-4 rounded-lg bg-inatel hover:bg-inatel-claro px-4 py-2 text-sm font-semibold text-white transition-colors"
                  >
                    Simular retirada
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Reservas;
