import React from "react";
import "../styles/pages/hoteles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import HotelItem from "../components/layout/hoteles/HotelItem";

const Hoteles = (props) => {
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const cargarHoteles = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/paquetes");
      setHotels(response.data);
      setLoading(false);
    };

    cargarHoteles();
  }, []);

  return (
    <section>
      <h2>Encontra tu mejor hotel</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        hotels.map((item) => (
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
