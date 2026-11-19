import { Link, NavLink } from "react-router-dom";
import { BookIcon } from "lucide-react";

const LINKS = [
  { to: "/", label: "Catálogo", end: true },
  { to: "/reservas", label: "Reservas" },
  { to: "/emprestimos", label: "Empréstimos" },
  { to: "/devolucoes", label: "Devoluções" },
];

const Header = () => {
  return (
    <header className="bg-blue-600 text-slate-100 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
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
                  : "text-slate-100 hover:bg-white/10"
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