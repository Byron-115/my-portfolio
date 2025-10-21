"use client";
import HeroSection from "@/components/organisms/HeroSection";
import HeaderDesktop from "../components/organisms/HeaderDesktop";
import ProjectSection from "@/components/organisms/ProjectSection";
import AboutSection from "@/components/organisms/AboutSection";
import ContactSection from "@/components/organisms/ContactSection";
import CvSection from "@/components/organisms/CvSection";
import Footer from "@/components/organisms/Footer";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-72">
        <HeaderDesktop />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <CvSection />
        <Footer />
      </div>
    </>
  )
}