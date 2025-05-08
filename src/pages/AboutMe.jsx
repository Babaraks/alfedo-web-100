import React from 'react';

function AboutMe() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre Mí</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="space-y-6 text-justify">
          <p className="text-gray-700 text-lg leading-relaxed">
            ¡Hola! Soy <span className="font-semibold text-blue-700">Octavio Abraham Reyes Gonzalez </span>, estudiante de <span className="font-semibold">Ingeniería en Sistemas</span>.
            Desde siempre me ha apasionado la tecnología.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
  Actualmente, me estoy enfocando en perfeccionar mis habilidades con tecnologías modernas como <strong>React Native</strong>, <strong>Node.js</strong> y <strong>Express</strong>.
  Mi principal enfoque es desarrollar backends eficientes y escalables, y he trabajado en proyectos que integran tecnologías como <strong>PostgreSQL</strong>, <strong>Java</strong> y <strong>Python</strong>.
</p>
          <blockquote className="italic text-blue-600 text-md border-l-4 border-blue-400 pl-4">
            “Si el codigo ya compila, ya no le muevas”
          </blockquote>

          <div className="text-gray-700">
            <p className="font-semibold mb-2">Áreas que me motivan:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Desarrollo de aplicaciones movules</li>
              <li>Interfaces de usuario intuitivas</li>
              <li>Desarrollo fullstack con impacto social</li>
              <li>Optimización y accesibilidad web</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-2">Tecnologías que uso o estoy aprendiendo:</p>
            <p className="text-gray-700 leading-relaxed">
              React, Node.js, Express, Tailwind CSS, Firebase, Mongo, Git, Figma, entre otras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

