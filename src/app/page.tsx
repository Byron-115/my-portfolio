"use client";
import HeroSection from "@/components/organisms/HeroSection";
import HeaderDesktop from "../components/organisms/HeaderDesktop";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-72">
        <HeaderDesktop />
        <HeroSection />
        <HeroSection />
        <HeroSection />
      </div>
    </>
  )
}