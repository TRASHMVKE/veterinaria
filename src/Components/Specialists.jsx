import React from "react";

function Specialists() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(./src/assets/images/animales.jpeg)" }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ filter: "brightness(0.8)" }}
      ></div>

      <div className="absolute flex items-center justify-center gap-8">
        s
        <div className="relative ">
          <img
            src="./src/assets/images/veterinaria.jpeg"
            alt="Veterinarios"
            className="w-96 h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full p-2 backdrop-blur-xs  text-black">
            <p>
              <strong>Dra. Yamiley de la Cruz</strong>
              <br />
              Oftalmóloga veterinaria
              <br />
              Con más de 15 años de experiencia, se especializa en medicina
              veterinaria interna y oftalmología especializada.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="./src/assets/images/veterinario.jpeg"
            alt="Veterinarios"
            className="w-96 h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full p-2  backdrop-blur-xs  bg-opacity-75 text-black">
            <p> 
              <strong>Dr. Javier Pineda Figari</strong>
              <br />
              Cirujano veterinario
              <br />
              Más de 15 años de experiencia en la cirugía de tejidos blandos /
              ortopedia, y consulta reproductiva especializada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialists;
