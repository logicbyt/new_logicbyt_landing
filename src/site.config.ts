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
      { value: "150+", label: "Proyectos Completados" },
      { value: "50+", label: "Clientes Satisfechos" },
      { value: "8+", label: "Años de Experiencia" },
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
    categories: ["Todos", "Web App", "E-Commerce", "SaaS", "Corporativo"],
    items: [
      {
        id: 1,
        title: "FinanceHub Pro",
        category: "SaaS",
        description: "Plataforma integral de gestión financiera para empresas con dashboards en tiempo real, reportes automatizados y predicciones basadas en IA.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
        client: "TechFinance Corp",
        year: "2025",
        url: "https://financehub.example.com",
        featured: true,
        results: [
          { metric: "Usuarios activos", value: "15K+" },
          { metric: "Transacciones/mes", value: "2M+" },
          { metric: "Reducción de costos", value: "40%" },
        ],
      },
      {
        id: 2,
        title: "DulceRose Bakery",
        category: "E-Commerce",
        description: "Landing page y tienda online para una cadena de pastelerías gourmet, con sistema de pedidos, gestión de inventario y marketing integrado.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        tags: ["react.js", "TypeScript", "SQL"],
        client: "Rose Delights Ltd",
        year: "2025",
        url: "https://dulcerose.com",
        featured: true,
        results: [
          { metric: "Ventas mensuales", value: "$2M+" },
          { metric: "Tasa de conversión", value: "4.8%" },
          { metric: "Vendedores activos", value: "500+" },
        ],
      },
      {
        id: 3,
        title: "MediConnect",
        category: "Web App",
        description: "Sistema de telemedicina con videoconsultas, historial médico digital, recetas electrónicas y seguimiento de pacientes.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
        tags: ["Vue.js", "Python", "WebRTC", "Docker"],
        client: "HealthTech Solutions",
        year: "2024",
        url: "https://mediconnect.example.com",
        featured: true,
        results: [
          { metric: "Consultas realizadas", value: "50K+" },
          { metric: "Médicos registrados", value: "800+" },
          { metric: "Satisfacción", value: "98%" },
        ],
      },
      {
        id: 4,
        title: "LogiTrack",
        category: "SaaS",
        description: "Plataforma de gestión logística con tracking en tiempo real, optimización de rutas con IA y análisis predictivo de demanda.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        tags: ["React", "Go", "Redis", "Kubernetes"],
        client: "Global Logistics Inc",
        year: "2024",
        url: "https://logitrack.example.com",
        featured: false,
        results: [
          { metric: "Entregas rastreadas", value: "1M+" },
          { metric: "Ahorro en combustible", value: "25%" },
          { metric: "Eficiencia operativa", value: "+35%" },
        ],
      },
      {
        id: 5,
        title: "Nexus Corporate",
        category: "Corporativo",
        description: "Sitio web corporativo premium con CMS personalizado, portal de inversores y centro de recursos multimedia.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        tags: ["Next.js", "Sanity", "Framer Motion", "Vercel"],
        client: "Nexus Holdings",
        year: "2025",
        url: "https://nexuscorp.example.com",
        featured: false,
        results: [
          { metric: "Visitas mensuales", value: "200K+" },
          { metric: "Tiempo en sitio", value: "+180%" },
          { metric: "Leads generados", value: "+65%" },
        ],
      },
      {
        id: 6,
        title: "EduPlatform",
        category: "Web App",
        description: "LMS completo con cursos interactivos, evaluaciones adaptativas, certificaciones y comunidad de aprendizaje.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        tags: ["React", "Node.js", "GraphQL", "AWS"],
        client: "EduTech Global",
        year: "2024",
        url: "https://eduplatform.example.com",
        featured: false,
        results: [
          { metric: "Estudiantes activos", value: "100K+" },
          { metric: "Cursos disponibles", value: "500+" },
          { metric: "Tasa de finalización", value: "78%" },
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
        techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        techs: ["Node.js", "Python", "Go", "Java", ".NET"],
      },
      {
        name: "Mobile",
        techs: ["React Native", "Flutter", "Swift", "Kotlin"],
      },
      {
        name: "Cloud & DevOps",
        techs: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
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
    email: "contacto@logicbyt.com",
    phone: "+34 912 345 678",
    address: "Madrid, España",
    form: {
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      companyPlaceholder: "Tu empresa",
      messagePlaceholder: "Cuéntanos sobre tu proyecto...",
      submitText: "Enviar Mensaje",
    },
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com/company/logicbyt" },
      { platform: "GitHub", url: "https://github.com/logicbyt" },
      { platform: "Twitter", url: "https://twitter.com/logicbyt" },
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
