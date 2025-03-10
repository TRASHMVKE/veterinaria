import React from "react";
import veterinaria from "../assets/veterinaria.jpeg";
import veterinario from "../assets/veterinario.jpeg";
import animales from "../assets/animales.jpeg"; // Importación correcta de imagen de fondo

function Specialists() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${animales})` }}
    >
      {/* Capa oscura de fondo */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenedor principal */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Especialista 1 */}
        <div className="relative max-w-xs md:max-w-sm">
          <img
            src={veterinaria}
            alt="Dra. Yamiley de la Cruz"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white rounded-b-lg">
            <p>
              <strong>Dra. Yamiley de la Cruz</strong>
              <br />
              Oftalmóloga veterinaria
              <br />
              Con más de 15 años de experiencia en medicina veterinaria interna
              y oftalmología especializada.
            </p>
          </div>
        </div>

        {/* Especialista 2 */}
        <div className="relative max-w-xs md:max-w-sm">
          <img
            src={veterinario}
            alt="Dr. Javier Pineda Figari"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white rounded-b-lg">
            <p>
              <strong>Dr. Javier Pineda Figari</strong>
              <br />
              Cirujano veterinario
              <br />
              Más de 15 años de experiencia en cirugía de tejidos blandos,
              ortopedia y consulta reproductiva especializada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialists;
