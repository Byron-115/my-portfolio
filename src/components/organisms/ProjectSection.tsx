import React from 'react'
import ProjectCard from '../elements/ProjectCard';


const projects = [
  {
    title: "Davante Simulator Platform",
    description: "Lideré el frontend de un MVP SaaS para la gestión centralizada de simuladores 3D. Implementé autenticación robusta, integración compleja con Unity WebGL y un dashboard administrativo.",
    imageUrl: "/assets/davante_simulator.png",
    repoUrl: "",
    tags: ["React", "TypeScript", "Node.js", "TailwindCSS", "Unity WebGL", "JWT", "Docker", "AWS"]
  },
  {
    title: "Portfolio Website",
    description: "Portafolio personal desarrollado con arquitectura moderna y enfoque en performance. Implementación de CI/CD con Vercel y buenas prácticas de seguridad.",
    imageUrl: "/assets/portfolio.png",
    repoUrl: "",
    tags: ["React", "TypeScript", "Node.js"]
  },
  // {
  //   title: "Secure Network Scanner",
  //   description: "Herramienta CLI desarrollada en Python para auditoría de redes locales. Detecta vulnerabilidades comunes y genera reportes automatizados.",
  //   imageUrl: "/images/project1.jpg",
  //   repoUrl: "",
  //   tags: ["Python", "Scripting", "Network Security"]
  // }


]

function ProjectSection() {
  return (
    <section id="projects" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Cabecera de la sección */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Proyectos<span className="text-[#00B3B0]">.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Una selección de desarrollos donde combino ingeniería del software eficiente con soluciones funcionales
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
            Ver más repositorios en Github
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
           </svg>
        </a>
      </div>
        
    </section>
  );
};

export default ProjectSection