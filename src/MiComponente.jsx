import React from 'react';

const MiComponente = () => {
  return (
    <>
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {}
              <a href="/" className="flex items-center py-4 px-2">
                <img src= "/klipartz.com.png" alt="logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">Trabajo Final</span>
              </a>
            </div>
            {}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900 transition duration-300">Inicio</a>
              <a href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900 transition duration-300">Acerca de</a>
              <a href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900 transition duration-300">Servicios</a>
              <a href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900 transition duration-300">Contacto</a>
            </div>
          </div>
          {}
          <div className="hidden md:flex items-center space-x-3">
            <a href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-100 transition duration-300">Iniciar Sesión</a>
            <a href="/signup" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Regístrate</a>
          </div>
        </div>
      </div>
    </nav>
    <br />
    </>
  );
};

export default MiComponente;
