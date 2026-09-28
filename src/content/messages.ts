export type Lang = 'es' | 'en';

const es = {
  meta: {
    title: 'Portafolio de William Fuentes Ossa | Desarrollador Full Stack',
    description:
      'Portafolio de William Fuentes Ossa, Ingeniero Electrónico y Desarrollador Full Stack en Bogotá, Colombia: APIs con Node.js y NestJS, aplicaciones web con Next.js, React y TypeScript, y migración de sistemas empresariales.',
  },
  nav: {
    about: 'Sobre mí',
    skills: 'Tecnologías',
    projects: 'Proyectos',
    experience: 'Experiencia',
    education: 'Formación',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola 👋, soy',
    role: 'Desarrollador Full Stack',
    tagline: 'Ingeniero Electrónico · Bogotá, Colombia',
    lead: 'Construyo APIs y aplicaciones web completas, de la base de datos a la interfaz, con Node.js, NestJS, React y Next.js. También llevo sistemas empresariales antiguos a plataformas modernas.',
    cta1: 'Ver proyectos',
    cta2: 'Contactarme',
    available: 'Disponible para proyectos freelance',
    badge: 'Ingeniero Electrónico',
    socialLabel: 'Ver perfil en',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniero que construye software de punta a punta',
    photoAlt: 'Foto de William Fuentes Ossa',
    paragraphs: [
      'Soy ingeniero electrónico y desarrollador Full Stack. Me gusta construir sistemas completos: desde la API y la base de datos hasta la interfaz que usa la gente.',
      'Trabajé en una plataforma SaaS de seguridad y monitoreo con arquitectura de microservicios e integración de dispositivos IoT. Hoy participo en la migración de aplicaciones empresariales antiguas a Java y plataformas web para una entidad del sector salud, donde aprendí a entender sistemas grandes, documentarlos con rigor y entregar por etapas.',
      'Trabajo con comunicación clara, entregas por etapas y código ordenado y documentado.',
    ],
    stats: [
      { title: 'Ingeniería Electrónica', text: 'Universidad Santo Tomás' },
      { title: 'Maestría en Arquitectura de Software', text: 'Politécnico Grancolombiano · en curso' },
      { title: '3 proyectos publicados', text: 'API, panel web y tienda en línea' },
      { title: 'Experiencia real', text: 'SaaS, microservicios, IoT y migración de sistemas' },
    ],
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Tecnologías y herramientas',
    subtitle: 'Lo que uso para diseñar, construir, probar y desplegar software.',
    groups: [
      {
        title: 'Backend',
        items: ['Node.js', 'NestJS', 'TypeScript', 'Java', 'C#'],
        text: 'APIs REST, autenticación JWT, validación, documentación OpenAPI y microservicios.',
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux'],
        text: 'Aplicaciones web responsivas y accesibles, con modo claro y oscuro.',
      },
      {
        title: 'Bases de datos',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
        text: 'Modelado de datos, consultas y bases de datos en la nube.',
      },
      {
        title: 'Herramientas',
        items: ['Git', 'GitHub Actions', 'Docker', 'Jest', 'Vitest', 'Swagger'],
        text: 'Pruebas automatizadas, contenedores e integración y despliegue continuos.',
      },
    ],
  },
  projects: {
    eyebrow: 'Portafolio',
    title: 'Proyectos destacados',
    subtitle: 'Una API en Node.js, el panel web en React que la consume y una tienda en línea hecha en la maestría.',
    featured: 'Proyecto destacado',
    masters: 'Proyecto de maestría',
    code: 'Código',
    demo: 'Demo en vivo',
    docs: 'Documentación',
    items: {
      dashboard: {
        title: 'Tasks Dashboard',
        text: 'Panel web para gestionar tareas: registro e inicio de sesión, estadísticas, gráfica de progreso, búsqueda, filtros, paginación y CRUD completo. Interfaz responsiva con Material UI y Tailwind, modo claro y oscuro, y pruebas con Vitest.',
        alt: 'Captura del panel Tasks Dashboard con estadísticas, gráfica de progreso y tabla de tareas',
        stack: ['Next.js 15', 'React 19', 'TypeScript', 'Material UI', 'Tailwind CSS', 'Vitest'],
      },
      api: {
        title: 'Task Manager API',
        text: 'API REST con autenticación JWT, validación de datos, filtros y paginación, aislamiento de datos por usuario, límite de peticiones, documentación Swagger, PostgreSQL en la nube, 19 pruebas automatizadas y Dockerfile.',
        alt: 'Captura de la documentación Swagger de la Task Manager API',
        stack: ['Node.js', 'NestJS 11', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger', 'Jest', 'Docker'],
      },
      nursery: {
        title: 'Paradise Nursery',
        text: 'Tienda en línea de plantas de interior desarrollada para la Maestría en Arquitectura de Software: catálogo por categorías, carrito con control de cantidades y totales, carrito persistente, navegación con React Router y pruebas con Vitest.',
        alt: 'Captura de la tienda en línea Paradise Nursery',
        stack: ['React', 'Redux Toolkit', 'React Router', 'Vite', 'Vitest'],
      },
    },
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    present: 'Actualidad',
    jobs: [
      {
        period: '2025',
        role: 'Analista de Requerimientos y Desarrollador de Software',
        org: 'Esfera Consultores · Remoto',
        points: [
          'Migración de aplicaciones empresariales legadas (FoxPro) a plataformas Java y web para el sector salud.',
          'Documentación formal de entregables y coordinación de varias migraciones en paralelo.',
          'Desarrollo de funcionalidades y servicios de integración junto al equipo de arquitectura.',
        ],
      },
      {
        period: '2024',
        role: 'Desarrollador de Software (práctica)',
        org: 'AOS S.A.S',
        points: [
          'Desarrollo de funcionalidades para Serverli MD, plataforma SaaS de seguridad y monitoreo.',
          'Trabajo con microservicios e integración de dispositivos IoT.',
          'Stack: Node.js, NestJS, Next.js, TypeScript, C#, MySQL y MongoDB.',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Formación',
    title: 'Formación y certificaciones',
    subtitle: 'Estudios formales y certificaciones obtenidas en línea.',
    degreesTitle: 'Estudios',
    certsTitle: 'Certificaciones',
    present: 'En curso',
    degrees: [
      {
        title: 'Maestría en Arquitectura de Software',
        org: 'Politécnico Grancolombiano',
        period: '2025 – 2026',
      },
      {
        title: 'Ingeniería Electrónica',
        org: 'Universidad Santo Tomás',
        period: '2019 – 2024',
      },
    ],
    certs: [
      { title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', org: 'Oracle', period: '2025' },
      { title: 'Introducción al desarrollo de back-end', org: 'Meta', period: '2025' },
      { title: 'Fundamentos en Metodologías Ágiles (Scrum, Kanban y Lean)', org: 'Colsubsidio Educación Tecnológica', period: '2024' },
      { title: 'Scrum Foundation Professional Certificate (SFPC)', org: 'Certiprof', period: '2024' },
      { title: 'Introduction to Scrum Master Profession', org: 'Skillup.co', period: '2024' },
      { title: 'Web Development', org: 'Sololearn', period: '2024' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Tienes un proyecto en mente?',
    lead: 'Estoy abierto a proyectos freelance y colaboraciones. Cuéntame qué necesitas y lo construimos juntos.',
    email: 'Escribirme por correo',
  },
  footer: {
    built: 'Diseñado y desarrollado con Next.js, Material UI y Tailwind CSS.',
  },
  ui: {
    skip: 'Saltar al contenido',
    language: 'Cambiar idioma',
    theme: { light: 'Tema claro', dark: 'Tema oscuro', system: 'Tema del sistema' },
    themeHint: 'clic para cambiar',
    openImage: 'Abrir imagen en una pestaña nueva',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    backToTop: 'Volver arriba',
  },
};

export type Messages = typeof es;

const en: Messages = {
  meta: {
    title: 'William Fuentes Ossa Portfolio | Full Stack Developer',
    description:
      'Portfolio of William Fuentes Ossa, Electronics Engineer and Full Stack developer in Bogotá, Colombia: APIs with Node.js and NestJS, web apps with Next.js, React and TypeScript, and legacy enterprise system migration.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi 👋, I am',
    role: 'Full Stack Developer',
    tagline: 'Electronics Engineer · Bogotá, Colombia',
    lead: 'I build complete APIs and web applications, from the database to the interface, with Node.js, NestJS, React and Next.js. I also move legacy enterprise systems to modern platforms.',
    cta1: 'View projects',
    cta2: 'Get in touch',
    available: 'Available for freelance projects',
    badge: 'Electronics Engineer',
    socialLabel: 'View profile on',
  },
  about: {
    eyebrow: 'About me',
    title: 'An engineer who builds software end to end',
    photoAlt: 'Photo of William Fuentes Ossa',
    paragraphs: [
      'I am an electronics engineer and Full Stack developer. I like building complete systems: from the API and the database to the interface people actually use.',
      'I worked on a SaaS security and monitoring platform built with microservices and IoT device integration. Today I take part in migrating legacy enterprise applications to Java and web platforms for a healthcare organization, where I learned to understand large systems, document them carefully and deliver in stages.',
      'I work with clear communication, staged deliveries and clean, documented code.',
    ],
    stats: [
      { title: 'Electronic Engineering', text: 'Universidad Santo Tomás' },
      { title: "Master's in Software Architecture", text: 'Politécnico Grancolombiano · in progress' },
      { title: '3 published projects', text: 'API, web dashboard and online store' },
      { title: 'Real-world experience', text: 'SaaS, microservices, IoT and system migration' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Technologies and tools',
    subtitle: 'What I use to design, build, test and ship software.',
    groups: [
      {
        title: 'Backend',
        items: ['Node.js', 'NestJS', 'TypeScript', 'Java', 'C#'],
        text: 'REST APIs, JWT authentication, validation, OpenAPI documentation and microservices.',
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux'],
        text: 'Responsive, accessible web applications with light and dark themes.',
      },
      {
        title: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
        text: 'Data modelling, queries and cloud databases.',
      },
      {
        title: 'Tooling',
        items: ['Git', 'GitHub Actions', 'Docker', 'Jest', 'Vitest', 'Swagger'],
        text: 'Automated testing, containers and continuous integration and delivery.',
      },
    ],
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured projects',
    subtitle: "A Node.js API, the React dashboard that consumes it, and an online store built for my master's degree.",
    featured: 'Featured project',
    masters: "Master's project",
    code: 'Code',
    demo: 'Live demo',
    docs: 'Documentation',
    items: {
      dashboard: {
        title: 'Tasks Dashboard',
        text: 'Web dashboard to manage tasks: sign up and sign in, statistics, progress chart, search, filters, pagination and full CRUD. Responsive interface built with Material UI and Tailwind, light and dark themes, and tests with Vitest.',
        alt: 'Screenshot of the Tasks Dashboard with statistics, a progress chart and a task table',
        stack: ['Next.js 15', 'React 19', 'TypeScript', 'Material UI', 'Tailwind CSS', 'Vitest'],
      },
      api: {
        title: 'Task Manager API',
        text: 'REST API with JWT authentication, input validation, filtering and pagination, per-user data isolation, rate limiting, Swagger documentation, a cloud PostgreSQL database, 19 automated tests and a Dockerfile.',
        alt: 'Screenshot of the Task Manager API Swagger documentation',
        stack: ['Node.js', 'NestJS 11', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger', 'Jest', 'Docker'],
      },
      nursery: {
        title: 'Paradise Nursery',
        text: "Online store for indoor plants built for my Master's in Software Architecture: catalog by category, a cart with quantity control and totals, a persistent cart, React Router navigation and tests with Vitest.",
        alt: 'Screenshot of the Paradise Nursery online store',
        stack: ['React', 'Redux Toolkit', 'React Router', 'Vite', 'Vitest'],
      },
    },
  },
  experience: {
    eyebrow: 'Career',
    title: 'Experience',
    present: 'Present',
    jobs: [
      {
        period: '2025',
        role: 'Requirements Analyst and Software Developer',
        org: 'Esfera Consultores · Remote',
        points: [
          'Migration of legacy enterprise applications (FoxPro) to Java and web platforms for the healthcare sector.',
          'Formal deliverable documentation and coordination of several migrations in parallel.',
          'Development of features and integration services alongside the architecture team.',
        ],
      },
      {
        period: '2024',
        role: 'Software Developer (internship)',
        org: 'AOS S.A.S',
        points: [
          'Built features for Serverli MD, a SaaS security and monitoring platform.',
          'Worked with microservices and IoT device integration.',
          'Stack: Node.js, NestJS, Next.js, TypeScript, C#, MySQL and MongoDB.',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Education & certifications',
    subtitle: 'Formal studies and certifications earned online.',
    degreesTitle: 'Degrees',
    certsTitle: 'Certifications',
    present: 'In progress',
    degrees: [
      {
        title: "Master's in Software Architecture",
        org: 'Politécnico Grancolombiano',
        period: '2025 – 2026',
      },
      {
        title: 'B.Sc. in Electronic Engineering',
        org: 'Universidad Santo Tomás',
        period: '2019 – 2024',
      },
    ],
    certs: [
      { title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', org: 'Oracle', period: '2025' },
      { title: 'Introduction to Back-End Development', org: 'Meta', period: '2025' },
      { title: 'Agile Methodology Fundamentals (Scrum, Kanban & Lean)', org: 'Colsubsidio Educación Tecnológica', period: '2024' },
      { title: 'Scrum Foundation Professional Certificate (SFPC)', org: 'Certiprof', period: '2024' },
      { title: 'Introduction to Scrum Master Profession', org: 'Skillup.co', period: '2024' },
      { title: 'Web Development', org: 'Sololearn', period: '2024' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a project in mind?',
    lead: 'I am open to freelance projects and collaborations. Tell me what you need and let’s build it together.',
    email: 'Email me',
  },
  footer: {
    built: 'Designed and built with Next.js, Material UI and Tailwind CSS.',
  },
  ui: {
    skip: 'Skip to content',
    language: 'Change language',
    theme: { light: 'Light theme', dark: 'Dark theme', system: 'System theme' },
    themeHint: 'click to change',
    openImage: 'Open image in a new tab',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
  },
};

export const messages: Record<Lang, Messages> = { es, en };
export const LANG_KEY = 'portfolio.lang';

export function detectLang(saved: string | null, browser: string | undefined): Lang {
  if (saved === 'es' || saved === 'en') return saved;
  return (browser ?? 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}
