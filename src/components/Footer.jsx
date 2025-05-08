import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Babarak. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
