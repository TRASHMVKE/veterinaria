import React from "react";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
function Contact() {
  return (
    <Element name="contactos">
      <div id="contactos" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Contacto</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Información de contacto
              </h3>
              <p className="mt-4 text-gray-600">
                Dirección: Calle Veterinaria 123, Santo Domingo
              </p>
              <p className="mt-2 text-gray-600">Teléfono: +1 (123) 456-7890</p>
              <p className="mt-2 text-gray-600">
                Correo electrónico: contacto@veterinaria.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Formulario de contacto
              </h3>
              <form className="mt-4">
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="py-2 px-4 border border-gray-300 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="py-2 px-4 border border-gray-300 rounded-md"
                  />
                  <textarea
                    placeholder="Mensaje"
                    className="py-2 px-4 border border-gray-300 rounded-md"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
