export type Language = {
  code: string;
  label: string;
  flag: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type CaseData = {
  id: number;
  slug: string;
  position: string;
  location: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  company: string;
  description: string;
  tags: string[];
  hasImage: boolean;
  image?: string;
  isNDA?: boolean;
};

export type PetProjectData = {
  id: number;
  logo: string;
  name: string;
  description: string;
  className: string;
  image?: string;
  images?: string[];
  horizontal?: boolean;
};

export type UIShot = {
  src: string;
  alt: string;
  center?: boolean;
};
