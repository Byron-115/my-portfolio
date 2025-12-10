import React from 'react'

function AboutSection() {
  return (
    <div className='py-10 px-4 md:px-8 max-w-7xl mx-auto'>
      <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        Sobre mí<span className="text-[#00B3B0]">.</span>
        </h2>
      <section id="about" className="p-5 my-5 border-b border-[#005a59] flex flex-col gap-4">
        <p>Desarrollador Web entusiasta y dedicado, con una sólida formación 
          en tecnologías de desarrollo frontend y backend. Graduado como 
          técnico Superior en <b>Desarrollo de Aplicaciones Web</b>, además de
          graduado en <b>Master en Ciberseguridad.</b></p>

        <p>Competencias en <b>Java, Python, SQL, Typescript, React, Next.Js, 
          TailwindCSS</b>, con un entendimiento profundo de los principios del
          desarrollo web y la ciberseguridad.</p>

        <p>Poseo <b>certificaciones profesionales</b> en Java, Python, React, 
          TypeScript y Ciberseguridad, lo que demuestra mi compromiso con
          el dominio de tecnologías modernas y mejores prácticas en el campo.</p>

        <p>Mi capacidad de <b>aprendizaje autónomo y adaptación constante</b> me 
          permite enfrentar nuevos desafíos y contribuir eficazmente en 
          proyectos de desarrollo y ciberseguridad. <b>Apasionado por el 
          desarrollo del software busco continuamente mejorar mis habilidades
           y contribuir a proyectos innovadores </b></p>
      </section>
    </div>

    
  )
}

export default AboutSection