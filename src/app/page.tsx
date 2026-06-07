"use client";
import HeroSection from "@/components/organisms/HeroSection";
import HeaderDesktop from "../components/organisms/HeaderDesktop";
import ProjectSection from "@/components/organisms/ProjectSection";
import AboutSection from "@/components/organisms/AboutSection";
import ContactSection from "@/components/organisms/ContactSection";
import CvSection from "@/components/organisms/CvSection";
import Footer from "@/components/organisms/Footer";
import HeaderMobile from "@/components/organisms/HeaderMobile";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030712]">
        {/* Ambient background glows */}
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
        <div className="ambient-glow glow-3" />
        
        <div className="relative z-10 flex flex-col gap-12">
          <Analytics />
          <HeaderDesktop />
          <HeaderMobile />
          <HeroSection />
          <ExperienceSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <CvSection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}