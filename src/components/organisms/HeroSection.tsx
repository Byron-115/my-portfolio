import React from "react";
import Image from "next/image";
import SolidButton from "../elements/SolidButton";


const HeroSection: React.FC = () => (
  <section id="hero"className="flex flex-col items-center justify-start w-full max-w-266 mx-auto px-12 pt-32 xl:px-0 py-8 xl:mt-32 gap-8 bg-red-500">
    {/* Contenedor de texto principal */}
      {/* Título */}
        <h1 className="text-white font-medium text-2xl sm:text-4xl xl:text-5xl text-center w-full sm:max-w-115 xl:max-w-250 mx-auto">
          Construyo experiencias digitales únicas que
        </h1>
        <span className="text-[#00f4f0] text-2xl sm:text-4xl xl:text-5xl font-medium text-center w-full">transforman ideas en resultados</span>
      {/* Subtítulo + botón */}
      <div className="flex flex-col w-full max-w-[846px] items-center gap-8">
          <p className="use-system-font text-white font-light leading-1.56 xl:leading-[1.4] text-lg xl:text-xl text-center max-w-74 sm:max-w-144 xl:max-w-150 mx-auto">
            Soy desarrollador web Full-Stack especializado en crear sitios web modernos, rápidos y funcionales que impulsan tu presencia online.
          </p>
        
        <div className="pl-4 pr-3 bg-yellow-500 flex flex-row justify-between items-center">
          <SolidButton>Hablemos</SolidButton>
            <span className="flex items-center justify-center self-center bg-white rounded-full w-5 h-5">
              <Image
                src="/assets/icon-arrow-up-right.png"
                alt="Arrow Right Icon"
                width={20}
                height={20}
                />
            </span>
          
        </div>
      </div>
  </section>
);

export default HeroSection;