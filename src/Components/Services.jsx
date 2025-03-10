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
        <div className="flex ">
          <h1 className="text-4xl font-bold uppercase text-black relative">
            Servicios
            <span className="block h-1 w-10 bg-blue-500 absolute bottom-0 left-0"></span>
          </h1>
        </div>

        <div className="flex">
          <div className="grid grid-cols-2 gap-4">
            {/* Servicios*/}

            <div>
              <img src={cirugia} className="w-20" alt="" />
              <h1 className="font-bold">Cirugía veterinaria avanzada</h1>
              <p className="text-stone-400">
                Realizamos procedimientos quirúrgicos avanzados, incluyendo
                cirugías de emergencia y electivas. Contamos con tecnología de
                punta y un equipo de cirujanos altamente calificados.
              </p>
            </div>

            <div>
              <img src={vacunacion} className="w-20" alt="" />
              <h1 className="font-bold">Vacunación y desparasitación</h1>
              <p className="text-stone-400">
                Programas completos de vacunación y desparasitación adaptados a
                las necesidades específicas de cada mascota, garantizando su
                protección contra enfermedades y parásitos comunes.
              </p>
            </div>

            <div>
              <img src={diagnostico} className="w-20" alt="" />
              <h1 className="font-bold">Cirugía veterinaria avanzada</h1>
              <p className="text-stone-400">
                Realizamos procedimientos quirúrgicos avanzados, incluyendo
                cirugías de emergencia y electivas. Contamos con tecnología de
                punta y un equipo de cirujanos altamente calificados.
              </p>
            </div>

            <div>
              <img src={hospitalizacion} className="w-20" alt="" />
              <h1 className="font-bold">Cirugía veterinaria avanzada</h1>
              <p className="text-stone-400">
                Realizamos procedimientos quirúrgicos avanzados, incluyendo
                cirugías de emergencia y electivas. Contamos con tecnología de
                punta y un equipo de cirujanos altamente calificados.
              </p>
            </div>
          </div>
          {/* consultas*/}
          <div className=" flex flex-col bg-gray-100 p-8">
            <div>
              <h1 className="font-bold">Consultas oftalmológicas</h1>
              <p className="text-stone-400">
                Ofrecemos diagnóstico y tratamiento avanzado para afecciones
                oculares en mascotas. Utilizamos tecnología de vanguardia y
                técnicas especializadas para tratar cataratas, glaucoma,
                lesiones oculares y otras enfermedades visuales.
              </p>
              <button className="bg-blue-500 text-white p-3 rounded-lg flex items-center cursor-pointer ">
                <MdDateRange className="mr-2" />
                AGENDAR CITA
              </button>
            </div>

            <div className="mt-20">
              <h1 className="font-bold">Consultas generales y reproductivas</h1>
              <p className="text-stone-400">
                Ofrecemos consultas integrales para diagnóstico y tratamiento de
                diversas condiciones de salud en mascotas, desde chequeos
                rutinarios hasta casos complejos, proporcionando cuidado y
                asesoramiento experto.
              </p>
              <button className="bg-green-500 text-white p-3 rounded-lg flex items-center cursor-pointer ">
                <FaWhatsapp className="mr-2" />
                HACER CITA
              </button>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Services;
