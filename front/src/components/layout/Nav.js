import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layout/nav.css";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Hoteles"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Hoteles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Paquetes"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Paquetes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contacto"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
