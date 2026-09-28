export type Lang = 'es' | 'en';

const es = {
  meta: {
    title: 'William Fuentes Ossa | Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack: APIs con Node.js y NestJS, aplicaciones web con Next.js, React y TypeScript, y migración de sistemas empresariales.',
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
    eyebrow: 'Ingeniero Electrónico · Desarrollador Full Stack',
    titleBefore: 'Construyo ',
    titleHighlight: 'APIs y aplicaciones web',
    titleAfter: ' completas, de la base de datos a la interfaz.',
    lead: 'Trabajo con Node.js, NestJS, React y Next.js, y llevo sistemas empresariales antiguos a plataformas modernas.',
    cta1: 'Ver proyectos',
    cta2: 'Contactarme',
  },
  about: {
    title: 'Sobre mí',
    photoAlt: 'Foto de William Fuentes Ossa',
    paragraphs: [
      'Soy ingeniero electrónico y desarrollador Full Stack. Me gusta construir sistemas completos: desde la API y la base de datos hasta la interfaz que usa la gente.',
      'Trabajé en una plataforma SaaS de seguridad y monitoreo con arquitectura de microservicios e integración de dispositivos IoT. Hoy participo en la migración de aplicaciones empresariales antiguas a Java y plataformas web para una entidad del sector salud, donde aprendí a entender sistemas grandes, documentarlos con rigor y entregar por etapas.',
      'Trabajo con comunicación clara, entregas por etapas y código ordenado y documentado.',
    ],
  },
  skills: {
    title: 'Tecnologías',
    groups: [
      {
        title: 'Backend',
        items: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Java'],
        text: 'APIs REST, autenticación JWT, validación, documentación OpenAPI, pruebas y microservicios.',
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
        text: 'Aplicaciones web responsivas y accesibles, con modo claro y oscuro.',
      },
      {
        title: 'Datos y herramientas',
        items: ['MySQL', 'MongoDB', 'SQL Server', 'Docker', 'Git', 'GitHub Actions'],
        text: 'Diseño de bases de datos, pruebas automatizadas, contenedores e integración continua.',
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Una API en Node.js con el panel web en React que la consume, y una tienda en línea construida con React y Redux.',
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
        text: 'API REST con autenticación JWT, validación de datos, filtros y paginación, aislamiento de datos por usuario, límite de peticiones, documentación Swagger, base de datos PostgreSQL en la nube, 19 pruebas automatizadas y Dockerfile.',
        alt: 'Captura de la documentación Swagger de la Task Manager API',
        stack: ['Node.js', 'NestJS 11', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger', 'Jest', 'Docker'],
      },
      nursery: {
        title: 'Paradise Nursery',
        text: 'Tienda en línea de plantas de interior: catálogo por categorías, carrito de compras con control de cantidades y cálculo dinámico de totales, y navegación de una sola página con React Router.',
        alt: 'Captura de la tienda en línea Paradise Nursery',
        stack: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
      },
    },
  },
  experience: {
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
    title: '¿Tienes un proyecto en mente?',
    lead: 'Estoy abierto a proyectos freelance y colaboraciones. Cuéntame qué necesitas.',
    email: 'Escribirme por correo',
  },
  ui: {
    skip: 'Saltar al contenido',
    language: 'Cambiar idioma',
    theme: { light: 'Tema claro', dark: 'Tema oscuro', system: 'Tema del sistema' },
    themeHint: 'clic para cambiar',
    openImage: 'Abrir imagen en una pestaña nueva',
  },
};

export type Messages = typeof es;

const en: Messages = {
  meta: {
    title: 'William Fuentes Ossa | Full Stack Developer',
    description:
      'Full Stack developer: APIs with Node.js and NestJS, web apps with Next.js, React and TypeScript, and legacy enterprise system migration.',
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
    eyebrow: 'Electronics Engineer · Full Stack Developer',
    titleBefore: 'I build complete ',
    titleHighlight: 'APIs and web applications',
    titleAfter: ', from the database to the interface.',
    lead: 'I work with Node.js, NestJS, React and Next.js, and I move legacy enterprise systems to modern platforms.',
    cta1: 'View projects',
    cta2: 'Get in touch',
  },
  about: {
    title: 'About me',
    photoAlt: 'Photo of William Fuentes Ossa',
    paragraphs: [
      'I am an electronics engineer and Full Stack developer. I like building complete systems: from the API and the database to the interface people actually use.',
      'I worked on a SaaS security and monitoring platform built with microservices and IoT device integration. Today I take part in migrating legacy enterprise applications to Java and web platforms for a healthcare organization, where I learned to understand large systems, document them carefully and deliver in stages.',
      'I work with clear communication, staged deliveries and clean, documented code.',
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Backend',
        items: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Java'],
        text: 'REST APIs, JWT authentication, validation, OpenAPI documentation, testing and microservices.',
      },
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
        text: 'Responsive, accessible web applications with light and dark themes.',
      },
      {
        title: 'Data and tooling',
        items: ['MySQL', 'MongoDB', 'SQL Server', 'Docker', 'Git', 'GitHub Actions'],
        text: 'Database design, automated testing, containers and continuous integration.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'A Node.js API with the React dashboard that consumes it, and an online store built with React and Redux.',
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
        text: 'Online store for indoor plants: catalog by category, a shopping cart with quantity control and dynamic totals, and single-page navigation with React Router.',
        alt: 'Screenshot of the Paradise Nursery online store',
        stack: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
      },
    },
  },
  experience: {
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
    title: 'Education & certifications',
    subtitle: 'Formal studies and certifications earned online.',
    degreesTitle: 'Education',
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
    title: 'Have a project in mind?',
    lead: 'I am open to freelance projects and collaborations. Tell me what you need.',
    email: 'Email me',
  },
  ui: {
    skip: 'Skip to content',
    language: 'Change language',
    theme: { light: 'Light theme', dark: 'Dark theme', system: 'System theme' },
    themeHint: 'click to change',
    openImage: 'Open image in a new tab',
  },
};

export const messages: Record<Lang, Messages> = { es, en };
export const LANG_KEY = 'portfolio.lang';

export function detectLang(saved: string | null, browser: string | undefined): Lang {
  if (saved === 'es' || saved === 'en') return saved;
  return (browser ?? 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}
