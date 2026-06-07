import React from 'react';
import SolidButton from '../elements/SolidButton';
import { useLanguage } from '@/context/LanguageContext';

function CvSection() {
  const { t } = useLanguage();

  const handleDownload = async () => {
      const link = document.createElement('a');
      link.href = '/Byron_Panimboza_CV.pdf';
      link.download = 'Byron_Panimboza_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div className='py-10 px-4 md:px-8 max-w-7xl mx-auto'>
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        {t("cvSection.title")}<span className="text-[#00B3B0]">.</span>
      </h1>
      <section id="cv" className="text-center p-5 my-5 border-b border-[#005a59] flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold mb-4">{t("cvSection.subtitle")}</h2>
        <p className="mb-6 text-white">{t("cvSection.description")}</p>
        <SolidButton onClick={handleDownload}>{t("cvSection.downloadBtn")}</SolidButton>
      </section>
    </div>
  );
}

export default CvSection;