import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TrackDetails from "./pages/BookDetails";
import Header from "./components/Header";
import { fetchBooks } from "./services/api";

const App = () => {
  useEffect(() => {
    fetchBooks()
      .then((data) => console.log(data))
      .catch((erro) => console.error(erro));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:id" element={<TrackDetails />} />
      </Routes>
    </>
  );
};

export default App;