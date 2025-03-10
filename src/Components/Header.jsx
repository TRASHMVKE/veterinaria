import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="p-4 flex justify-between items-center fixed top-0 bg-white w-full shadow-md z-20">
      {/* Logo */}
      <h1 className="text-3xl font-bold">Veterinaria</h1>

      {/* Menú en pantallas grandes */}
      <nav className="hidden md:flex space-x-6 font-semibold">
        {["inicio", "services", "about", "contactos"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Botón menú hamburguesa */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        {isOpen ? <IoClose /> : <CiMenuBurger />}
      </button>

      {/* Menú móvil */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-xl font-semibold shadow-lg transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        >
          <IoClose />
        </button>
        {["inicio", "services", "about", "contactos"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
            onClick={closeMenu}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
