import React from 'react';
import ProjectCard from '../elements/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

function ProjectSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Davante Simulator Platform",
      description: t("projects.davanteDesc"),
      imageUrl: "https://res.cloudinary.com/drkcjtdcm/image/upload/v1768818700/davante_simulator_udetgv.png",
      repoUrl: "",
      tags: ["React", "TypeScript", "Node.js", "TailwindCSS", "Unity WebGL", "JWT", "Docker", "AWS"]
    },
    {
      title: "Portfolio Website",
      description: t("projects.portfolioDesc"),
      imageUrl: "https://res.cloudinary.com/drkcjtdcm/image/upload/v1768818718/portfolio_hipfzr.png",
      repoUrl: "",
      tags: ["React", "TypeScript", "Node.js"]
    },
  ];

  return (
    <section id="projects" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Cabecera de la sección */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("projects.title")}<span className="text-[#00B3B0]">.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          {t("projects.subtitle")}
        </p>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key = {index}
            {...project}
          />
        ))}
      </div>

      {/* Botón "Ver más" para GitHub */}
      <div>
        <a 
          href="https://github.com/Byron-115"
          target="_blank"
          className="inline-flex items-center gap-2 text-white border-b border-[#00B3B0] pb-1 hover:text-[#00B3B0] transition-colors my-6"
        >
          {t("projects.viewMore")}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
        
    </section>
  );
}

export default ProjectSection;