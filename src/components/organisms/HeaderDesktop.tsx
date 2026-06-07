"use client";
import React, { useEffect, useState } from "react";
import Logo from "../elements/Logo";
import SolidButton from "../elements/SolidButton";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderDesktopProps {
    setHeaderOffset?: (offset: number) => void;
}

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ setHeaderOffset }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [headerOffset, setLocalHeaderOffset] = useState(0);

    const { language, setLanguage, t } = useLanguage();
    const links = t("navLinks") as Array<{ href: string; label: string }>;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const maxOffset = 52;
            const offset = Math.min(currentScrollY, maxOffset);

            setLocalHeaderOffset(offset);
            if (setHeaderOffset) {
                setHeaderOffset(offset);
            }

            if (currentScrollY > lastScrollY && currentScrollY > maxOffset) {
                setShow(false); // Se oculta al bajar
            } else {
                setShow(true);  // Se muestra al subir
            }
            setIsSticky(currentScrollY > maxOffset);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, setHeaderOffset]);

    return (
        <>
            {/* Header fijo*/}
            {headerOffset < 52 && (
                <header
                    className={`
                        font-sf-compact hidden md:flex fixed top-[45px] left-0 w-full
                        z-50 
                        transition-transform duration-300 ease-in-out
                        pointer-events-auto
                    `}
                    style={{
                        transform: `translateY(-${headerOffset}px)`,
                        opacity: 1 - headerOffset / 52,
                    }}
                >
                    <div className= "flex flex-row justify-between items-center w-full max-w-266 mx-auto h-13 px-4">
                        {/* Contenedor Logo + Navlinks de 767x26px */}
                        <div className="flex flex-row justify-start items-center gap-44">
                            <Logo />
                            <nav className="flex flex-nowrap gap-5">
                                {links.map((link) => (
                                    <a 
                                        key={link.label}
                                        href={link.href}
                                        className="text-[#ecffe0] font-semibold text-sm hover:text-[#00f4f0] transition-colors whitespace-nowrap"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <button
                                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                                className="text-white hover:text-[#00f4f0] bg-transparent border border-[#005a59] hover:border-[#00B3B0] rounded-full px-3.5 py-1 text-sm font-semibold transition-all duration-300 shadow-[0_0_10px_rgba(0,179,176,0.1)] hover:shadow-[0_0_15px_rgba(0,179,176,0.25)]"
                                aria-label="Toggle Language"
                            >
                                {language === "es" ? "EN" : "ES"}
                            </button>
                            <a href="#contact">
                                <div className="flex-shrink-0 pr-1">
                                    <SolidButton>{t("contactMeBtn")}</SolidButton>
                                </div>
                            </a>
                        </div>
                    </div>
                </header>
            )}

            {/* Header sticky */}
            {isSticky && (
                <header
                    className={`
                        hidden md:flex fixed top-6 left-0 w-full
                        z-50 bg-transparent
                        transition-transform duration-300 ease-in-out
                        ${show ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
                    `}
                >
                    <div className={`
                        flex items-center rounded-full 
                        w-[790px] h-[52px] mx-auto
                        shadow-[0_2px_6.9px_0px_##00B3B0] border-1 border-black bg-black
                        `}
                        style={{
                            boxShadow: "0 2px 6.9px 0 #00B3B0",
                        }}
                    >
                        <div className="flex items-center justify-between w-[720px] h-[28px] mx-auto">
                            <nav className="flex flex-nowrap gap-8">
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-[#ecffe0] font-semibold text-sm hover:text-[#00f4f0] transition-colors whitespace-nowrap"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="flex flex-row items-center gap-4">
                                <button
                                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                                    className="text-white hover:text-[#00f4f0] bg-transparent border border-[#005a59] hover:border-[#00B3B0] rounded-full px-3 py-0.5 text-xs font-semibold transition-all duration-300"
                                    aria-label="Toggle Language"
                                >
                                    {language === "es" ? "EN" : "ES"}
                                </button>
                                <div className="flex-shrink-0">
                                    <a href="#contact">
                                        <SolidButton>{t("contactMeBtn")}</SolidButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
};

export default HeaderDesktop;