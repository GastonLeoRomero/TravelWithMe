import React from "react";
import "../styles/pages/contacto.css";

const Contacto = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contactanos!</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre </label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label for="email">Email </label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label for="telefono">Teléfono </label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label for="mensaje">Mensaje </label>
            <textarea name=""></textarea>
          </p>
          <p class="acciones">
            <input type="submit" value="Enviar"></input>
          </p>
        </form>
      </div>
      <br></br>
      <div class="datos">
        <h2>Otros medios de Comunicación</h2>
        <ul>
          <li>Teléfono: 123456789</li>
          <li>Email: gaston@turismo.com</li>
          <li>Instagram: turismo.gaston</li>
        </ul>
      </div>
    </main>
  );
};

export default Contacto;
