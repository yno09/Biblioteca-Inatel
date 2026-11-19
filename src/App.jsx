import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Reservas from "./pages/Reservas";
import Emprestimos from "./pages/Emprestimos";
import Devolucoes from "./pages/Devolucoes";

// Mostrada quando o endereço não existe
const NaoEncontrada = () => (
  <main className="max-w-6xl mx-auto px-4 py-20 text-center">
    <h2 className="text-xl font-bold text-slate-100">Página não encontrada</h2>
    <Link
      to="/"
      className="mt-4 inline-block text-inatel-claro hover:underline"
    >
      Voltar ao catálogo
    </Link>
  </main>
);

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:id" element={<BookDetails />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/devolucoes" element={<Devolucoes />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </>
  );
};

export default App;
