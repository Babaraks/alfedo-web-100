import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="bg-white shadow-md py-4 px-6">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-blue-600">Mi Portafolio</h1>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre mí</Link></li>
              <li><Link to="/projects">Proyectos</Link></li>
              <li><Link to="/skills">Habilidades</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </nav>
        </header>
      );
    }

export default Navbar;