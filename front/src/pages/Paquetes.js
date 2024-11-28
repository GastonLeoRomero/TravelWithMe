import { useState, useEffect } from "react";
import axios from "axios";
import { filtrosPaquetes } from "../assets/const";
import Buscadores from "../components/layout/buscador/Buscadores";
import PaqueteList from "../components/layout/paquetes/PaqueteList";

const Paquetes = (props) => {
  /* --------------- HOOKS -------------------- */

  const [loading, setLoading] = useState(false);
  const [paquetes, setPaquetes] = useState([]);
  const [filtros, setFiltros] = useState(filtrosPaquetes);
  const [paquetesFiltrados, setPaquetesFiltrados] = useState([]);

  // primera vez que carga la página
  useEffect(() => {
    const cargarPaquetes = async () => {
      setLoading(true);
      // const response = await axios.get("${process.env.REACT_APP_API_URL}/api/paquetes");
      const response = await axios.get("http://localhost:3000/api/paquetes");
      setPaquetes(response.data);
      setPaquetesFiltrados(response.data);
      setLoading(false);
    };

    cargarPaquetes();
  }, []);

  // Cada vez que se selecciona una opción en un filtro
  useEffect(() => {
    let paquetesCopy = paquetes.filter((paquete) => {
      const selectedDestination = parseInt(filtros[0].value);
      const selectedNights = parseInt(filtros[1].value);
      const destino = paquete.destino.toLowerCase();
      const noches = paquete.noches.toLowerCase();
      const opcionDestino =
        filtros[0].options[selectedDestination].toLowerCase();
      const opcionNoches = filtros[1].options[selectedNights].toLowerCase();
      const resultado =
        //filtra paquetes por destino
        (destino === opcionDestino || filtros[0].value === "0") &&
        //filtra paquetes por cantidad de noches
        (noches === opcionNoches || filtros[1].value === "0");
      return resultado;
    });
    setPaquetesFiltrados(paquetesCopy);
  }, [filtros]);

  /* --------------- FUNCTIONS -------------------- */

  //Maneja el estado de los filtros
  const handleSelect = (i) => {
    return (e) => {
      const copyFiltros = [...filtros];
      copyFiltros[i].value = e.target.value;
      setFiltros(copyFiltros);
    };
  };

  //Maneja el reseteo de los filtros
  const handleReset = () => {
    const filtrosCopy = filtros.map((filtro) => {
      filtro.value = "0";
      return filtro;
    });
    setFiltros(filtrosCopy);
    //Renderiza todo sin filtros
    setPaquetes(paquetes);
  };

  /* --------------- MAIN RENDER ------------------ */

  return (
    <section>
      <h2>Paquetes</h2>
      <Buscadores
        id={"buscadores"}
        filters={filtros}
        selectHandler={handleSelect}
        resetHandler={handleReset}
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <PaqueteList paquetes={paquetesFiltrados} />
      )}
    </section>
  );
};

export default Paquetes;
