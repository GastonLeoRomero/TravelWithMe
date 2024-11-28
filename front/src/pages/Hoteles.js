import React from "react";
import "../styles/pages/hoteles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import HotelItem from "../components/layout/hoteles/HotelItem";
import Buscadores from "../components/layout/buscador/Buscadores";
import { filtros } from "../assets/const";

const Hoteles = (props) => {
  /* --------------- HOOKS -------------------- */

  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(filtros);
  const [hotels, setHotels] = useState([]);
  const [hotelesFiltrados, setHotelesFiltrados] = useState([]);

  // Primera vez que carga la página
  useEffect(() => {
    const cargarHoteles = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/paquetes");
      setHotels(response.data);
      setHotelesFiltrados(response.data);
      setLoading(false);
    };

    cargarHoteles();
  }, []);

  // Cada vez que se selecciona una opción en un filtro
  useEffect(() => {
    let hotelsCopy = hotels.filter((hotel) => {
      const selectedDestination = parseInt(filters[0].value);
      const selectedNights = parseInt(filters[1].value);
      const destino = hotel.destino.toLowerCase();
      const noches = hotel.noches.toLowerCase();
      const opcionDestino =
        filters[0].options[selectedDestination].toLowerCase();
      const opcionNoches = filters[1].options[selectedNights].toLowerCase();
      const resultado =
        //filtra hoteles por destino
        (destino === opcionDestino || filters[0].value === "0") &&
        //filtra hoteles por cantidad de noches
        (noches === opcionNoches || filters[1].value === "0");
      return resultado;
    });
    setHotelesFiltrados(hotelsCopy);
  }, [filters]);

  /* --------------- FUNCTIONS -------------------- */

  //Maneja el estado de los filtros
  const handleSelect = (i) => {
    return (e) => {
      const copyFilters = [...filters];
      copyFilters[i].value = e.target.value;
      setFilters(copyFilters);
    };
  };

  //Maneja el reseteo de los filtros
  const handleReset = () => {
    const filtersCopy = filters.map((filter) => {
      filter.value = "0";
      return filter;
    });
    setFilters(filtersCopy);
    //Renderiza todo sin filtros
    setHotels(hotels);
  };

  /* --------------- MAIN RENDER ------------------ */

  return (
    <section>
      <h2>Encontra tu mejor hotel</h2>
      <Buscadores
        id={"buscadores"}
        filters={filters}
        selectHandler={handleSelect}
        resetHandler={handleReset}
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        hotelesFiltrados.map((item) => (
          <HotelItem
            key={item.id}
            nombre={item.nombre}
            destino={item.destino}
            noches={item.noches}
            hotel={item.hotel}
            imagen={item.imagen}
            descripcion={item.paquete}
          />
        ))
      )}
    </section>
  );
};

export default Hoteles;
