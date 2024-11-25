import React from "react";

const PaqueteItem = (props) => {
  const { destino, hotel, imagen, paquete } = props;

  return (
    <div className="paquetes">
      <h1>{destino}</h1>
      <h2>{hotel}</h2>
      <img src={imagen} />
      <div dangerouslySetInnerHTML={{ __html: paquete }}></div>
      <hr></hr>
    </div>
  );
};

export default PaqueteItem;
