import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">Veterinaria</h3>
            <p className="mt-4">Cuidando a tus mascotas con amor y profesionalismo.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Enlaces</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/servicios" className="hover:underline">Servicios</a></li>
              <li><a href="/contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Redes Sociales</h3>
            <div className="mt-4 space-x-4">
              <a href="https://facebook.com" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2025 Veterinaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
