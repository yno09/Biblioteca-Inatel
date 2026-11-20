import { createContext, useContext } from "react";

export const BibliotecaContext = createContext(null);

export const useBiblioteca = () => {
  const contexto = useContext(BibliotecaContext);
  if (!contexto) {
    throw new Error("useBiblioteca precisa estar dentro do BibliotecaProvider");
  }
  return contexto;
};