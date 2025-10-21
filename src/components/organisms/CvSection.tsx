import React from 'react'
import SolidButton from '../elements/SolidButton'

function CvSection() {
  return (
    <div>CvSection
        <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres ver mi CV?</h2>
        <p className="mb-6 text-gray-600">Descarga mi currículum para conocer más sobre mi experiencia y habilidades.</p>
        <SolidButton>Descargar mi CV</SolidButton>
        </section>
    </div>

    
  )
}

export default CvSection