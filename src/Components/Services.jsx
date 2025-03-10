import React from "react";
import { MdDateRange } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";

import cirugia from "../assets/cirugia.jpeg";
import vacunacion from "../assets/vacuna.jpeg";
import diagnostico from "../assets/diagnostico.jpeg";
import hospitalizacion from "../assets/hospitalizacion.jpeg";

function Services() {
  return (
    <Element name="services">
      <section className="m-5">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold uppercase text-black relative inline-block">
            Servicios
            <span className="block h-1 w-10 bg-blue-500 absolute bottom-0 left-0"></span>
          </h1>
        </div>

        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Grid de Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cirugía */}
            <div className="flex flex-col items-center text-center">
              <img src={cirugia} className="w-24 h-24 object-cover" alt="Cirugía veterinaria" />
              <h2 className="font-bold mt-2">Cirugía veterinaria avanzada</h2>
              <p className="text-gray-500">
                Procedimientos quirúrgicos avanzados, incluyendo cirugías de emergencia y electivas.
              </p>
            </div>

            {/* Vacunación */}
            <div className="flex flex-col items-center text-center">
              <img src={vacunacion} className="w-24 h-24 object-cover" alt="Vacunación y desparasitación" />
              <h2 className="font-bold mt-2">Vacunación y desparasitación</h2>
              <p className="text-gray-500">
                Programas completos adaptados a las necesidades de cada mascota.
              </p>
            </div>

            {/* Diagnóstico */}
            <div className="flex flex-col items-center text-center">
              <img src={diagnostico} className="w-24 h-24 object-cover" alt="Diagnóstico por imágenes" />
              <h2 className="font-bold mt-2">Diagnóstico por imágenes</h2>
              <p className="text-gray-500">
                Tecnología avanzada para diagnóstico preciso de enfermedades.
              </p>
            </div>

            {/* Hospitalización */}
            <div className="flex flex-col items-center text-center">
              <img src={hospitalizacion} className="w-24 h-24 object-cover" alt="Hospitalización veterinaria" />
              <h2 className="font-bold mt-2">Hospitalización y cuidados intensivos</h2>
              <p className="text-gray-500">
                Atención especializada para mascotas en estado crítico.
              </p>
            </div>
          </div>

          {/* Consultas */}
          <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            {/* Oftalmología */}
            <div className="mb-6">
              <h2 className="font-bold text-lg">Consultas oftalmológicas</h2>
              <p className="text-gray-500">
                Diagnóstico y tratamiento avanzado para afecciones oculares en mascotas.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition">
                <MdDateRange />
                Agendar Cita
              </button>
            </div>

            {/* Consultas generales */}
            <div>
              <h2 className="font-bold text-lg">Consultas generales y reproductivas</h2>
              <p className="text-gray-500">
                Chequeos, diagnósticos y tratamientos para diversas condiciones de salud.
              </p>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
                <FaWhatsapp />
                Hacer Cita
              </button>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Services;
