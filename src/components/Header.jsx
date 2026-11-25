import { Link, NavLink } from "react-router-dom";
import { BookIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { to: "/", label: "Catálogo", end: true },
  { to: "/reservas", label: "Reservas" },
  { to: "/emprestimos", label: "Empréstimos" },
  { to: "/devolucoes", label: "Devoluções" },
];

const Header = () => {
  return (
    <header className="bg-blue-600 px-4 py-3 text-white sm:px-6 sm:py-4 lg:px-8">
      {/*
        Grid do cabeçalho:
        - celular: logo + tema na 1ª linha, menu embaixo (ocupando a largura toda)
        - md+:     logo | menu | tema, tudo na mesma linha
      */}
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 md:grid-cols-[auto_1fr_auto]">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3 md:row-start-1"
        >
          <BookIcon className="size-7 shrink-0 sm:size-8" />
          <h1 className="truncate text-xl font-bold sm:text-2xl">
            Biblioteca Inatel
          </h1>
        </Link>

        <div className="md:col-start-3 md:row-start-1">
          <ThemeToggle />
        </div>

        <nav className="col-span-2 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap md:col-span-1 md:col-start-2 md:row-start-1 md:justify-center">
          {LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-center text-sm font-medium transition-colors sm:py-1.5 ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;