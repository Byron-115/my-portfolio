import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <div className='py-10 px-4 md:px-8 max-w-7xl mx-auto'>
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        {t("experience.title")}<span className="text-[#00B3B0]">.</span>
      </h1>
      
      <section id="experience" className="p-5 my-5 border-b border-[#005a59] ">
        <h1>
          <strong>
            {t("experience.gpm.role")} | {t("experience.gpm.company")} | {t("experience.gpm.date")}
          </strong>
        </h1>
        <div className="text-gray-300">
          <br/>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {(t("experience.gpm.bullets") as string[]).map((bullet, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
            ))}
          </ul>
        </div>
      </section>

      <section className="p-5 my-5 border-b border-[#005a59] ">
        <h1>
          <strong>
            {t("experience.davante.role")} | {t("experience.davante.company")} | {t("experience.davante.date")}
          </strong>
        </h1>
        <div className="text-gray-300">
          <br/>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {(t("experience.davante.bullets") as string[]).map((bullet, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ExperienceSection;