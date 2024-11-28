import React from "react";
import "../../../styles/pages/hoteles.css";

const HotelItem = (props) => {
  const { id, regimen, destino, noches, hotel, imagen, descripcion } = props;

  return (
    <article className="hoteles" id={id}>
      <img src={imagen} alt="" />
      <h3>{hotel}</h3>
      <h4>{destino}</h4>
      <h5>
        {regimen} - {noches}
      </h5>
      <div dangerouslySetInnerHTML={{ __html: descripcion }}></div>
    </article>
  );
};

export default HotelItem;
