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
  const {
    registros,
    devolverLivro,
    simularAtraso,
    renovarLivro,
  } = useBiblioteca();
  const emprestimos = registros.filter((r) => r.dataEmprestimo);

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
      <h2 className="text-xl font-bold text-texto">Histórico de empréstimos</h2>
      <p className="mt-1 text-sm text-texto-mudo">
        Em caso de atraso, a multa é de {formatarMoeda(MULTA_POR_DIA)} por dia.
      </p>

      {emprestimos.length === 0 ? (
        <div className="py-20 text-center text-texto-mudo">
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
                className="rounded-lg border border-borda bg-superficie p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-texto">{r.titulo}</h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                      !ativo
                        ? "bg-superficie-2 text-texto-suave"
                        : dias > 0
                          ? "bg-red-500/20 text-red-700 dark:text-red-300"
                          : "bg-inatel text-white"
                    }`}
                  >
                    {!ativo ? "Devolvido" : dias > 0 ? "Em atraso" : "Em andamento"}
                  </span>
                </div>

                <div className="mt-3 space-y-1 text-sm text-texto-mudo">
                  <p>Emprestado em: {formatarData(r.dataEmprestimo)}</p>
                  <p>Devolver até: {formatarData(r.prazoDevolucao)}</p>
                  {!ativo && <p>Devolvido em: {formatarData(r.dataDevolucao)}</p>}
                  {dias > 0 && (
                    <p className="text-red-700 dark:text-red-300">
                      {dias} {dias === 1 ? "dia" : "dias"} de atraso
                    </p>
                  )}
                  {multaAtual > 0 && (
                    <p className="font-semibold text-red-700 dark:text-red-300">
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
                      className="text-xs text-texto-mudo hover:text-texto hover:underline"
                    >
                      Teste: adiantar prazo em 1 dias
                    </button>

                    <button
                      type="button"
                      onClick={() => renovarLivro(r.id)}
                      className="ml-auto rounded-lg bg-inatel hover:bg-inatel-claro px-4 py-2 text-sm font-semibold text-white transition-colors"
                    >
                      Renovar livro
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
