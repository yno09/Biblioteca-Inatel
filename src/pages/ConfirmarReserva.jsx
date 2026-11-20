import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircleIcon } from "lucide-react";
import { fetchBooksById } from "../services/api";
import { useBiblioteca } from "../context/BibliotecaContext";
import { formatarData } from "../utils/Datas";

const CURSOS = [
  "Engenharia de Software",
  "Engenharia da Computação",
  "Engenharia Biomédica",
  "Engenharia de Telecomunicações",
  "Engenharia Elétrica",
  "Engenharia de Produção",
];

const DADOS_TESTE = {
  nome: "Vitor Nolasco Ynoguti",
  matricula: "818",
  curso: "Engenharia de Software",
};

const campo =
  "w-full bg-fundo border border-borda rounded-lg px-4 py-3 text-sm text-texto placeholder:text-texto-mudo focus:outline-none focus:border-inatel-claro";

const ConfirmarReserva = () => {
  const { id } = useParams();
  const { criarReserva } = useBiblioteca();

  const [livro, setLivro] = useState(null);
  const [form, setForm] = useState({ nome: "", matricula: "", curso: "" });
  const [erro, setErro] = useState("");
  const [reserva, setReserva] = useState(null);

  useEffect(() => {
    let cancelado = false;
    fetchBooksById(id)
      .then((dados) => {
        if (!cancelado) setLivro(dados);
      })
      .catch(() => {
        // Se falhar, a reserva ainda pode ser feita; só não mostramos o título
      });
    return () => {
      cancelado = true;
    };
  }, [id]);

  const atualizar = (e) => {
    setForm((atual) => ({ ...atual, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.nome.trim() || !form.matricula.trim() || !form.curso) {
    setErro("Preencha todos os campos para continuar.");
    return;
  }

  if (
    form.nome.trim() !== DADOS_TESTE.nome ||
    form.matricula.trim() !== DADOS_TESTE.matricula ||
    form.curso !== DADOS_TESTE.curso
  ) {
    setErro("Dados inválidos!");
    return;
  }

  setErro("");

  setReserva(
    criarReserva({
      livroId: id,
      titulo: livro?.titulo ?? id,
      nome: form.nome.trim(),
      matricula: form.matricula.trim(),
      curso: form.curso,
    })
  );
};

  if (reserva) {
    return (
      <main className="max-w-md mx-auto px-4 py-10">
        <div className="rounded-xl border border-borda bg-superficie p-6 text-center">
          <CheckCircleIcon size={48} className="mx-auto text-inatel-claro" />
          <h2 className="mt-4 text-xl font-bold text-texto">
            Reserva confirmada!
          </h2>
          <p className="mt-2 text-sm text-texto-mudo">
            {livro ? `"${livro.titulo}"` : "O livro"} foi reservado para{" "}
            <span className="text-texto">{reserva.nome}</span> (
            {reserva.matricula}), do curso de {reserva.curso}.
          </p>
          <p className="mt-2 text-sm text-texto-mudo">
            Retire o livro até {formatarData(reserva.prazoRetirada)}.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/reservas"
              className="rounded-lg bg-inatel hover:bg-inatel-claro px-5 py-3 text-sm font-semibold text-white transition-colors"
            >
              Ver minhas reservas
            </Link>
            <Link
              to="/"
              className="rounded-lg bg-superficie-2 hover:bg-superficie-3 px-5 py-3 text-sm font-semibold text-texto transition-colors"
            >
              Voltar ao catálogo
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <div className="rounded-xl border border-borda bg-superficie p-6">
        <h2 className="text-xl font-bold text-texto">Confirmar reserva</h2>
        {livro && (
          <p className="mt-1 text-sm text-texto-mudo">
            Livro: <span className="text-texto">{livro.titulo}</span>
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="nome" className="mb-1 block text-sm text-texto-suave">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={atualizar}
              placeholder="Seu nome completo"
              className={campo}
            />
          </div>

          <div>
            <label
              htmlFor="matricula"
              className="mb-1 block text-sm text-texto-suave"
            >
              Matrícula
            </label>
            <input
              id="matricula"
              name="matricula"
              type="text"
              value={form.matricula}
              onChange={atualizar}
              placeholder="Sua matrícula"
              className={campo}
            />
          </div>

          <div>
            <label htmlFor="curso" className="mb-1 block text-sm text-texto-suave">
              Curso
            </label>
            <select
              id="curso"
              name="curso"
              value={form.curso}
              onChange={atualizar}
              className={campo}
            >
              <option value="" disabled>
                Selecione seu curso
              </option>
              {CURSOS.map((curso) => (
                <option key={curso} value={curso}>
                  {curso}
                </option>
              ))}
            </select>
          </div>

          {erro && <p className="text-sm text-red-700 dark:text-red-400">{erro}</p>}

          <button
            type="submit"
            className="rounded-lg bg-inatel hover:bg-inatel-claro px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            Confirmar reserva
          </button>
        </form>
        <p className="mt-1 text-sm text-texto-mudo">
          NomeTeste: Vitor Nolasco Ynoguti 
          <br />
          MatrículaTeste: 818
          <br />
          CursoTeste: Engenharia de Software
        </p>
      </div>
    </main>
  );
};

export default ConfirmarReserva;