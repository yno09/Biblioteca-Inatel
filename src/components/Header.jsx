import { Link } from "react-router-dom";
import { BookIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-slate-100 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <BookIcon size={32} />
          <h1 className="text-2xl font-bold">Biblioteca Inatel</h1>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-4 py-2 rounded">
        <button type = "submit">Catalogo</button>
        
        <button type = "submit">Reservas</button>
        <button type = "submit">Empréstimos</button>
        <button type = "submit">Devoluções</button>
      </div>
    </header>
  );
};

export default Header;