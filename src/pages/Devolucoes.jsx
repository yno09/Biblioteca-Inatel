import { Link } from "react-router-dom";
import { useBiblioteca } from "../context/BibliotecaContext";
import { formatarData, formatarMoeda } from "../utils/datas";

const Devolucoes = () => {
  const { registros } = useBiblioteca();
  const devolucoes = registros
    .filter((r) => r.status === "devolvido")
    .sort((a, b) => new Date(b.dataDevolucao) - new Date(a.dataDevolucao));

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
      <h2 className="text-xl font-bold text-slate-100">Histórico de devoluções</h2>

      {devolucoes.length === 0 ? (
        <div className="py-20 text-center text-slate-400">
          <p>Nenhuma devolução ainda.</p>
          <Link to="/emprestimos" className="mt-3 inline-block text-inatel-claro hover:underline">
            Ver empréstimos
          </Link>
        </div>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {devolucoes.map((r) => (
            <li
              key={r.id}
              className="rounded-lg border border-slate-700 bg-slate-800 p-4"
            >
              <h3 className="font-bold text-slate-100">{r.titulo}</h3>
              <p className="text-sm text-slate-400">
                {r.nome} ({r.matricula}) · {r.curso}
              </p>

              <div className="mt-3 space-y-1 text-sm text-slate-400">
                <p>Emprestado em: {formatarData(r.dataEmprestimo)}</p>
                <p>Prazo de devolução: {formatarData(r.prazoDevolucao)}</p>
                <p className="font-semibold text-slate-200">
                  Devolvido em: {formatarData(r.dataDevolucao)}
                </p>
                <p className={r.multa > 0 ? "font-semibold text-red-300" : ""}>
                  {r.multa > 0
                    ? `Multa paga: ${formatarMoeda(r.multa)}`
                    : "Sem multa"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Devolucoes;
