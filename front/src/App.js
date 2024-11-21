import "./App.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Hoteles from "./pages/Hoteles";
import Inicio from "./pages/Inicio";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Hoteles" element={<Hoteles />} />
          <Route path="Paquetes" element={<Paquetes />} />
          <Route path="Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
