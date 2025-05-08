import { motion } from 'framer-motion';
import React from 'react';

function ProjectCard({ proyecto }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{proyecto.nombre}</h3>
        <p className="text-gray-600 text-sm mb-4">{proyecto.descripcion}</p>
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          Ver en GitHub
        </a>
      </div>
    </motion.div>
  );
}
export default ProjectCard;