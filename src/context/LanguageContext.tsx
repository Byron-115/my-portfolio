"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

const translations = {
  en: {
    navLinks: [
      { href: "#hero", label: "Home" },
      { href: "#experience", label: "Experience" },
      { href: "#about", label: "About me" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
      { href: "#cv", label: "Resume" },
    ],
    contactMeBtn: "Contact me",
    hero: {
      title: "Full-Stack Developer with a",
      highlight: "Master's in Cybersecurity",
      subtitle: "Specializing in robust backend architectures, DevOps, and cybersecurity. Experienced in developing cloud solutions for renewable energy monitoring (solar, wind, and storage) and large-scale telemetry ingestion.",
      cta: "Let's talk",
    },
    experience: {
      title: "Experience",
      gpm: {
        role: "Cloud Backend Developer",
        company: "Green Power Monitor a DNV company",
        date: "February 2026 – Present | Madrid, Spain (Hybrid)",
        bullets: [
          "<strong>Cloud-Native Energy Analytics (Wind, Solar & Storage):</strong> High-throughput ingestion and processing pipelines for real-time telemetry from solar assets, wind farms, and battery energy storage systems (BESS).",
          "<strong>Data Architecture & Optimization:</strong> Migration and optimization of efficiency (RTE) calculation logic using <strong>ClickHouse</strong> for massive time-series data and <strong>MongoDB</strong> for asset metadata.",
          "<strong>API Development & Modernization:</strong> Refactoring and design of robust, async microservices in <strong>Node.js (TypeScript)</strong> and <strong>Python (FastAPI)</strong> applying clean architecture principles.",
          "<strong>DevOps & GitOps:</strong> Containerization with <strong>Docker</strong> and deployment on Kubernetes via <strong>GitLab CI/CD</strong> and packaging with <strong>Helm</strong>.",
          "<strong>Cybersecurity & Auditing:</strong> Secure code audits, resolving vulnerabilities (OWASP), and migrating legacy codebases to modern secure standards."
        ]
      },
      davante: {
        role: "Full Stack Web Developer (Internship)",
        company: "Davante",
        date: "March 2025 – September 2025 | Madrid, Spain",
        bullets: [
          "<strong>MVP Development:</strong> Built the web client architecture from scratch using React and TypeScript, implementing authentication systems, profile management, and dynamic catalogs.",
          "<strong>Complex Technical Integration:</strong> Successfully embedded Unity WebGL simulators into the web, ensuring a seamless user experience between the React UI and the 3D engine.",
          "<strong>Modern UI/UX:</strong> Designed and implemented a responsive and clean user interface based on reusable Tailwind CSS components, matching the corporate identity.",
          "<strong>Agile Methodology:</strong> Actively collaborated in sprint planning and tracking via Jira and version control with Git/GitHub, ensuring timely feature delivery."
        ]
      }
    },
    about: {
      title: "About me",
      p1: "Backend and Cloud-Native Developer specialized in the renewable energy sector, with solid training in scalable backend development, real-time data processing, and cybersecurity. Graduated as a Higher Technical Degree in <b>Web Application Development</b> and specialized with a <b>Master's in Cybersecurity</b>.",
      p2: "Key competencies in <b>Node.js (TypeScript), Python (FastAPI), ClickHouse, MongoDB, PostgreSQL, Docker, Kubernetes (Helm), GitLab CI/CD, React, and Cybersecurity (OWASP)</b>, with extensive experience designing secure architectures (Security by Design), optimizing high-volume databases, and migrating legacy systems.",
      p3: "I hold <b>professional certifications</b> in Java, Python, React, TypeScript, and Cybersecurity, demonstrating my commitment to mastering modern technologies and best practices in the field.",
      p4: "My capacity for <b>self-learning and constant adaptation</b> allows me to face new challenges and contribute effectively to development and cybersecurity projects. <b>Passionate about software development, I continuously seek to improve my skills and contribute to innovative projects.</b>",
      bento: {
        backend: {
          title: "Backend Development",
          desc: "Building highly concurrent, asynchronous APIs and microservices with clean code architecture."
        },
        databases: {
          title: "Databases at Scale",
          desc: "Handling high-density telemetry time-series and flexible document configurations."
        },
        devops: {
          title: "Pipelines & GitOps",
          desc: "Secure container orchestration and continuous integration deployment workflows."
        },
        security: {
          title: "Security & Legacy Audits",
          desc: "Remediating vulnerabilities (OWASP), hardening networks, and modernizing legacy code."
        }
      }
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of developments where I combine efficient software engineering with functional solutions",
      viewMore: "View more repositories on GitHub",
      davanteDesc: "Led the frontend of a SaaS MVP for centralized 3D simulator management. Implemented robust authentication, complex integration with Unity WebGL, and an admin dashboard.",
      portfolioDesc: "Personal portfolio developed with modern architecture and focus on performance. Implemented CI/CD with Vercel and best security practices."
    },
    contact: {
      title: "Contact",
      subtitle: "Want to contact me?",
      placeholderName: "Name",
      placeholderEmail: "Email",
      placeholderPhone: "Phone",
      placeholderComments: "Comments",
      submitBtn: "Send"
    },
    cvSection: {
      title: "Resume",
      subtitle: "Want to see my CV?",
      description: "Download my resume to learn more about my experience and skills.",
      downloadBtn: "Download my CV"
    },
    footer: {
      copyright: "© 2025 ByronDev. Next step developer.",
      legalNotice: "Legal Notice",
      privacyPolicy: "Privacy Policy",
      cookiesPolicy: "Cookies Policy"
    }
  },
  es: {
    navLinks: [
      { href: "#hero", label: "Inicio" },
      { href: "#experience", label: "Experiencia" },
      { href: "#about", label: "Sobre mí" },
      { href: "#projects", label: "Proyectos" },
      { href: "#contact", label: "Contacto" },
      { href: "#cv", label: "CV" },
    ],
    contactMeBtn: "Contáctame",
    hero: {
      title: "Full-Stack Developer con",
      highlight: "Máster en Ciberseguridad",
      subtitle: "Especializado en arquitecturas backend robustas, DevOps y ciberseguridad. Experiencia desarrollando soluciones cloud para la monitorización de energías renovables (solar, eólica y almacenamiento) e ingesta de telemetría a gran escala.",
      cta: "Hablemos",
    },
    experience: {
      title: "Experiencia",
      gpm: {
        role: "Desarrollador Cloud Backend",
        company: "Green Power Monitor a DNV company",
        date: "Febrero 2026 – Presente | Madrid, España (Híbrido)",
        bullets: [
          "<strong>Analítica Cloud-Native (Wind, Solar & Storage):</strong> Ingesta y procesamiento de pipelines de telemetría en tiempo real desde activos solares, aerogeneradores y sistemas de baterías.",
          "<strong>Arquitectura de Datos y Optimización:</strong> Migración y optimización de lógicas de cálculo de eficiencia energética (RTE) utilizando <strong>ClickHouse</strong> para series temporales masivas y <strong>MongoDB</strong> para metadatos de activos.",
          "<strong>API Development & Modernización:</strong> Refactorización y diseño de microservicios asíncronos en <strong>Node.js (TypeScript)</strong> y <strong>Python (FastAPI)</strong> aplicando principios de arquitectura limpia.",
          "<strong>DevOps & GitOps:</strong> Contenedorización con <strong>Docker</strong> y despliegue sobre Kubernetes a través de <strong>GitLab CI/CD</strong> y configuración de empaquetados con <strong>Helm</strong>.",
          "<strong>Ciberauditoría y Seguridad:</strong> Auditorías de código seguro, resolución de vulnerabilidades (OWASP) y migración de código legacy a estándares modernos seguros."
        ]
      },
      davante: {
        role: "Desarrollador Web Full Stack (Prácticas)",
        company: "Davante",
        date: "Marzo 2025 – Septiembre 2025 | Madrid, España",
        bullets: [
          "<strong>Desarrollo de Producto (MVP):</strong> Construí desde cero la estructura del client web utilizando React y TypeScript, implementando sistemas de autenticación, gestión de perfiles y catálogos dinámicos.",
          "<strong>Integración Técnica Compleja:</strong> Logré la incrustación exitosa de simuladores Unity WebGL en la web, permitiendo una experiencia de usuario fluida entre la interfaz React y el motor 3D.",
          "<strong>UI/UX Moderna:</strong> Diseñé e implementé una interfaz responsiva y organizada basada en componentes reutilizables con Tailwind CSS, siguiendo la identidad visual corporativa.",
          "<strong>Metodología Ágil:</strong> Colaboré activamente en la planificación y seguimiento de sprints mediante Jira y control de versiones con Git/GitHub, asegurando la entrega puntual de funcionalidades."
        ]
      }
    },
    about: {
      title: "Sobre mí",
      p1: "Desarrollador Backend y Cloud-Native especializado en el sector de energías renovables, con una sólida formación en tecnologías de desarrollo backend escalable, procesamiento de datos en tiempo real y seguridad informática. Graduado como Técnico Superior en <b>Desarrollo de Aplicaciones Web</b> y especializado con un <b>Máster en Ciberseguridad</b>.",
      p2: "Competencias clave en <b>Node.js (TypeScript), Python (FastAPI), ClickHouse, MongoDB, PostgreSQL, Docker, Kubernetes (Helm), GitLab CI/CD, React y Ciberseguridad (OWASP)</b>, con amplia experiencia diseñando arquitecturas seguras (Security by Design), optimizando bases de datos de alto volumen y migrando sistemas heredados.",
      p3: "Poseo <b>certificaciones profesionales</b> en Java, Python, React, TypeScript y Ciberseguridad, lo que demuestra mi compromiso con el dominio de tecnologías modernas y mejores prácticas en el campo.",
      p4: "Mi capacidad de <b>aprendizaje autónomo y adaptación constante</b> me permite enfrentar nuevos desafíos y contribuir eficazmente en proyectos de desarrollo y ciberseguridad. <b>Apasionado por el desarrollo del software busco continuamente mejorar mis habilidades y contribuir a proyectos innovadores.</b>",
      bento: {
        backend: {
          title: "Desarrollo Backend",
          desc: "Construcción de APIs asíncronas y microservicios robustos con arquitectura limpia."
        },
        databases: {
          title: "Bases de Datos a Escala",
          desc: "Gestión de telemetría de series temporales de alta densidad y configuraciones flexibles."
        },
        devops: {
          title: "Pipelines y GitOps",
          desc: "Orquestación segura de contenedores e integración continua para despliegues automatizados."
        },
        security: {
          title: "Auditorías de Seguridad",
          desc: "Remediación de vulnerabilidades (OWASP), bastionado y migración segura de código heredado."
        }
      }
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una selección de desarrollos donde combino ingeniería del software eficiente con soluciones funcionales",
      viewMore: "Ver más repositorios en Github",
      davanteDesc: "Lideré el frontend de un MVP SaaS para la gestión centralizada de simuladores 3D. Implementé autenticación robusta, integración compleja con Unity WebGL y un dashboard administrativo.",
      portfolioDesc: "Portafolio personal desarrollado con arquitectura moderna y enfoque en performance. Implementación de CI/CD con Vercel y buenas prácticas de seguridad."
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Quieres contactarme?",
      placeholderName: "Nombre",
      placeholderEmail: "Email",
      placeholderPhone: "Teléfono",
      placeholderComments: "Comentarios",
      submitBtn: "Enviar"
    },
    cvSection: {
      title: "Curriculum",
      subtitle: "¿Quieres ver mi CV?",
      description: "Descarga mi currículum para conocer más sobre mi experiencia y habilidades.",
      downloadBtn: "Descargar mi CV"
    },
    footer: {
      copyright: "© 2025 ByronDev. Next step developer.",
      legalNotice: "Aviso Legal",
      privacyPolicy: "Política de Privacidad",
      cookiesPolicy: "Política de Cookies"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio_lang") as Language;
    if (stored === "en" || stored === "es") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = translations[language];
    for (const k of keys) {
      if (current[k] === undefined) {
        return key;
      }
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
