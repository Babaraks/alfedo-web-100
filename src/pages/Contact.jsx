import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contacto</h2>

      <form
        action="https://formspree.io/f/mrbqklav"
        method="POST"
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-600">
        También puedes escribirme a: <br />
        <a
          href="mailto:reyes.reser23@gmail.com"
          className="text-blue-500 hover:underline"
        >
          reyes.reser23@gmail.com
        </a>
        <br />
        o visitar mis redes:
        <div className="flex justify-center gap-6 mt-4">
  <a
    href="https://github.com/Babaraks"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-black text-2xl"
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/octavio-abraham-reyes-gonzález-339704328/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 text-2xl"
  >
    <FaLinkedin />
  </a>
</div>
      </div>
    </div>
  );
}

export default Contact;
