import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../assets/projects.json'; // Importar los proyectos desde el JSON

function Projects() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(proyectosData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto, index) => (
          <ProjectCard key={index} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
