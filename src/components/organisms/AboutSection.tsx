import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className='py-10 px-4 md:px-8 max-w-7xl mx-auto z-10 relative'>
      <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        {t("about.title")}<span className="text-[#00B3B0]">.</span>
      </h2>
      <section id="about" className="p-5 my-5 border-b border-[#005a59] flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-6">
          <div className="flex flex-col gap-4 text-gray-300 leading-relaxed text-lg">
            <p dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.p3") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.p4") }} />
          </div>
          <div className="flex flex-col gap-4 text-gray-300 leading-relaxed text-lg">
            <p dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
          </div>
        </div>

        {/* Bento Grid Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Bento Card 1: Backend */}
          <div className="md:col-span-2 bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md hover:border-[#00B3B0]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,179,176,0.08)]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00B3B0] font-semibold">Core Coding</span>
                <h3 className="text-2xl font-tech font-bold text-white mt-1 mb-2">{t("about.bento.backend.title")}</h3>
                <p className="text-gray-400 text-sm">{t("about.bento.backend.desc")}</p>
              </div>
              <div className="p-3 bg-[#00B3B0]/10 rounded-xl text-[#00B3B0] border border-[#00B3B0]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["TypeScript", "Node.js", "Python", "FastAPI", "Express", "REST/Websockets"].map((tech) => (
                <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 2: Databases */}
          <div className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md hover:border-[#00B3B0]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,179,176,0.08)]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00B3B0] font-semibold">Data Science</span>
                <h3 className="text-2xl font-tech font-bold text-white mt-1 mb-2">{t("about.bento.databases.title")}</h3>
                <p className="text-gray-400 text-sm">{t("about.bento.databases.desc")}</p>
              </div>
              <div className="p-3 bg-[#00B3B0]/10 rounded-xl text-[#00B3B0] border border-[#00B3B0]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["ClickHouse", "MongoDB", "PostgreSQL", "SQL"].map((tech) => (
                <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 3: DevOps */}
          <div className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md hover:border-[#00B3B0]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,179,176,0.08)]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00B3B0] font-semibold">Infra</span>
                <h3 className="text-2xl font-tech font-bold text-white mt-1 mb-2">{t("about.bento.devops.title")}</h3>
                <p className="text-gray-400 text-sm">{t("about.bento.devops.desc")}</p>
              </div>
              <div className="p-3 bg-[#00B3B0]/10 rounded-xl text-[#00B3B0] border border-[#00B3B0]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Docker", "Helm", "GitLab CI/CD", "Kubernetes", "Git/GitOps"].map((tech) => (
                <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Security */}
          <div className="md:col-span-2 bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md hover:border-[#00B3B0]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,179,176,0.08)]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00B3B0] font-semibold">Security</span>
                <h3 className="text-2xl font-tech font-bold text-white mt-1 mb-2">{t("about.bento.security.title")}</h3>
                <p className="text-gray-400 text-sm">{t("about.bento.security.desc")}</p>
              </div>
              <div className="p-3 bg-[#00B3B0]/10 rounded-xl text-[#00B3B0] border border-[#00B3B0]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["OWASP Top 10", "Vulnerability Patching", "Ethical Hacking", "Dependency Audits", "Legacy Modernization"].map((tech) => (
                <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;