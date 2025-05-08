import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs,FaJava,  FaReact, FaNode, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql  } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';

function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Habilidades Técnicas</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        <Skill icon={<FaHtml5 className="text-orange-600 text-4xl" />} name="HTML" />
        <Skill icon={<FaCss3Alt className="text-blue-500 text-4xl" />} name="CSS" />
        <Skill icon={<FaJs className="text-yellow-400 text-4xl" />} name="JavaScript" />
        <Skill icon={<FaReact className="text-cyan-400 text-4xl" />} name="React" />
        <Skill icon={<FaNode className="text-green-600 text-4xl" />} name="Node.js" />
        <Skill icon={<SiTailwindcss className="text-blue-400 text-4xl" />} name="Tailwind CSS" />
        <Skill icon={<FaGitAlt className="text-red-500 text-4xl" />} name="Git" />
        <Skill icon={<SiPostgresql className="text-blue-700 text-4xl" />} name="PostgreSQL" />
        <Skill icon={<FaJava className="text-red-500 text-4xl" />} name="Java" />
        <Skill icon={<FaPython className="text-blue-400 text-4xl" />} name="Python" />
        <Skill icon={<DiDjango className="text-blue-400 text-4xl" />} name="Django" />
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300">
      {icon}
      <span className="mt-2 text-sm text-gray-700 font-medium">{name}</span>
    </div>
  );
}

export default Skills;
