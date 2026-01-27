// ============================================
// LOGICBYT - Site Configuration
// All manageable content centralized here
// ============================================

export const siteConfig = {
  // Brand Information
  brand: {
    name: "LogicByt",
    tagline: "Transformamos ideas en software",
    logo: "/logo.svg",
    logobw: "/logo-bw.svg",
  },

  // Navigation Links
  navigation: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Proyectos", href: "#projects" },
    { label: "Nosotros", href: "#about" },
    { label: "Tecnologías", href: "#technologies" },
    { label: "Contacto", href: "#contact" },
  ],

  // Hero Section
  hero: {
    headline: "Desarrollamos el futuro digital",
    subheadline: "de tu empresa",
    description:
      "Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio. Software a medida, aplicaciones web y móviles con tecnología de vanguardia.",
    primaryCTA: {
      text: "Iniciar Proyecto",
      href: "#contact",
    },
    secondaryCTA: {
      text: "Ver Servicios",
      href: "#services",
    },
    stats: [
      { value: "+", label: "Proyectos Completados" },
      { value: "+", label: "Clientes Satisfechos" },
      { value: "3+", label: "Años de Experiencia" },
      { value: "99%", label: "Satisfacción" },
    ],
  },

  // Services Section
  services: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel",
    items: [
      {
        id: 1,
        title: "Desarrollo Web",
        description:
          "Creamos aplicaciones web modernas, escalables y de alto rendimiento utilizando las últimas tecnologías del mercado.",
        features: ["React & Next.js", "APIs REST & GraphQL", "Bases de datos optimizadas"],
      },
      {
        id: 2,
        title: "Apps Móviles",
        description:
          "Desarrollamos aplicaciones nativas y multiplataforma que ofrecen experiencias de usuario excepcionales.",
        features: ["iOS & Android", "React Native", "Flutter"],
      },
      {
        id: 3,
        title: "Software a Medida",
        description:
          "Diseñamos soluciones personalizadas que se adaptan perfectamente a los procesos de tu empresa.",
        features: ["Arquitectura escalable", "Integración de sistemas", "Automatización"],
      },
      {
        id: 4,
        title: "Consultoría Tech",
        description:
          "Asesoramos a tu equipo en la transformación digital y la adopción de nuevas tecnologías.",
        features: ["Auditoría de código", "Optimización", "Capacitación"],
      },
      {
        id: 5,
        title: "Cloud & DevOps",
        description:
          "Implementamos infraestructura en la nube y automatizamos procesos de desarrollo y despliegue.",
        features: ["AWS & Azure", "CI/CD Pipelines", "Kubernetes"],
      },
      {
        id: 6,
        title: "UI/UX Design",
        description:
          "Diseñamos interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
        features: ["Diseño responsive", "Prototipado", "Testing de usabilidad"],
      },
    ],
  },

  // About Section
  about: {
    title: "Sobre LogicByt",
    subtitle: "Innovación y excelencia en cada línea de código",
    description:
      "Somos un equipo apasionado por la tecnología, dedicados a crear soluciones digitales que transforman negocios. Combinamos creatividad, experiencia técnica y metodologías ágiles para entregar productos de software excepcionales.",
    highlights: [
      {
        title: "Metodología Ágil",
        description: "Trabajamos con sprints cortos y entregas continuas para garantizar resultados rápidos y de calidad.",
      },
      {
        title: "Equipo Experto",
        description: "Profesionales certificados con amplia experiencia en las tecnologías más demandadas del mercado.",
      },
      {
        title: "Soporte Continuo",
        description: "Acompañamiento post-lanzamiento para asegurar el éxito a largo plazo de tu proyecto.",
      },
    ],
    values: [
      "Innovación constante",
      "Calidad sin compromisos",
      "Transparencia total",
      "Compromiso con el cliente",
    ],
  },

  // Projects Section
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Soluciones que transforman negocios y generan resultados",
    categories: ["Todos", "Web App"],
    items: [
      {
        id: 1,
        title: "Megacon",
        category: "Web App",
        description: "Plataforma para mostrar y ofrecer servicios de concreto premezclado con integración de bot para cotizaciones con IA",
        image: "images/megaconpe.png",
        tags: ["React", "TypeScript", "N8n", "OpenAi"],
        client: "Megacon SAC",
        year: "2025",
        url: "https://megacon.pe",
        featured: true,
        results: [
          { metric: "Usuarios activos", value: "1K+" },
          { metric: "Ventas/mes", value: "3x" },
          { metric: "Reducción de costos", value: "30%" },
        ],
      },
      {
        id: 2,
        title: "Dulce Rose Bakery",
        category: "Web App",
        description: "Page para pasteleria artesanala con pedidos en linea y sistema administrable de productos",
        image: "images/dulcerose.png",
        tags: ["react.js", "TypeScript", "SQL"],
        client: "Dulce Rose",
        year: "2025",
        url: "https://dulcerose.com",
        featured: true,
        results: [
          { metric: "Ventas mensuales", value: "3x" },
          { metric: "Tasa de conversión", value: "4.8%" },
        ],
      },
      
    ],
  },

  // Technologies Section
  technologies: {
    title: "Tecnologías",
    subtitle: "Stack tecnológico de vanguardia",
    categories: [
      {
        name: "Frontend",
        techs: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        techs: ["Node.js", "Python", "PHP", "Java"],
      },
      {
        name: "Mobile",
        techs: ["React Native", "Flutter",  "Kotlin"],
      },
      {
        name: "Cloud & DevOps",
        techs: ["AWS", "Azure", "Docker", "GitHub Actions"],
      },
      {
        name: "Databases",
        techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
      },
    ],
  },

  // Process Section
  process: {
    title: "Nuestro Proceso",
    subtitle: "Metodología probada para resultados excepcionales",
    steps: [
      {
        number: "01",
        title: "Descubrimiento",
        description: "Analizamos tus necesidades, objetivos y desafíos para entender a fondo tu proyecto.",
      },
      {
        number: "02",
        title: "Planificación",
        description: "Diseñamos la arquitectura y definimos el roadmap con hitos claros y medibles.",
      },
      {
        number: "03",
        title: "Desarrollo",
        description: "Construimos tu solución con metodologías ágiles y entregas incrementales.",
      },
      {
        number: "04",
        title: "Lanzamiento",
        description: "Desplegamos, monitoreamos y optimizamos para garantizar el éxito.",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Hablemos de tu proyecto",
    subtitle: "Estamos listos para convertir tu visión en realidad",
    description:
      "Cuéntanos sobre tu idea y te ayudaremos a encontrar la mejor solución tecnológica para tu negocio.",
    email: "contact@logicbyt.com",
    phone: "51955005782",
    address: "Piura, Perú",
    form: {
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      companyPlaceholder: "Tu empresa",
      messagePlaceholder: "Cuéntanos sobre tu proyecto...",
      submitText: "Enviar Mensaje",
    },
    social: [
      { platform: "WhatsApp", url: "https://wa.me/51955005782" },
      { platform: "GitHub", url: "https://github.com/logicbyt" },
      { platform: "Instagram", url: "https://www.instagram.com/_logicbyt" },
    ],
  },

  // Footer
  footer: {
    description:
      "Transformando ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza.",
    links: [
      {
        title: "Servicios",
        items: [
          { label: "Desarrollo Web", href: "#services" },
          { label: "Apps Móviles", href: "#services" },
          { label: "Software a Medida", href: "#services" },
          { label: "Consultoría", href: "#services" },
        ],
      },
      {
        title: "Empresa",
        items: [
          { label: "Sobre Nosotros", href: "#about" },
          { label: "Proceso", href: "#process" },
          { label: "Tecnologías", href: "#technologies" },
          { label: "Blog", href: "#blog" },
        ],
      },
      {
        title: "Legal",
        items: [
          { label: "Privacidad", href: "#privacy" },
          { label: "Términos", href: "#terms" },
          { label: "Cookies", href: "#cookies" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} LogicByt. Todos los derechos reservados.`,
  },

  // Theme Colors (for reference)
  colors: {
    primary: "#082c4c",
    secondary: "#34a3df",
    accent: "#22e1c7",
  },
};

export type SiteConfig = typeof siteConfig;
