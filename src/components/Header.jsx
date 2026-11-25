import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { to: "/", label: "Catálogo", end: true },
  { to: "/reservas", label: "Reservas" },
  { to: "/emprestimos", label: "Empréstimos" },
  { to: "/devolucoes", label: "Devoluções" },
];

const Header = () => {
  return (
    <header className="rounded-lg bg-blue-600 px-4 py-3 text-white sm:py-4">
      {/*
        sm+:      logo | menu | tema (tudo na mesma linha)
        celular:  logo + tema na 1ª linha, menu embaixo
      */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3">
        <Link to="/" className="shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo-inatel.png`}
            alt="Inatel"
            className="h-8 w-auto sm:h-10"
          />
          <h1 className="sr-only">Biblioteca Inatel</h1>
        </Link>

        <nav className="order-3 flex w-full flex-wrap items-center gap-2 sm:order-2 sm:w-auto">
          {LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded px-3 py-1.5 text-sm font-medium transition-colors ${
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

        <div className="order-2 ml-auto sm:order-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
