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
    <header className="relative bg-blue-600 text-white px-4 py-4">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-4 pr-12 sm:pr-0">
        <Link to="/" className="flex items-center gap-3">
          <BookIcon size={32} />
          <h1 className="text-2xl font-bold">Biblioteca Inatel</h1>
        </Link>
      </div>

      <nav className="max-w-6xl mx-auto mt-3 flex flex-wrap items-center gap-2">
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
    </header>
  );
};

export default Header;