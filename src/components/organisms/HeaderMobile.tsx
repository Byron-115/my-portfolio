"use client";
import React, { useState } from "react";
import Logo from "../elements/Logo";
import SolidButton from "../elements/SolidButton";
import { useLanguage } from "@/context/LanguageContext";

const HeaderMobile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const links = t("navLinks") as Array<{ href: string; label: string }>;

  return (
    <div
      className={`w-full gap-5 flex flex-col py-4 px-16 sm:px-8 transition-colors duration-300 md:hidden ${
        open ? "bg-[#001414]" : "bg-transparent"
      }`}
    >
      {/* Bloque superior: Logo y burger */}
      <div className="flex flex-row items-center justify-between h-12">
        <Logo />
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="text-white hover:text-[#00f4f0] bg-transparent border border-[#005a59] hover:border-[#00B3B0] rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-300"
            aria-label="Toggle Language"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center object-contain cursor-pointer text-white"
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}    
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bloque inferior: Navlinks y botón */}
      {open && (
        <div className="flex flex-col items-start max-w-[161px] gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white font-semibold text-base sm:text-sm hover:text-[#00b3b0] transition-colors text-left w-full whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <div className="flex-shrink-0">
              <SolidButton>{t("contactMeBtn")}</SolidButton>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;