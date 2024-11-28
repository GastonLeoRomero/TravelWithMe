import React from "react";
import "../styles/pages/hoteles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Buscadores from "../components/layout/buscador/Buscadores";
import { filtrosHoteles } from "../assets/const";
import HotelList from "../components/layout/hoteles/HotelList";

const Hoteles = (props) => {
  /* --------------- HOOKS -------------------- */

  const [loading, setLoading] = useState(false);
  const [filtros, setFiltros] = useState(filtrosHoteles);
  const [hoteles, setHoteles] = useState([]);
  const [hotelesFiltrados, setHotelesFiltrados] = useState([]);

  // Primera vez que carga la página
  useEffect(() => {
    const cargarHoteles = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/paquetes");
      setHoteles(response.data);
      setHotelesFiltrados(response.data);
      setLoading(false);
    };

    cargarHoteles();
  }, []);

  // Cada vez que se selecciona una opción en un filtro
  useEffect(() => {
    let hotelesCopy = hoteles.filter((hotel) => {
      const destinoSeleccionado = parseInt(filtros[0].value);
      const regimenSeleccionado = parseInt(filtros[1].value);
      const destino = hotel.destino.toLowerCase();
      const regimen = hotel.regimen.toLowerCase();
      const opcionDestino =
        filtros[0].options[destinoSeleccionado].toLowerCase();
      const opcionRegimen =
        filtros[1].options[regimenSeleccionado].toLowerCase();
      const resultado =
        //filtra hoteles por destino
        (destino === opcionDestino || filtros[0].value === "0") &&
        //filtra hoteles por regimen
        (regimen === opcionRegimen || filtros[1].value === "0");
      return resultado;
    });
    setHotelesFiltrados(hotelesCopy);
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
    setHoteles(hoteles);
  };

  /* --------------- MAIN RENDER ------------------ */

  return (
    <section>
      <h2>Encontra tu mejor hotel</h2>
      <Buscadores
        id={"buscadores"}
        filters={filtros}
        selectHandler={handleSelect}
        resetHandler={handleReset}
      />
      {loading ? <p>Cargando...</p> : <HotelList hoteles={hotelesFiltrados} />}
    </section>
  );
};

export default Hoteles;
