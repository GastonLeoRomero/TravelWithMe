import React from "react";
import "../../../styles/pages/paquetes.css";

const PaqueteItem = (props) => {
  const { id, nombre, destino, noches, hotel, imagen, paquete } = props;

  return (
    <article className="paquetes" id={id}>
      <h3>{nombre}</h3>
      <h4>
        {destino} - {noches}
      </h4>
      <h5>{hotel}</h5>
      <img src={imagen} alt="" />
      <div dangerouslySetInnerHTML={{ __html: paquete }}></div>
      <hr></hr>
    </article>
  );
};

export default PaqueteItem;
