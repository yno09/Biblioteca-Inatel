import { useEffect, useState } from "react";
import { BibliotecaContext } from "./BibliotecaContext";
import {
  PRAZO_RETIRADA_DIAS,
  PRAZO_DEVOLUCAO_DIAS,
  adicionarDias,
  calcularMulta,
} from "../utils/Datas";

const CHAVE = "biblioteca-inatel:registros";

const carregar = () => {
  try {
    const texto = localStorage.getItem(CHAVE);
    return texto ? JSON.parse(texto) : [];
  } catch {
    return [];
  }
};

// Cada registro passa por: "reservado" -> "emprestado" -> "devolvido"
export const BibliotecaProvider = ({ children }) => {
  const [registros, setRegistros] = useState(carregar);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(registros));
    } catch {
      // sem armazenamento disponível: segue só em memória
    }
  }, [registros]);

  const atualizar = (id, mudancas) =>
    setRegistros((atual) =>
      atual.map((r) => (r.id === id ? { ...r, ...mudancas(r) } : r))
    );

  const criarReserva = ({ livroId, titulo, nome, matricula, curso }) => {
    const agora = new Date().toISOString();
    const reserva = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      livroId,
      titulo,
      nome,
      matricula,
      curso,
      status: "reservado",
      dataReserva: agora,
      prazoRetirada: adicionarDias(agora, PRAZO_RETIRADA_DIAS),
    };
    setRegistros((atual) => [reserva, ...atual]);
    return reserva;
  };

  // Reserva -> empréstimo
  const retirarLivro = (id) =>
    atualizar(id, () => {
      const agora = new Date().toISOString();
      return {
        status: "emprestado",
        dataEmprestimo: agora,
        prazoDevolucao: adicionarDias(agora, PRAZO_DEVOLUCAO_DIAS),
      };
    });

  // Empréstimo -> devolução (calcula a multa no dia da devolução)
  const devolverLivro = (id) =>
    atualizar(id, (r) => {
      const agora = new Date().toISOString();
      return {
        status: "devolvido",
        dataDevolucao: agora,
        multa: calcularMulta(r.prazoDevolucao, agora),
      };
    });

  // Só para testar a multa: adianta o prazo de devolução em 3 dias
  const simularAtraso = (id) =>
    atualizar(id, (r) => ({ prazoDevolucao: adicionarDias(r.prazoDevolucao, -3) }));

  return (
    <BibliotecaContext.Provider
      value={{ registros, criarReserva, retirarLivro, devolverLivro, simularAtraso }}
    >
      {children}
    </BibliotecaContext.Provider>
  );
};
