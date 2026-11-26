
import { useEffect, useState } from "react";
import { BibliotecaContext } from "./BibliotecaContext";
import {
  PRAZO_RETIRADA_DIAS,
  PRAZO_DEVOLUCAO_DIAS,
  adicionarDias,
  calcularMulta,
} from "../utils/Datas";

const CHAVE = "biblioteca-inatel:registros";

// Retorna a data atual no formato YYYY-MM-DD
const obterDataHoje = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
};

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
      // Sem armazenamento disponível: segue só em memória
    }
  }, [registros]);

  const atualizar = (id, mudancas) =>
    setRegistros((atual) =>
      atual.map((r) => (r.id === id ? { ...r, ...mudancas(r) } : r))
    );

  const criarReserva = ({
    livroId,
    titulo,
    capa,
    editora,
    nome,
    matricula,
    curso,
  }) => {
    const agora = new Date().toISOString();

    const reserva = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      livroId,
      titulo,
      capa,
      editora,
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

  // Cancela a reserva (só vale enquanto ainda aguarda retirada)
  const cancelarReserva = (id) =>
    setRegistros((atual) =>
      atual.filter((r) => !(r.id === id && r.status === "reservado"))
    );

  // Reserva -> empréstimo
  const retirarLivro = (id) =>
    atualizar(id, () => {
      const agora = new Date().toISOString();

      return {
        status: "emprestado",
        dataEmprestimo: agora,
        prazoDevolucao: adicionarDias(agora, PRAZO_DEVOLUCAO_DIAS),
        dataUltimaRenovacao: null,
      };
    });

  // Empréstimo -> devolução
  const devolverLivro = (id) =>
    atualizar(id, (r) => {
      const agora = new Date().toISOString();

      return {
        status: "devolvido",
        dataDevolucao: agora,
        multa: calcularMulta(r.prazoDevolucao, agora),
      };
    });

  // Simula atraso para testar a multa
  const simularAtraso = (id) =>
    atualizar(id, (r) => ({
      prazoDevolucao: adicionarDias(r.prazoDevolucao, -1),
    }));

  // Renova o empréstimo apenas uma vez por dia
  const renovarLivro = (id) => {
    const hoje = obterDataHoje();

    setRegistros((atual) =>
      atual.map((r) => {
        // Verifica se o registro é um empréstimo ativo
        if (r.id !== id || r.status !== "emprestado") {
          return r;
        }

        // Impede uma segunda renovação no mesmo dia
        if (r.dataUltimaRenovacao === hoje) {
          return r;
        }

        // Registra a renovação e acrescenta 7 dias
        return {
          ...r,
          prazoDevolucao: adicionarDias(r.prazoDevolucao, 7),
          dataUltimaRenovacao: hoje,
        };
      })
    );
  };

  return (
    <BibliotecaContext.Provider
      value={{
        registros,
        criarReserva,
        cancelarReserva,
        retirarLivro,
        devolverLivro,
        simularAtraso,
        renovarLivro,
      }}
    >
      {children}
    </BibliotecaContext.Provider>
  );
};