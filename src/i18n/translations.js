// Diccionario de traducciones (EN / ES).
// Estructura por secciones. Los componentes leen estos valores con t('clave.anidada').
// Datos NO traducibles (imágenes, íconos, links) viven en cada componente; aquí
// solo el texto que cambia según el idioma.

export const translations = {
  en: {
    header: {
      jobStatus: 'Systems Engineer',
    },
    nav: {
      work: '> _Work',
      tech: '> _Tech',
      projects: '> _Projects',
      contact: '> _Contact',
    },
    terminal: {
      // ['cmd', ...] lleva el prompt $; ['out', ...] es salida del comando.
      lines: [
        ['cmd', 'whoami'],
        ['out', 'poncho_ajmv@portfolio'],
        ['cmd', 'cat me.txt'],
        ['out', 'Systems Engineer • Linux user • Freelance developer'],
        ['out', 'Data Engineer & DevOps Jr.'],
      ],
    },
    experience: {
      experienceTitle: '> _Experience',
      educationTitle: '> _Education',
      items: [
        {
          role: 'Teaching Assistant',
          company: 'Universidad Galileo',
          companyUrl: 'https://www.galileo.edu/fisicc/',
          location: 'Guatemala',
          period: 'Jul 2026 – Present',
          type: 'Part-time',
          groups: [
            {
              label: 'Software Engineering',
              bullets: [
                'The full software lifecycle: requirements, architecture, construction, testing, deployment and maintenance.',
                'Design with technical judgment: modularity, coupling and cohesion, patterns, and architectural trade-offs suited to each project.',
              ],
            },
            {
              label: 'CC4 Compilers (Stanford CS143)',
              bullets: [
                'I teach the course project, a compiler in four phases: the lexer produces the tokens, the parser builds the tree, semantic analysis checks types and scopes, and codegen emits the executable.',
              ],
            },
          ],
        },
        {
          role: 'Data Engineer & DevOps Jr.',
          company: 'Lambda Analytics',
          companyUrl: 'https://www.lambda-analytics.net/',
          location: 'Guatemala',
          period: 'Jan 2026 – Sep 2026',
          type: 'Full-time',
          bullets: [
            'Digitized an archive of 80,000 documents spanning 30 years through an OCR pipeline, turning it into queryable data.',
            'Designed the Data Warehouse on a Medallion architecture: bronze keeps the raw data so it can be reprocessed, silver standardizes types, deduplicates and applies quality rules, and gold exposes dimensional models ready for consumption.',
            'Automated the ingestion and email workflows that used to be done by hand, closing the gap between data arriving and data being available.',
            'Built the ETL pipelines with incremental loads and idempotent execution, so a retry never duplicates records.',
            'Modeled and published Power BI dashboards on the gold layer, with a single definition per metric so two reports never disagree.',
          ],
        },
        {
          role: 'Data Analyst',
          company: 'Lambda Analytics',
          companyUrl: 'https://www.lambda-analytics.net/',
          location: 'Guatemala',
          period: 'Sep 2025 – Dec 2025',
          type: 'Internship',
          bullets: [
            'Developed predictive models for data analysis.',
            'Ran exploratory analysis and reporting to support business decisions.',
          ],
        },
      ],
      education: [
        {
          degree: 'Systems Engineering and Computer Science',
          school: 'Universidad Galileo',
          schoolUrl: 'https://www.galileo.edu/fisicc/',
          location: 'Guatemala',
          period: '2021 – 2026',
        },
      ],
    },
    skills: {
      title: '> _Tech Stack',
      categories: {
        data: 'Data & analysis',
        bi: 'Databases & BI',
        languages: 'Languages',
        web: 'Web',
        testing: 'Testing & CI/CD',
        env: 'Environment',
      },
    },
    discord: {
      note: "I'm one with the Force and the Force is with me.",
      aboutMe: 'About me',
      aboutLines: [
        'Systems Engineer',
        'Data warehousing, ETL and analytics',
        'Compilers teaching assistant',
        'Linux and open source',
      ],
      rolesLabel: 'Roles',
      playing: 'Playing',
      memberSince: 'Member since',
      joinedAt: 'Jan 3, 2018',
      messagePrefix: 'Message',
      send: 'Send',
      sicParvis: '◌ Sic Parvis Magna ◌',
    },
    projects: {
      title: '> _Projects',
      code: 'Code',
      live: 'Demo',
      // El orden debe coincidir con projectsMeta en components/ProjectCard.js.
      items: [
        {
          title: 'Lienzo',
          description:
            'Desktop image editor in Rust, in the spirit of Paint. Installable and portable for Windows, macOS and Linux, with ten themes and two languages.',
          tags: ['Rust', 'egui', 'Desktop', 'MIT'],
        },
        {
          title: 'World Cup 2026 — forecasting model',
          description:
            'Per-match probabilities from six blended models and 30,000 Monte Carlo simulations. Forecast published before the tournament and validated with a backtest.',
          tags: ['Python', 'XGBoost', 'Monte Carlo'],
        },
        {
          title: 'Automatic USB backup',
          description:
            'Backs up photos, documents and videos to a USB drive with nothing to install. Pure Python, 75 file types, and by design it never deletes an original.',
          tags: ['Python', 'GPL-2.0', 'Cross-platform'],
        },
        {
          title: 'Film Fanatic',
          description:
            'Movie and series browser on top of TMDb: cast, trailers, where to watch it, and favorites. Installable PWA, with the API key behind a proxy.',
          tags: ['React', 'Router', 'PWA', 'TMDb'],
        },
        {
          title: 'Lexical Analyzer',
          description:
            'Tokenizes text or JSON files, flags lexical errors with their position, and exports the parse tree for Graphviz.',
          tags: ['React', 'Automata', 'Graphviz'],
        },
        {
          title: 'Interactive Terminal',
          description:
            'Emulates a Linux session in the browser: in-memory filesystem, custom aliases, and commands like cd, ls, tree and rm.',
          tags: ['React', 'Parsing', 'MIT'],
        },
      ],
    },
    cta: {
      line: 'Looking for an engineer? I’m ready for new challenges.',
      downloadCv: '[DOWNLOAD CV]',
    },
    socials: {
      title: 'SOCIALS',
      subtitle: 'Insert coin to connect.',
      emailHeading: 'Send me an email',
      emailLabel: 'Email',
      copy: '[COPY]',
      copied: '[OK]',
    },
    footer: {
      closed: 'Connection closed.',
      by: 'made by',
    },
    settings: {
      title: 'Settings',
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
    },
  },

  es: {
    header: {
      jobStatus: 'Ingeniero en Sistemas',
    },
    nav: {
      work: '> _Work',
      tech: '> _Tech',
      projects: '> _Projects',
      contact: '> _Contact',
    },
    terminal: {
      lines: [
        ['cmd', 'whoami'],
        ['out', 'poncho_ajmv@portfolio'],
        ['cmd', 'cat me.txt'],
        ['out', 'Ingeniero en Sistemas • Usuario de Linux • Desarrollador freelance'],
        ['out', 'Data Engineer & DevOps Jr.'],
      ],
    },
    experience: {
      experienceTitle: '> _Experience',
      educationTitle: '> _Education',
      items: [
        {
          role: 'Auxiliar de cátedra',
          company: 'Universidad Galileo',
          companyUrl: 'https://www.galileo.edu/fisicc/',
          location: 'Guatemala',
          period: 'Jul 2026 – Presente',
          type: 'Medio tiempo',
          groups: [
            {
              label: 'Ingeniería de Software',
              bullets: [
                'Ciclo de vida completo del software: requerimientos, arquitectura, construcción, pruebas, despliegue y mantenimiento.',
                'Diseño con criterio técnico: modularidad, acoplamiento y cohesión, patrones y trade-offs de arquitectura según el contexto del proyecto.',
              ],
            },
            {
              label: 'CC4 Compiladores (CS143 Stanford)',
              bullets: [
                'Imparto el proyecto del curso, un compilador en cuatro fases: lexer produce los tokens, parser construye el árbol, semantic verifica tipos y alcances, y codegen genera el ejecutable.',
              ],
            },
          ],
        },
        {
          role: 'Data Engineer & DevOps Jr.',
          company: 'Lambda Analytics',
          companyUrl: 'https://www.lambda-analytics.net/',
          location: 'Guatemala',
          period: 'Ene 2026 – Sep 2026',
          type: 'Tiempo completo',
          bullets: [
            'Digitalicé un archivo de 80,000 documentos con 30 años de historia mediante un pipeline de OCR, convirtiéndolo en datos consultables.',
            'Diseñé el Data Warehouse sobre arquitectura Medallion: bronze conserva el dato crudo para poder reprocesar, silver estandariza tipos, deduplica y aplica reglas de calidad, y gold expone modelos dimensionales listos para consumo.',
            'Automaticé la ingesta y los flujos de correo que antes se hacían a mano, cerrando la brecha entre que el dato llega y que está disponible.',
            'Construí los pipelines ETL con cargas incrementales y ejecución idempotente, de modo que un reintento no duplica registros.',
            'Modelé y publiqué dashboards en Power BI sobre la capa gold, con una sola definición por métrica para que dos reportes no den cifras distintas.',
          ],
        },
        {
          role: 'Data Analyst',
          company: 'Lambda Analytics',
          companyUrl: 'https://www.lambda-analytics.net/',
          location: 'Guatemala',
          period: 'Sep 2025 – Dic 2025',
          type: 'Prácticas',
          bullets: [
            'Desarrollé modelos predictivos para análisis de datos.',
            'Ejecuté análisis exploratorio y reportería para decisiones de negocio.',
          ],
        },
      ],
      education: [
        {
          degree: 'Ingeniería en Sistemas y Ciencias de la Computación',
          school: 'Universidad Galileo',
          schoolUrl: 'https://www.galileo.edu/fisicc/',
          location: 'Guatemala',
          period: '2021 – 2026',
        },
      ],
    },
    skills: {
      title: '> _Tech Stack',
      categories: {
        data: 'Datos y análisis',
        bi: 'Bases de datos y BI',
        languages: 'Lenguajes',
        web: 'Web',
        testing: 'Pruebas y CI/CD',
        env: 'Entorno',
      },
    },
    discord: {
      note: "I'm one with the Force and the Force is with me.",
      aboutMe: 'Sobre mí',
      aboutLines: [
        'Ingeniero en Sistemas',
        'Data warehousing, ETL y análisis',
        'Auxiliar de Compiladores',
        'Linux y open source',
      ],
      rolesLabel: 'Roles',
      playing: 'Jugando a',
      memberSince: 'Miembro desde',
      joinedAt: '3 ene 2018',
      messagePrefix: 'Mensaje a',
      send: 'Enviar',
      sicParvis: '◌ Sic Parvis Magna ◌',
    },
    projects: {
      title: '> _Projects',
      code: 'Código',
      live: 'Demo',
      items: [
        {
          title: 'Lienzo',
          description:
            'Editor de imágenes de escritorio en Rust, al estilo de Paint. Instalable y portable para Windows, macOS y Linux, con diez temas y en dos idiomas.',
          tags: ['Rust', 'egui', 'Escritorio', 'MIT'],
        },
        {
          title: 'Mundial 2026 — modelo de pronóstico',
          description:
            'Probabilidades por partido con seis modelos combinados y 30,000 simulaciones Monte Carlo. Pronóstico publicado antes del torneo y validado con backtest.',
          tags: ['Python', 'XGBoost', 'Monte Carlo'],
        },
        {
          title: 'Respaldo automático en USB',
          description:
            'Respalda fotos, documentos y videos en una USB sin instalar nada. Python puro, 75 tipos de archivo, y por diseño nunca borra un original.',
          tags: ['Python', 'GPL-2.0', 'Multiplataforma'],
        },
        {
          title: 'Film Fanatic',
          description:
            'Buscador de películas y series sobre TMDb: reparto, tráilers, dónde verla y favoritos. PWA instalable, con la clave de API detrás de un proxy.',
          tags: ['React', 'Router', 'PWA', 'TMDb'],
        },
        {
          title: 'Analizador Léxico',
          description:
            'Tokeniza archivos de texto o JSON, señala los errores léxicos con su posición y exporta el árbol de derivación para Graphviz.',
          tags: ['React', 'Autómatas', 'Graphviz'],
        },
        {
          title: 'Terminal Interactiva',
          description:
            'Emula una sesión de Linux en el navegador: sistema de archivos en memoria, alias propios y comandos como cd, ls, tree y rm.',
          tags: ['React', 'Parsing', 'MIT'],
        },
      ],
    },
    cta: {
      line: '¿Buscas un ingeniero? Estoy listo para nuevos retos.',
      downloadCv: '[DESCARGAR CV]',
    },
    socials: {
      title: 'SOCIALS',
      subtitle: 'Insert coin to connect.',
      emailHeading: 'Escríbeme un correo',
      emailLabel: 'Correo',
      copy: '[COPIAR]',
      copied: '[OK]',
    },
    footer: {
      closed: 'Conexión cerrada.',
      by: 'hecho por',
    },
    settings: {
      title: 'Ajustes',
      language: 'Idioma',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
    },
  },
};
