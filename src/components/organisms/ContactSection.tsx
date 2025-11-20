import React from 'react'

function ContactSection() {
  return (
    <div>
      <h2>ContactSection</h2>
      <section id="contact" className={'flex flex-col gap-4 text-black shadow-[0_2px_6.9px_0px_##00B3B0] border-1 border-black bg-black p-3 rounded-lg w-full max-w-sm md:max-w-md xl:max-w-xl mx-auto'}
        style={{
          boxShadow: "0 2px 6.9px 0 #00B3B0",
        }}>
        <input type="text" placeholder="Nombre" className="border border-blue-400" />
        <input type="email" placeholder="Email" className="border border-blue-400" />
        <input type="tel" placeholder="Teléfono" className="border border-blue-400" />
        <textarea placeholder="Comentarios" className="h-32 border border-blue-400"></textarea>
        <button className="bg-[#00B3B0] rounded-full font-bold text-black">Send Message</button>
      </section>
    </div>
  )
}

export default ContactSection