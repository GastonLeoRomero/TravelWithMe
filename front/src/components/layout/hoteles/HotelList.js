import React from "react";

import HotelItem from "./HotelItem";

function HotelList({ hoteles }) {
  return hoteles.length > 0 ? (
    <section className="container-results">
      {hoteles.map((item) => (
        <HotelItem
          key={item.id}
          regimen={item.regimen}
          destino={item.destino}
          noches={item.noches}
          hotel={item.hotel}
          imagen={item.imagen}
          descripcion={item.paquete}
        />
      ))}
    </section>
  ) : (
    //notificacion: renderiza cuando no hay hoteles disponibles
    <section className="container-no-results">
      <p className="no-results-msg">
        No hay hoteles disponibles con estas características. ¡Seguí buscando!
      </p>
    </section>
  );
}

export default HotelList;
