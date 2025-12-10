import React from 'react'
import SolidButton from '../elements/SolidButton'

function CvSection() {
  const handleDownload = async () => {
      // const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
      // window.location.href = `${baseUrl}/download-cv`;

      const link = document.createElement('a');
      link.href = '/Byron_Panimboza_CV.pdf';
      link.download = 'Byron_Panimboza_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

  }

  return (
    <div className='py-10 px-4 md:px-8 max-w-7xl mx-auto'>
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        Curriculum<span className="text-[#00B3B0]">.</span>
      </h1>
        <section  id="cv" className="text-center p-5 my-5 border-b border-[#005a59] flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres ver mi CV?</h2>
        <p className="mb-6 text-white">Descarga mi currículum para conocer más sobre mi experiencia y habilidades.</p>
        <SolidButton onClick={handleDownload}>Descargar mi CV</SolidButton>
        </section>
    </div>
  )
}

export default CvSection