import React from 'react'
import Logo from '../elements/Logo'

function Footer() {
  return (
    <footer className= "flex flex-col text-white items-center gap-5 mb-8.25">
      <Logo />

      <span className="text-center text-base xl:text-lg font-semibold">
        © 2025 ByronDev. Next step developer. 
      </span>

      <div className="flex flex-wrap flex-col xl:flex-row  gap-4 xl:gap-0 justify-center items-center font-thin text-sm xl:text-lg cursor-pointer">
        <a href="#" className="hover:underline">Aviso Legal</a>
        <div className="hidden xl:block w-[2px] h-7 bg-[#00B3B0] mx-2"/>
        <a href="#" className="hover:underline">Política de Privacidad</a>
        <div className="hidden xl:block w-[2px] h-7 bg-[#00B3B0] mx-2"/>
        <a href="#" className="hover:underline">Política de Cookies</a>
      </div>
      
      <div className="flex flex-col justify-center items-center gap-2.5 xl:gap-4">
        <div className="flex flex-row gap-2 cursor-pointer">
          <a href="#" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
          </a>
          <a href="#" aria-label="Teléfono">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="4" cy="4" r="2" />
              <rect x="2" y="9" width="4" height="13" rx="1" />
              <path d="M10 22H14V15C14 13.9 14.9 13 16 13C17.1 13 18 13.9 18 15V22H22V15C22 11.7 19.3 9 16 9C12.7 9 10 11.7 10 15V22Z" />
            </svg>
          </a>
        </div>
      </div>


    </footer>
  )
}

export default Footer