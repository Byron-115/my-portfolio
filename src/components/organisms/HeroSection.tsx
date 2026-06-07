"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import SolidButton from "../elements/SolidButton";
import { useLanguage } from "@/context/LanguageContext";

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
];

const HeroTerminal: React.FC = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const { language } = useLanguage();

  const commands = useMemo(() => [
    { text: "ssh admin@byron-dev.cloud", delay: 800, type: "cmd" },
    { text: "Connecting to secure cloud environment...", delay: 400, type: "log" },
    { text: "Connection established. Active node: bess-node-04", delay: 400, type: "log" },
    { text: "clickhouse-client --query \"SELECT avg(rte), count() FROM bess.telemetry WHERE asset = 'wind'\"", delay: 1000, type: "cmd" },
    { text: "┌─ avg(rte) ─┬─ count() ─┐\n│   89.362%  │    43,892 │\n└────────────┴───────────┘\n1 row in set. Elapsed: 0.004 sec.", delay: 600, type: "output" },
    { text: "gitlab-runner run --job security-audit", delay: 900, type: "cmd" },
    { text: "Checking repository vulnerabilities (OWASP top 10)...", delay: 450, type: "log" },
    { text: "Result: 0 critical vulnerabilities found. Audit: PASSED", delay: 300, type: "success" },
    { text: "python3 -m uvicorn api.main:app --host 0.0.0.0 --port 8000", delay: 800, type: "cmd" },
    { text: "INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C)\nINFO:     GET /api/v1/wind/telemetry 200 OK (0.012s)\nINFO:     POST /api/v1/storage/optimize 201 Created (0.045s)", delay: 800, type: "success" }
  ], []);

  useEffect(() => {
    setTerminalLines([]);
    let currentIdx = 0;
    let timer: NodeJS.Timeout;

    const runNext = () => {
      if (currentIdx >= commands.length) {
        timer = setTimeout(() => {
          setTerminalLines([]);
          currentIdx = 0;
          runNext();
        }, 5000);
        return;
      }

      const item = commands[currentIdx];
      let prefix = "";
      if (item.type === "cmd") prefix = "$ ";
      else if (item.type === "success") prefix = "[✔] ";
      else if (item.type === "log") prefix = "[i] ";

      setTerminalLines((prev) => [...prev, `${prefix}${item.text}`]);
      currentIdx++;
      timer = setTimeout(runNext, item.delay);
    };

    runNext();

    return () => clearTimeout(timer);
  }, [commands, language]);

  return (
    <div className="w-full bg-[#050b14]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs text-gray-300">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] text-gray-500 font-sans font-medium uppercase tracking-wider">bash - devsecops@node</span>
        <div className="w-12" />
      </div>
      {/* Code viewport */}
      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-1.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {terminalLines.map((line, idx) => {
          let color = "text-gray-300";
          if (line.startsWith("$ ")) color = "text-[#00f4f0] font-semibold";
          else if (line.startsWith("[✔] ")) color = "text-emerald-400";
          else if (line.startsWith("[i] ")) color = "text-blue-400";
          else if (line.includes("avg(rte)")) color = "text-yellow-400/90";
          
          return (
            <pre key={idx} className={`whitespace-pre-wrap ${color} leading-relaxed`}>
              {line}
            </pre>
          );
        })}
        {/* blinking cursor */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#00f4f0]">$</span>
          <span className="w-1.5 h-3.5 bg-[#00B3B0] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative flex flex-col justify-start w-full max-w-7xl mx-auto px-4 md:px-8 pt-32 xl:pt-40 py-8 gap-8 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left column (Text content) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          <h1 className="text-white font-medium text-4xl sm:text-5xl xl:text-6xl leading-tight">
            {t("hero.title")}{" "}
            <span className="text-[#00f4f0] block mt-2 font-semibold">
              {t("hero.highlight")}
            </span>
          </h1>
          
          <p className="text-gray-300 font-light leading-relaxed text-lg xl:text-xl max-w-xl">
            {t("hero.subtitle")}
          </p>

          {/* Skill icon strip */}
          <div className="flex flex-wrap gap-3 items-center p-3.5 bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-xl shadow-lg mt-2">
            {icons.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                width={38}
                height={38}
                className="w-9 h-9 opacity-85 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
              />
            ))}
          </div>

          <a href="#contact" className="mt-4">
            <SolidButton>
              <div className="pl-4 pr-3 flex flex-row justify-between items-center h-9 gap-2.5">
                <span className="text-sm font-semibold">{t("hero.cta")}</span>
                <span className="flex items-center justify-center w-5 h-5 bg-black/20 rounded-full p-1 group-hover:bg-[#030712] transition-colors">
                  <Image
                    src="/assets/icon-arrow-up-right.png"
                    alt="Arrow Right Icon"
                    width={14}
                    height={14}
                  />
                </span>
              </div>
            </SolidButton>
          </a>
        </div>

        {/* Right column (Animated interactive terminal) */}
        <div className="lg:col-span-5 w-full">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;