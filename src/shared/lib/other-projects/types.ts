export type OtherProjectPageId =
  | "dessst"
  | "askbefore"
  | "emoview"
  | "hashuhub"
  | "irida-ai"
  | "metropolitan";

export type OtherProjectSlideBgColor = "orange" | "blue" | "pink";

export type OtherProjectSlide = {
  id: number;
  name: string;
  description: string;
  image: string;
  href: string;
  bgColor: OtherProjectSlideBgColor;
};
