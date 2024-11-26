import React from "react";
import "../../../styles/pages/hoteles.css";

const HotelItem = (props) => {
  const { id, nombre, destino, noches, hotel, imagen, descripcion } = props;

  return (
    <article className="hoteles" id={id}>
      <h3>{nombre}</h3>
      <h4>
        {destino} - {noches}
      </h4>
      <h5>{hotel}</h5>
      <img src={imagen} alt="" />
      <div dangerouslySetInnerHTML={{ __html: descripcion }}></div>
      <hr></hr>
    </article>
  );
};

export default HotelItem;
