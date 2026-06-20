export type Lang = "es" | "en"

export const content = {
  es: {
    nav: { projects: "Proyectos", contact: "Contacto" },
    hero: {
      name: "Juan Moreno",
      title: "Backend Developer & Software Architect",
      description:
        "Desarrollo sistemas robustos, escalables e integrados que funcionan en producción.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
    },
    tech: { heading: "Stack tecnológico" },
    projects: {
      heading: "Proyectos",
      published: "Publicado en Odoo App Store",
      collaborators: "Construido con 2 colaboradores",
      inProduction: "En producción",
      inDevelopment: "En desarrollo",
      viewOn: "Ver en Odoo App Store",
      items: {
        sync: {
          title: "Sync Sheets to Leads",
          description:
            "Conecta Google Sheets con los leads del CRM de Odoo de forma automática.",
        },
        margin: {
          title: "Profit Margin",
          description:
            "Añade un módulo de gestión de margen de ganancia a Odoo.",
        },
        cobranza: {
          title: "Cobranza PWA",
          description:
            "Aplicación full-stack de gestión de cobranzas en producción. PWA offline-first, escritorio y móvil, despliegue en VPS e integración con ERP Profit.",
        },
        agro: {
          title: "Agro App",
          description:
            "Sistema robusto de gestión agrícola en desarrollo. Integración con ERP Profit, construido en solitario de principio a fin.",
        },
      },
    },
    experience: {
      heading: "Experiencia",
      items: [
        {
          period: "Actualidad",
          role: "Desarrollador Backend Freelance",
          detail:
            "Proyectos independientes, propiedad total del desarrollo e integraciones con ERP.",
        },
        {
          period: "2023–2024",
          role: "Desarrollador Backend en [Empresa]",
          detail:
            "Módulos en Odoo 18/19, lógica fiscal venezolana (ISLR, dualidad monetaria).",
        },
      ],
    },
    contact: {
      heading: "Contacto",
      subtitle: "Hablemos sobre tu próximo proyecto.",
    },
    footer: "Desarrollado con Next.js.",
  },
  en: {
    nav: { projects: "Projects", contact: "Contact" },
    hero: {
      name: "Juan Moreno",
      title: "Backend Developer & Software Architect",
      description:
        "I build robust, scalable and integrated systems that work in production.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
    },
    tech: { heading: "Tech stack" },
    projects: {
      heading: "Projects",
      published: "Published on Odoo App Store",
      collaborators: "Built with 2 collaborators",
      inProduction: "In production",
      inDevelopment: "In development",
      viewOn: "View on Odoo App Store",
      items: {
        sync: {
          title: "Sync Sheets to Leads",
          description:
            "Connects Google Sheets with Odoo CRM leads automatically.",
        },
        margin: {
          title: "Profit Margin",
          description:
            "Adds a profit margin management module to Odoo.",
        },
        cobranza: {
          title: "Cobranza PWA",
          description:
            "Full-stack collections management app in production. Offline-first PWA, desktop and mobile, VPS deployment and ERP Profit integration.",
        },
        agro: {
          title: "Agro App",
          description:
            "Robust agricultural management system under development. ERP Profit integration, built solo end-to-end.",
        },
      },
    },
    experience: {
      heading: "Experience",
      items: [
        {
          period: "Current",
          role: "Freelance Backend Developer",
          detail:
            "Independent projects, full ownership and ERP integrations.",
        },
        {
          period: "2023–2024",
          role: "Backend Developer at [Company]",
          detail:
            "Odoo 18/19 modules, Venezuelan tax logic (ISLR, monetary duality).",
        },
      ],
    },
    contact: {
      heading: "Contact",
      subtitle: "Let's talk about your next project.",
    },
    footer: "Built with Next.js.",
  },
} as const

export const techStack = [
  { name: "Python", slug: "python" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Docker", slug: "docker" },
  { name: "Nginx", slug: "nginx" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Odoo", slug: "odoo" },
  { name: "ERP Profit", slug: "erp" },
  { name: "PWA", slug: "pwa" },
  { name: "Ubuntu VPS", slug: "ubuntu" },
] as const
