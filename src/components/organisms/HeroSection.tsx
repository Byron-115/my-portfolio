import React from "react";
import Image from "next/image";
import SolidButton from "../elements/SolidButton";

const icons = [
  "/assets/java_icon.svg",
  "/assets/react_icon.svg",
  "/assets/typescript_icon.svg",
  "/assets/nodejs_icon.svg",
  "/assets/nextjs_icon.svg",
  "/assets/python_icon.svg",
  "/assets/tailwind_icon.svg",
  "/assets/ciberseguridad_icon.svg",
  "/assets/ai_icon.svg",
]


const HeroSection: React.FC = () => (
  <section id="hero"className="flex flex-col items-center justify-start w-full max-w-266 mx-auto px-12 pt-32 xl:px-0 py-8 xl:mt-32 gap-8 ">
    {/* Contenedor de texto principal */}
      {/* Título */}
        <h1 className="text-white font-medium text-2xl sm:text-4xl xl:text-5xl text-center w-full sm:max-w-115 xl:max-w-250 mx-auto">
          Full-Stack Developer con
        </h1>
        <span className="text-[#00f4f0] text-2xl sm:text-4xl xl:text-5xl font-medium text-center w-full">
          con Máster en Ciberseguridad</span>
      {/* Subtítulo + lista iconos + botón */}
      <div className="flex flex-col w-full max-w-[846px] items-center gap-8">
          <p className="use-system-font text-white font-light leading-1.56 xl:leading-[1.4] text-lg xl:text-xl text-center max-w-74 sm:max-w-144 xl:max-w-150 mx-auto">
            Especializado en del desarrollo de MVPs desde cero y arquitecturas seguras.
            <br/> 
            Experiencia trabajando en equipos ágiles con React, Typescript y Node.js para crear productos modernos y robustos. 
          </p>
        
        {/* Lista de iconos */}
        <div className="flex flex-row gap-4 items-center mr-0 pb-5 bg-[#007775] bg-opacity-50 p-5 rounded-lg">
        {icons.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={52}
            height={52}
            className="w-13 h-13"
          />
        ))}
      </div>

        <SolidButton>
          <div className="pl-4 pr-3 flex flex-row justify-between items-center">
            Hablemos
              <span className="flex items-center justify-center self-center  w-5 h-5">
                <Image
                  src="/assets/icon-arrow-up-right.png"
                  alt="Arrow Right Icon"
                  width={20}
                  height={20}
                  />
              </span>
          </div>
        </SolidButton>
      </div>
  </section>
);

export default HeroSection;