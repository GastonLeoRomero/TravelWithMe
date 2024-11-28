import React from "react";

import PaqueteItem from "./PaqueteItem";

function PaqueteList({ paquetes }) {
  return paquetes.length > 0 ? (
    <section className="container-results">
      {paquetes.map((item) => (
        <PaqueteItem
          key={item.id}
          nombre={item.nombre}
          destino={item.destino}
          noches={item.noches}
          hotel={item.hotel}
          imagen={item.imagen}
          paquete={item.paquete}
        />
      ))}
    </section>
  ) : (
    //notificacion: renderiza cuando no hay paquetes disponibles
    <section className="container-no-results">
      <p className="no-results-msg">
        No hay paquetes disponibles con estas características. ¡Seguí buscando!
      </p>
    </section>
  );
}

export default PaqueteList;
