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
      viewOn: "Ver en Odoo App Store",
      items: {
        sync: {
          title: "Sync Sheets to Leads",
          description:
            "Conecta Google Sheets con los leads del CRM de Odoo de forma automática.",
        },
        margin: {
          title: "Price & Utility Optimizer",
          description:
            "Automatiza el cálculo de precios y márgenes de ganancia con reglas de protección inteligentes en Odoo.",
        },
        cobranza: {
          title: "Cobranza PWA",
          description:
            "Aplicación full-stack de gestión de cobranzas. PWA offline-first, escritorio y móvil, despliegue en VPS e integración con ERP Profit.",
        },
        agro: {
          title: "Agro App",
          description:
            "Sistema robusto de gestión agrícola. PWA offline-first con React y Next.js, despliegue con Docker y Nginx, integración con ERP Profit, construido en solitario de principio a fin.",
        },
      },
    },
    experience: {
      heading: "Experiencia",
      items: [
        {
          role: "Desarrollador Backend Freelance",
          detail:
            "Proyectos independientes, propiedad total del desarrollo e integraciones con ERP.",
        },
        {
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
    footer: {
      rightsReserved: "Todos los derechos reservados.",
      builtWith: "Desarrollado con Next.js.",
    },
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
      viewOn: "View on Odoo App Store",
      items: {
        sync: {
          title: "Sync Sheets to Leads",
          description:
            "Connects Google Sheets with Odoo CRM leads automatically.",
        },
        margin: {
          title: "Price & Utility Optimizer",
          description:
            "Automates price and profit margin calculations with smart protection rules in Odoo.",
        },
        cobranza: {
          title: "Cobranza PWA",
          description:
            "Full-stack collections management app. Offline-first PWA, desktop and mobile, VPS deployment and ERP Profit integration.",
        },
        agro: {
          title: "Agro App",
          description:
            "Robust agricultural management system. Offline-first PWA with React and Next.js, Docker and Nginx deployment, ERP Profit integration, built solo end-to-end.",
        },
      },
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Freelance Backend Developer",
          detail:
            "Independent projects, full ownership and ERP integrations.",
        },
        {
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
    footer: {
      rightsReserved: "All rights reserved.",
      builtWith: "Built with Next.js.",
    },
  },
} as const
