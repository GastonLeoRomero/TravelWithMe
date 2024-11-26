import React from "react";
import "../styles/pages/hoteles.css";

const Hoteles = (props) => {
  return (
    <main>
      <h1>Encontra tu mejor hotel</h1>
      <section className="hotels-container">
        <h2>Calafate y Ushuaia</h2>
        <img src="images/calafate.webp" alt="calafate" width={700}></img>
        <h3>Hoteles en Calafate y Ushuaia</h3>
        <a href="#modal-1">HOTEL LAS LENGAS</a>
        <article id="modal-1" class="modal">
          <div class="modal-container">
            <a href="#cerrar" class="modal-close">
              X
            </a>
            <h2>HOTEL LAS LENGAS</h2>
            <p>
              En el centro de Ushuaia, este hotel ofrece un alojamiento moderno
              con vistas a la Bahía Encerrada. Está a un trayecto de 5 minutos
              del aeropuerto internacional de Malvinas Argentina, y ofrece
              aparcamiento gratuito. Los huéspedes podrán disfrutar de una serie
              de platos típicos del restaurante del hotel, o contemplar las
              vistas panorámicas desde el bar. Las habitaciones son espaciosas y
              ofrecen conexión inalámbrica a internet y TV LCD. En el centro de
              la ciudad, con inmejorables vistas a la bahía de Ushuaia y Canal
              Beagle.
            </p>
            <img
              src="images/1689709087877_00.jpg"
              alt="hotel"
              width={400}
              height={300}
            ></img>
          </div>
        </article>
      </section>
      <section className="hotels-container">
        <h2>Bariloche</h2>
        <img src="images/turismo-bariloche.webp" alt="bariloche"></img>
        <h3>Hoteles en Bariloche</h3>
        <a href="#modal-2">Boutique Hotel & Apart Bosque del Nahuel</a>
        <article id="modal-2" class="modal">
          <div class="modal-container">
            <a href="#cerrar" class="modal-close">
              X
            </a>
            <h2>Boutique Hotel & Apart Bosque del Nahuel</h2>
            <p>
              Hay un bar, un servicio de canguro, una guardería y servicio de
              habitaciones a disposición de los huéspedes del hotel. Los
              huéspedes pueden conectarse a Internet en las zonas públicas
              mediante Wi-Fi. Se ofrece servicio de traslado.En las habitaciones
              hay un salón y un cuarto de baño. El equipamiento estándar de la
              mayoría de las habitaciones incluye un balcón que invita a
              relajarse. Los huéspedes podrán dormir cómodamente en un sofá
              cama. Hay disponibles dormitorios separados. Además, hay un
              minibar. Pequeños extras se encargan de proporcionar una estancia
              agradable, como conexión a Internet, televisor y Wi-Fi. Los
              cuartos de baño cuentan con una ducha y una bañera de
              hidromasaje.El establecimiento ofrece una piscina cubierta. La
              bañera de hidromasaje en la zona de baño promete una relajación
              total. Se ofrecen diversas actividades como, por ejemplo, un
              gimnasio, un spa, una sauna, un baño de vapor, masajes y
              tratamientos de hidroterapia.Es posible elegir desayuno.
            </p>
            <img
              src="images/1667917480238_93560116.jpg"
              alt="habitacion"
              width={400}
              height={300}
            ></img>
          </div>
        </article>
      </section>
      <section className="hotels-container">
        <h2>Iguazú</h2>
        <img
          src="images/parque-nacional-iguazu.webp"
          alt="iguazu"
          width={700}
          height={470}
        ></img>
        <h3>Hoteles en Iguazú</h3>
        <a href="#modal-3">Loi Suites Iguazu Hotel</a>
        <article id="modal-3" class="modal">
          <div class="modal-container">
            <a href="#cerrar" class="modal-close">
              X
            </a>
            <h2>Sobre el Loi Suites Iguazu Hotel</h2>
            <p>
              El hotel Loi Suites Iguazú en Puerto Iguazú, Argentina, es un
              oasis de lujo y relajación. Desde sus exuberantes jardines hasta
              las impresionantes vistas desde su terraza, este hotel lo tiene
              todo para hacer que la estancia sea opulenta y agradable. Cada una
              de sus suites, elegantemente decoradas, ofrece una sensación de
              hogar lejos del hogar, con multitud de servicios (como aire
              acondicionado y TV de pantalla plana) para proporcionar confort y
              comodidad. Con piscina, gimnasio e incluso un relajante spa, los
              visitantes pueden estar tranquilos durante toda su estancia. El
              hotel Loi Suites Iguazú, muy bien valorado por sus huéspedes por
              su hospitalidad, es el destino perfecto para los viajeros que
              buscan una experiencia de alto nivel, rodeados de unas
              impresionantes vistas de la naturaleza.
            </p>
            <img
              src="images/1656078424183_EM_2009_031_00264_D3 h.jpg"
              alt="habitacion2"
              width={400}
              height={300}
            ></img>
          </div>
        </article>
      </section>
      <section className="hotels-container">
        <h2>Villa La Angostura</h2>
        <img
          src="images/13b60a5b-f162-42f4-a7bf-a47b868724ff.webp"
          alt="angostura"
          width={700}
          height={500}
        ></img>
        <h3>Hoteles en Villa La Angostura</h3>
        <a href="#modal-4">DEL CABALLERO CASTILLO</a>
        <article id="modal-4" class="modal">
          <div class="modal-container">
            <a href="#cerrar" class="modal-close">
              X
            </a>
            <h2>DEL CABALLERO CASTILLO</h2>
            <p>
              El Del Caballero Castillo Hotel está en Villa La Angostura, a 6 km
              del parque nacional Los Arrayanes. Alberga un restaurante y
              aparcamiento privado gratuito. También hay conexión WiFi en las
              zonas comunes. La recepción permanece abierta las 24 horas del
              día. El aeropuerto más cercano es el aeropuerto San Carlos de
              Bariloche, a 57 km. EL CASTILLO tiene 20 habitaciones espaciosas y
              con amoblamiento de excelente CALIDAD y CONFORT. Cuatro de ellas
              cuentan con HIDROMASAJE en su interior. El Del Caballero Castillo
              Hotel está en Villa La Angostura, a 6 km del parque nacional Los
              Arrayanes.
            </p>
            <img
              src="images/hotel-del-caballero-castillo-1524827.jpg"
              alt="castillo"
              width={400}
              height={300}
            ></img>
          </div>
        </article>
      </section>
      <h3>Más destinos proximamente</h3>
      <div class="spinner"></div>
    </main>
  );
};

export default Hoteles;
