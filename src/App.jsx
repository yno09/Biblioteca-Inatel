import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { BibliotecaProvider } from "./context/BibliotecaProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import ConfirmarReserva from "./pages/ConfirmarReserva";
import Reservas from "./pages/Reservas";
import Emprestimos from "./pages/Emprestimos";
import Devolucoes from "./pages/Devolucoes";

const App = () => {
  return (
    <BibliotecaProvider>
=======
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <>
>>>>>>> 61b91a9b6d0e41a87e11340e349280c7f8da8ff5
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:id" element={<BookDetails />} />
<<<<<<< HEAD
        <Route path="/reservar/:id" element={<ConfirmarReserva />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/devolucoes" element={<Devolucoes />} />
      </Routes>
    </BibliotecaProvider>
  );
};

export default App;
=======
      </Routes>
    </>
  );
};

export default App;
>>>>>>> 61b91a9b6d0e41a87e11340e349280c7f8da8ff5
