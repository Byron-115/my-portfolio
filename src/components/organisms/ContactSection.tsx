import React from 'react'

function ContactSection() {
  return (
    <section id= "contact" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        Contacto<span className="text-[#00B3B0]">.</span>
        </h1>
      <p className="pb-4">¿Quieres contactarme?</p>
      <form className={'flex flex-col gap-4 text-black border border-black bg-black p-6 rounded-lg w-full '}
        style={{
          boxShadow: "0 2px 6.9px 0 #00B3B0",
        }}>
        <input type="text" placeholder="Nombre" className="border border-[#00B3B0] rounded-md p-2" />
        <input type="email" placeholder="Email" className="border border-[#00B3B0] rounded-md p-2" />
        <input type="tel" placeholder="Teléfono" className="border border-[#00B3B0] rounded-md p-2" />
        <textarea placeholder="Comentarios" className="h-40 border border-[#00B3B0] rounded-md p-2"></textarea>
        <button className="bg-[#00B3B0] rounded-full font-bold text-black py-2">Enviar</button>
      </form>
    </section>
  )
}

export default ContactSection