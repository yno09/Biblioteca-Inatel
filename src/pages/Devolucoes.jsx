import { Link } from "react-router-dom";
import { BookOpenIcon } from "lucide-react";
import { useBiblioteca } from "../context/BibliotecaContext";
import { formatarData, formatarMoeda } from "../utils/Datas";

const Devolucoes = () => {
  const { registros } = useBiblioteca();
  const devolucoes = registros
    .filter((r) => r.status === "devolvido")
    .sort((a, b) => new Date(b.dataDevolucao) - new Date(a.dataDevolucao));

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 pb-20 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold text-texto">Histórico de devoluções</h2>

      {devolucoes.length === 0 ? (
        <div className="py-20 text-center text-texto-mudo">
          <p>Nenhuma devolução ainda.</p>
          <Link to="/emprestimos" className="mt-3 inline-block text-inatel-claro hover:underline">
            Ver empréstimos
          </Link>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {devolucoes.map((r) => (
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
                <h3 className="wrap-break-word font-bold text-texto">{r.titulo}</h3>
                {r.editora && (
                  <p className="text-sm text-texto-mudo">{r.editora}</p>
                )}

                <div className="mt-3 space-y-1 text-sm text-texto-mudo">
                  <p>Emprestado em: {formatarData(r.dataEmprestimo)}</p>
                  <p>Prazo de devolução: {formatarData(r.prazoDevolucao)}</p>
                  <p className="font-semibold text-texto">
                    Devolvido em: {formatarData(r.dataDevolucao)}
                  </p>
                  <p className={r.multa > 0 ? "font-semibold text-red-700 dark:text-red-300" : ""}>
                    {r.multa > 0
                      ? `Multa paga: ${formatarMoeda(r.multa)}`
                      : "Sem multa"}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Devolucoes;
