const DIA = 24 * 60 * 60 * 1000;

export const PRAZO_RETIRADA_DIAS = 7; // tempo máximo para pegar o livro reservado
export const PRAZO_DEVOLUCAO_DIAS = 14; // tempo para devolver depois de pegar
export const MULTA_POR_DIA = 2; // em reais

export const adicionarDias = (iso, dias) =>
  new Date(new Date(iso).getTime() + dias * DIA).toISOString();

const inicioDoDia = (data) => {
  const d = new Date(data);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Quantos dias passaram do prazo (0 se ainda está no prazo)
export const diasDeAtraso = (prazoIso, referenciaIso = new Date().toISOString()) =>
  Math.max(0, Math.round((inicioDoDia(referenciaIso) - inicioDoDia(prazoIso)) / DIA));

export const calcularMulta = (prazoIso, referenciaIso) =>
  diasDeAtraso(prazoIso, referenciaIso) * MULTA_POR_DIA;

export const formatarData = (iso) => new Date(iso).toLocaleDateString("pt-BR");

export const formatarMoeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
