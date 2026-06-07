import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id= "contact" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
        {t("contact.title")}<span className="text-[#00B3B0]">.</span>
      </h1>
      <p className="pb-4">{t("contact.subtitle")}</p>
      <form className={'flex flex-col gap-4 text-black border border-black bg-black p-6 rounded-lg w-full '}
        style={{
          boxShadow: "0 2px 6.9px 0 #00B3B0",
        }}>
        <input type="text" placeholder={t("contact.placeholderName")} className="border border-[#00B3B0] rounded-md p-2" />
        <input type="email" placeholder={t("contact.placeholderEmail")} className="border border-[#00B3B0] rounded-md p-2" />
        <input type="tel" placeholder={t("contact.placeholderPhone")} className="border border-[#00B3B0] rounded-md p-2" />
        <textarea placeholder={t("contact.placeholderComments")} className="h-40 border border-[#00B3B0] rounded-md p-2"></textarea>
        <button className="bg-[#00B3B0] rounded-full font-bold text-black py-2">{t("contact.submitBtn")}</button>
      </form>
    </section>
  );
}

export default ContactSection;