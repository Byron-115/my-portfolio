import React from 'react'
import SolidButton from '../elements/SolidButton'

function CvSection() {
  const handleDownload = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
      window.location.href = `${baseUrl}/download-cv`;
  }

  return (
    <div>CvSection
        <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres ver mi CV?</h2>
        <p className="mb-6 text-gray-600">Descarga mi currículum para conocer más sobre mi experiencia y habilidades.</p>
        <SolidButton onClick={handleDownload}>Descargar mi CV</SolidButton>
        </section>
    </div>

    
  )
}

export default CvSection