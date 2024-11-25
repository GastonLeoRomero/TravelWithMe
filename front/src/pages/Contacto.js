import React from "react";
import "../styles/pages/contacto.css";
import { useState } from "react";
import axios from "axios";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.messagge);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="holder contacto">
      <div>
        <h2>Contactanos!</h2>
        <form
          action="/contacto"
          method="post"
          onSubmit={handleSubmit}
          className="formulario"
        >
          <p>
            <label for="nombre">Nombre </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label for="email">Email </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label for="telefono">Teléfono </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label for="mensaje">Mensaje </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </p>
          <p class="acciones">
            <input type="submit" value="Enviar"></input>
          </p>
        </form>
        {sending ? <p>Enviando mensaje...</p> : null}
        {msg ? <p>{msg}</p> : null}
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
