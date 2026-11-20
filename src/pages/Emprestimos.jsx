import { Link } from "react-router-dom";
import { useBiblioteca } from "../context/BibliotecaContext";
import {
  MULTA_POR_DIA,
  calcularMulta,
  diasDeAtraso,
  formatarData,
  formatarMoeda,
} from "../utils/Datas";

const Emprestimos = () => {
  const { registros, devolverLivro, simularAtraso } = useBiblioteca();
  const emprestimos = registros.filter((r) => r.dataEmprestimo);

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
      <h2 className="text-xl font-bold text-slate-100">Histórico de empréstimos</h2>
      <p className="mt-1 text-sm text-slate-400">
        Em caso de atraso, a multa é de {formatarMoeda(MULTA_POR_DIA)} por dia.
      </p>

      {emprestimos.length === 0 ? (
        <div className="py-20 text-center text-slate-400">
          <p>Nenhum empréstimo ainda. Retire um livro reservado primeiro.</p>
          <Link to="/reservas" className="mt-3 inline-block text-inatel-claro hover:underline">
            Ver reservas
          </Link>
        </div>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {emprestimos.map((r) => {
            const ativo = r.status === "emprestado";
            const dias = ativo ? diasDeAtraso(r.prazoDevolucao) : 0;
            const multaAtual = ativo ? calcularMulta(r.prazoDevolucao) : r.multa;

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
                      !ativo
                        ? "bg-slate-700 text-slate-300"
                        : dias > 0
                          ? "bg-red-500/20 text-red-300"
                          : "bg-inatel text-white"
                    }`}
                  >
                    {!ativo ? "Devolvido" : dias > 0 ? "Em atraso" : "Em andamento"}
                  </span>
                </div>

                <div className="mt-3 space-y-1 text-sm text-slate-400">
                  <p>Emprestado em: {formatarData(r.dataEmprestimo)}</p>
                  <p>Devolver até: {formatarData(r.prazoDevolucao)}</p>
                  {!ativo && <p>Devolvido em: {formatarData(r.dataDevolucao)}</p>}
                  {dias > 0 && (
                    <p className="text-red-300">
                      {dias} {dias === 1 ? "dia" : "dias"} de atraso
                    </p>
                  )}
                  {multaAtual > 0 && (
                    <p className="font-semibold text-red-300">
                      Multa{ativo ? " atual" : " paga"}: {formatarMoeda(multaAtual)}
                    </p>
                  )}
                </div>

                {ativo && (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => devolverLivro(r.id)}
                      className="rounded-lg bg-inatel hover:bg-inatel-claro px-4 py-2 text-sm font-semibold text-white transition-colors"
                    >
                      Simular devolução
                    </button>
                    <button
                      type="button"
                      onClick={() => simularAtraso(r.id)}
                      className="text-xs text-slate-400 hover:text-slate-200 hover:underline"
                    >
                      Teste: adiantar prazo em 3 dias
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Emprestimos;
