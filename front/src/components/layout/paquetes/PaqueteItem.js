import React from "react";
import "../../../styles/pages/paquetes.css";

const PaqueteItem = (props) => {
  const { destino, hotel, imagen, paquete } = props;

  return (
    <article className="paquetes">
      <h3>{destino}</h3>
      <h4>{hotel}</h4>
      <img src={imagen} alt="" />
      <div dangerouslySetInnerHTML={{ __html: paquete }}></div>
      <hr></hr>
    </article>
  );
};

export default PaqueteItem;
