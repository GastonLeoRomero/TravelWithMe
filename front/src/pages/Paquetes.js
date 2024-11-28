import { useState, useEffect } from "react";
import axios from "axios";
import PaqueteItem from "../components/layout/paquetes/PaqueteItem";

const Paquetes = (props) => {
  /* --------------- HOOKS -------------------- */

  const [loading, setLoading] = useState(false);
  const [paquetes, setPaquetes] = useState([]);

  // primera vez que carga la página
  useEffect(() => {
    const cargarPaquetes = async () => {
      setLoading(true);
      // const response = await axios.get("${process.env.REACT_APP_API_URL}/api/paquetes");
      const response = await axios.get("http://localhost:3000/api/paquetes");
      setPaquetes(response.data);
      setLoading(false);
    };

    cargarPaquetes();
  }, []);

  /* --------------- MAIN RENDER ------------------ */

  return (
    <section>
      <h2>Paquetes</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        paquetes.map((item) => (
          <PaqueteItem
            key={item.id}
            nombre={item.nombre}
            destino={item.destino}
            noches={item.noches}
            hotel={item.hotel}
            imagen={item.imagen}
            paquete={item.paquete}
          />
        ))
      )}
    </section>
  );
};

export default Paquetes;
