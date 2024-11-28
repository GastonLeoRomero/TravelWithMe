import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layout/nav.css";

const Nav = (props) => {
  return (
    <nav className="sti">
      <button className="btn anim-bottom to-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Inicio
        </NavLink>
      </button>

      <button className="btn anim-bottom to-center">
        <NavLink
          to="/Hoteles"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Hoteles
        </NavLink>
      </button>

      <button className="btn anim-bottom to-center">
        <NavLink
          to="/Paquetes"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Paquetes
        </NavLink>
      </button>

      <button className="btn anim-bottom to-center">
        <NavLink
          to="/Contacto"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Contacto
        </NavLink>
      </button>
    </nav>
  );
};

export default Nav;
