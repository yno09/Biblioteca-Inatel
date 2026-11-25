import { Link } from "react-router-dom";
import { BookOpenIcon } from "lucide-react";
import { useBiblioteca } from "../context/BibliotecaContext";
import {
  MULTA_POR_DIA,
  calcularMulta,
  diasDeAtraso,
  formatarData,
  formatarMoeda,
} from "../utils/Datas";

const obterDataHoje = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
};

const Emprestimos = () => {
  const {
    registros,
    devolverLivro,
    simularAtraso,
    renovarLivro,
  } = useBiblioteca();

  const emprestimos = registros.filter((r) => r.dataEmprestimo);
  const dataHoje = obterDataHoje();

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 pb-20 sm:px-6">
      <h2 className="text-xl font-bold text-texto">
        Histórico de empréstimos
      </h2>

      <p className="mt-1 text-sm text-texto-mudo">
        Em caso de atraso, a multa é de {formatarMoeda(MULTA_POR_DIA)} por dia.
      </p>

      {emprestimos.length === 0 ? (
        <div className="py-20 text-center text-texto-mudo">
          <p>Nenhum empréstimo ainda. Retire um livro reservado primeiro.</p>

          <Link
            to="/reservas"
            className="mt-3 inline-block text-inatel-claro hover:underline"
          >
            Ver reservas
          </Link>
        </div>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {emprestimos.map((r) => {
            const ativo = r.status === "emprestado";

            const dias = ativo
              ? diasDeAtraso(r.prazoDevolucao)
              : 0;

            const multaAtual = ativo
              ? calcularMulta(r.prazoDevolucao)
              : r.multa;

            // Verifica se o livro já foi renovado hoje
            const renovadoHoje =
              r.dataUltimaRenovacao === dataHoje;

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
                      <h3 className="wrap-break-word font-bold text-texto">
                        {r.titulo}
                      </h3>

                      {r.editora && (
                        <p className="text-sm text-texto-mudo">
                          {r.editora}
                        </p>
                      )}
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
                      {!ativo
                        ? "Devolvido"
                        : dias > 0
                          ? "Em atraso"
                          : "Em andamento"}
                    </span>
                  </div>

                  <div className="mt-3 space-y-1 text-sm text-texto-mudo">
                    <p>
                      Emprestado em: {formatarData(r.dataEmprestimo)}
                    </p>

                    <p>
                      Devolver até: {formatarData(r.prazoDevolucao)}
                    </p>

                    {!ativo && (
                      <p>
                        Devolvido em: {formatarData(r.dataDevolucao)}
                      </p>
                    )}

                    {dias > 0 && (
                      <p className="text-red-700 dark:text-red-300">
                        {dias} {dias === 1 ? "dia" : "dias"} de atraso
                      </p>
                    )}

                    {multaAtual > 0 && (
                      <p className="font-semibold text-red-700 dark:text-red-300">
                        Multa{ativo ? " atual" : " paga"}:{" "}
                        {formatarMoeda(multaAtual)}
                      </p>
                    )}

                    {renovadoHoje && ativo && (
                      <p className="text-amber-600 dark:text-amber-400 font-medium">
                        Este livro já foi renovado hoje.
                      </p>
                    )}
                  </div>

                  {ativo && (
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="button"
                        onClick={() => devolverLivro(r.id)}
                        className="w-full rounded-lg bg-inatel hover:bg-inatel-claro px-4 py-2 text-sm font-semibold text-white transition-colors sm:w-auto"
                      >
                        Simular devolução
                      </button>

                      <button
                        type="button"
                        onClick={() => simularAtraso(r.id)}
                        className="text-xs text-texto-mudo hover:text-texto hover:underline"
                      >
                        Teste: adiantar prazo em 1 dia
                      </button>

                      <button
                        type="button"
                        onClick={() => renovarLivro(r.id)}
                        disabled={renovadoHoje}
                        className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors sm:ml-auto sm:w-auto ${
                          renovadoHoje
                            ? "bg-gray-500 cursor-not-allowed opacity-60"
                            : "bg-inatel hover:bg-inatel-claro"
                        }`}
                      >
                        {renovadoHoje
                          ? "Já renovado hoje"
                          : "Renovar livro"}
                      </button>
                    </div>
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

export default Emprestimos;