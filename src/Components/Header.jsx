import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="p-4 flex justify-between items-center fixed top-0 bg-white w-full z-10">
      <h1 className="text-3xl font-bold">Veterinaria</h1>
      <nav>
        <ul className="flex space-x-4 font-semibold">
          <li>
            <Link to="inicio" smooth={true} duration={500}>
              inicio
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              servicios
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to="contactos" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
