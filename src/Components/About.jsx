import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about">
      <section className="p-8  h-100">
        <div className="flex ">
          <h1 className="text-4xl font-bold uppercase text-black relative">
            nuestra clinica veterinaria
            <span className="block  h-1 w-20 bg-blue-500 absolute bottom-0  left-0"></span>
          </h1>
        </div>
        {/* Imagen y descripción */}
        <div className="flex">
          <div className="md:w-2/3 flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg">
            <img
              src="./src/assets/imagen1.jpg"
              alt=""
              className="w-full md:w-1/3 rounded-lg shadow-md "
            />
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-2">
                Pasión y cuidado veterinario
              </h2>
              <p className="text-gray-600 mb-4">
                Nuestra misión es más que tratar a las mascotas; se trata de
                crear vínculos duraderos para ofrecer un cuidado de excelencia.
                Con un{" "}
                <span className="font-bold">equipo apasionado y dedicado</span>,
                estamos aquí para brindar un servicio excepcional que no solo
                garantiza la salud y seguridad de las mascotas, sino que también
                celebre la conexión especial que compartimos con ellos.
              </p>
              <span className="text-green-500 font-semibold text-lg">
                Asvet
              </span>
            </div>
          </div>
          {/* Sección derecha */}
          <div className="md:w-1/3  p-4">
            <div className="bg-green-500 text-white p-3 rounded-t-lg text-lg-font-semibold">
              Legado
            </div>
            <div className="bg-white shadow-md p-4 rounded-b-lg">
              <h3 className="text-lg font-bold">Historia</h3>
              <p className="text-gray-600 text-sm mt-2">
                Pioneros en la <span className="font-bold">Zona Oriental</span>{" "}
                (Santo Domingo Este) con servicios avanzados como laboratorio,
                ecografía, radiografía y criocirugía. Líderes en oftalmología
                con tonometría, electrorretinografía y cirugía intraocular.
              </p>
            </div>
            {/* Opciones de servicios */}
            <div className="mt-4">
              {[
                "CUIDADO INTEGRAL",
                "PARTICIPACIÓN DOCENTE",
                "DIAGNÓSTICOS DE GLAUCOMA",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-3 mt-2 flex justify-between items-center rounded-md cursor-pointer"
                >
                  {item}
                  <span className="text-xl">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
