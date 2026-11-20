import { Routes, Route } from "react-router-dom";
import { BibliotecaProvider } from "./context/BibliotecaProvider";
import Header from "./components/Header";
import Home from "./pages/home";
import BookDetails from "./pages/BookDetails";
import ConfirmarReserva from "./pages/ConfirmarReserva";
import Reservas from "./pages/Reservas";
import Emprestimos from "./pages/Emprestimos";
import Devolucoes from "./pages/Devolucoes";

const App = () => {
  return (
    <BibliotecaProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:id" element={<BookDetails />} />
        <Route path="/reservar/:id" element={<ConfirmarReserva />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/devolucoes" element={<Devolucoes />} />
      </Routes>
    </BibliotecaProvider>
  );
};

export default App;