export const translations = {
  en: {
    hero: {
      status: "Available for new roles",
      subtitle: "Senior Mobile Engineer · Flutter & Android",
      bio: "7+ years turning product goals into polished, maintainable apps across iOS and Android. Clean architecture, smooth releases, and thoughtful UX.",
      badge_kodeco: "Kodeco Author",
      badge_flutter: "FlutterConf LATAM Speaker",
      badge_location: "Lima, Peru",
      cta_contact: "Get in touch",
      cta_linkedin: "LinkedIn",
    },
    skills: { title: "Skills" },
    experience: { title: "Experience", years: "7+ yrs" },
    social: { title: "Find me on" },
    contact: {
      title_line1: "Let's build",
      title_line2: "something.",
      subtitle: "Open to Flutter & mobile roles worldwide. Based in Lima, PE.",
    },
    projects: { title: "Open Source", github: "github →" },
    starred: { title: "Starred on GitHub", view_all: "View all →" },
    lang_toggle: "ES",
  },
  es: {
    hero: {
      status: "Disponible para nuevos roles",
      subtitle: "Senior Mobile Engineer · Flutter & Android",
      bio: "7+ años convirtiendo metas de producto en apps pulidas y mantenibles para iOS y Android. Arquitectura limpia, lanzamientos fluidos y UX cuidadosa.",
      badge_kodeco: "Autor en Kodeco",
      badge_flutter: "Speaker FlutterConf LATAM",
      badge_location: "Lima, Perú",
      cta_contact: "Contactar",
      cta_linkedin: "LinkedIn",
    },
    skills: { title: "Habilidades" },
    experience: { title: "Experiencia", years: "7+ años" },
    social: { title: "Encuéntrame en" },
    contact: {
      title_line1: "Construyamos",
      title_line2: "algo.",
      subtitle: "Disponible para roles de Flutter y mobile. Lima, PE.",
    },
    projects: { title: "Open Source", github: "github →" },
    starred: { title: "Destacados en GitHub", view_all: "Ver todos →" },
    lang_toggle: "EN",
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = typeof translations.en;
