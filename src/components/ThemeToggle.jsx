import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const CHAVE = "tema";

// O index.html já aplicou a classe "dark" antes do React carregar,
// então basta ler o estado atual direto do <html>.
const temaAtual = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const ThemeToggle = () => {
  const [tema, setTema] = useState(temaAtual);
  const escuro = tema === "dark";

  const alternar = () => {
    const novo = escuro ? "light" : "dark";
    document.documentElement.classList.toggle("dark", novo === "dark");

    try {
      localStorage.setItem(CHAVE, novo);
    } catch {
      // Sem localStorage (modo privado, por exemplo): o tema vale só até recarregar
    }

    setTema(novo);
  };

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={escuro ? "Mudar para o modo claro" : "Mudar para o modo escuro"}
      title={escuro ? "Clique para o modo claro" : "Clique para o modo escuro"}
      className="flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
    >
      {escuro ? <MoonIcon size={18} /> : <SunIcon size={18} />}
      <span className="hidden sm:inline">{escuro ? "Escuro" : "Claro"}</span>
    </button>
  );
};

export default ThemeToggle;