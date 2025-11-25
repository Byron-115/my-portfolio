import React from 'react'

function ContactSection() {
  return (
    <div className="p-5 my-5 border-b border-[#005a59]">
      <h2>ContactSection</h2>
      <p className="flex justify-center pb-4">¿Quieres contactarme?</p>
      <section id="contact" className={'flex flex-col gap-4 text-black shadow-[0_2px_6.9px_0px_##00B3B0] border-1 border-black bg-black p-3 rounded-lg w-full max-w-sm md:max-w-md xl:max-w-xl mx-auto'}
        style={{
          boxShadow: "0 2px 6.9px 0 #00B3B0",
        }}>
        <input type="text" placeholder="Nombre" className="border border-[#00B3B0] rounded-md" />
        <input type="email" placeholder="Email" className="border border-[#00B3B0] rounded-md" />
        <input type="tel" placeholder="Teléfono" className="border border-[#00B3B0] rounded-md" />
        <textarea placeholder="Comentarios" className="h-32 border border-[#00B3B0] rounded-md"></textarea>
        <button className="bg-[#00B3B0] rounded-full font-bold text-black">Enviar</button>
      </section>
    </div>
  )
}

export default ContactSection