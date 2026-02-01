import { Language, NavItem, CaseData, PetProjectData, UIShot } from "@/types";

export const LANGUAGES: Language[] = [
  { code: "ru", label: "Rus", flag: "/images/flag-rus.png" },
  { code: "en", label: "EN", flag: "/images/flag-eng.png" },
];

export const NAV_ITEMS: NavItem[] = [
  { href: "/#cases", label: "Кейсы" },
  { href: "/#pet-projects", label: "Пет-проекты" },
  { href: "/#ui-shots", label: "UI shots" },
  { href: "/about", label: "Обо мне" },
];

export const CASES_DATA: CaseData[] = [
  {
    id: 1,
    slug: "askbefore",
    position: "Product Designer",
    location: "Berlin, Germany • с 2024 по 2026",
    logo: "/images/askbefore.svg",
    logoWidth: 130,
    logoHeight: 32,
    company: "AskBefore",
    description:
      "Работала над всеми сторонами продукта под руководством лида: поддерживала дизайн-систему, разрабатывала экраны под новый функционал, проводила интервью и юзабилити-тесты. Курировала работу двух дизайнеров.",
    tags: [
      "Design System",
      "UX Research",
      "Prototyping",
      "Testing",
      "Team Mentoring",
    ],
    hasImage: true,
    image: "/images/ask-before_desktop_map-filters.png",
    isNDA: false,
  },
  {
    id: 2,
    slug: "dessst",
    position: "Product Designer",
    location: "Moscow, Russia • с 2023-2024",
    logo: "/images/dessst.svg",
    logoWidth: 86,
    logoHeight: 16,
    company: "Dessst",
    description:
      "Разработала в команде образовательную платформу для школы продуктовых дизайнеров. Работала под руководством основателя, отвечала за два крупных раздела «Учебных практик» и «Интенсивов».",
    tags: [],
    hasImage: true,
    image: "/images/home_dessst_desktop-hero.png",
    isNDA: true,
  },
  {
    id: 3,
    slug: "metropolitan",
    position: "UX/UI Designer",
    location: "Dubai, UAE • 2022-2023",
    logo: "/images/metropolitan.svg",
    logoWidth: 168,
    logoHeight: 32,
    company: "Metropolitan",
    description:
      "Отвечала за разработку дизайн-системы, перевела стек на современную методологию в Figma, выполняла проектные задачи по созданию digital-продуктов для компаний-девелоперов и внутренних отделов агентства.",
    tags: [],
    hasImage: true,
    image: "/images/home_metropolitan_desktop-hero.png",
    isNDA: true,
  },
];

export const PET_PROJECTS_DATA: PetProjectData[] = [
  {
    id: 1,
    logo: "/images/logo-emoview.png",
    name: "Emoview",
    image: "/images/bar.png",
    description:
      "Профессиональный трекер психического состояния для людей с БАР и ПРЛ",
    className: "first",
  },
  {
    id: 2,
    logo: "/images/logo-irida.png",
    name: "Irida AI",
    image: "/images/chat.png",
    description:
      "Медицинский AI-ассистент на технической базе некоммерческого проекта DxGPT",
    className: "second",
  },
  {
    id: 3,
    logo: "/images/logo-hushHub.png",
    name: "HushHub",
    image: "/images/asic.png",
    description:
      "Унифицированная платформа для мониторинга работы ASIC-майнеров",
    horizontal: true,
    className: "third",
  },
];

// Desktop UI shots - 11 images
export const UI_SHOTS_DESKTOP: UIShot[] = [
  { src: "/images/1.png", alt: "UI Shot 1" },
  { src: "/images/2.png", alt: "UI Shot 2" },
  { src: "/images/3.png", alt: "UI Shot 3" },
  { src: "/images/4.png", alt: "UI Shot 4" },
  { src: "/images/5.png", alt: "UI Shot 5" },
  { src: "/images/6.png", alt: "UI Shot 6" },
  { src: "/images/7.png", alt: "UI Shot 7" },
  { src: "/images/8.png", alt: "UI Shot 8" },
  { src: "/images/9.png", alt: "UI Shot 9" },
  { src: "/images/10.png", alt: "UI Shot 10" },
  { src: "/images/11.png", alt: "UI Shot 11" },
];

// Tablet UI shots - 16 images
export const UI_SHOTS_TABLET: UIShot[] = [
  { src: "/images/tablet/featured_mockup-1.png", alt: "Featured mockup 1" },
  { src: "/images/tablet/featured_mockup-2.png", alt: "Featured mockup 2" },
  { src: "/images/tablet/featured_mockup-3.png", alt: "Featured mockup 3" },
  { src: "/images/tablet/featured_mockup-4.png", alt: "Featured mockup 4" },
  { src: "/images/tablet/featured_mockup-5.png", alt: "Featured mockup 5" },
  { src: "/images/tablet/featured_mockup-6.png", alt: "Featured mockup 6" },
  { src: "/images/tablet/featured_mockup-7.png", alt: "Featured mockup 7" },
  { src: "/images/tablet/featured_mockup-8.png", alt: "Featured mockup 8" },
  { src: "/images/tablet/featured_mockup-9.png", alt: "Featured mockup 9" },
  { src: "/images/tablet/featured_mockup-10.png", alt: "Featured mockup 10" },
  { src: "/images/tablet/featured_mockup-11.png", alt: "Featured mockup 11" },
  { src: "/images/tablet/featured_mockup-12.png", alt: "Featured mockup 12" },
  { src: "/images/tablet/featured_mockup-13.png", alt: "Featured mockup 13" },
  { src: "/images/tablet/featured_mockup-14.png", alt: "Featured mockup 14" },
  { src: "/images/tablet/featured_mockup-15.png", alt: "Featured mockup 15" },
  { src: "/images/tablet/featured_mockup.png", alt: "Featured mockup 16" },
];

// Mobile UI shots - 19 images
export const UI_SHOTS_MOBILE: UIShot[] = [
  { src: "/images/mobile/1.png", alt: "Mobile UI Shot 1" },
  { src: "/images/mobile/2.png", alt: "Mobile UI Shot 2" },
  { src: "/images/mobile/3.png", alt: "Mobile UI Shot 3" },
  { src: "/images/mobile/4.png", alt: "Mobile UI Shot 4" },
  { src: "/images/mobile/5.png", alt: "Mobile UI Shot 5" },
  { src: "/images/mobile/6.png", alt: "Mobile UI Shot 6" },
  { src: "/images/mobile/7.png", alt: "Mobile UI Shot 7" },
  { src: "/images/mobile/8.png", alt: "Mobile UI Shot 8" },
  { src: "/images/mobile/9.png", alt: "Mobile UI Shot 9" },
  { src: "/images/mobile/10.png", alt: "Mobile UI Shot 10" },
  { src: "/images/mobile/11.png", alt: "Mobile UI Shot 11" },
  { src: "/images/mobile/12.png", alt: "Mobile UI Shot 12" },
  { src: "/images/mobile/13.png", alt: "Mobile UI Shot 13" },
  { src: "/images/mobile/14.png", alt: "Mobile UI Shot 14" },
  { src: "/images/mobile/15.png", alt: "Mobile UI Shot 15" },
  { src: "/images/mobile/16.png", alt: "Mobile UI Shot 16" },
  { src: "/images/mobile/17.png", alt: "Mobile UI Shot 17" },
  { src: "/images/mobile/18.png", alt: "Mobile UI Shot 18" },
  { src: "/images/mobile/19.png", alt: "Mobile UI Shot 19" },
];

export const SOCIAL_LINKS = {
  telegram: "https://t.me/lyubimova_dsgn",
};

export const LOCALE_STORAGE_KEY = "siteLocale";
export const DEFAULT_LOCALE = "ru";
