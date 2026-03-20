import type { OtherProjectSlideBgColor } from "./types";

const PROJECT_SLIDE_BG: Record<string, OtherProjectSlideBgColor> = {
  "/emoview": "blue",
  "/irida-ai": "orange",
  "/hashuhub": "blue",
  "/askbefore": "pink",
};

export function bgForProjectHref(href: string): OtherProjectSlideBgColor {
  return PROJECT_SLIDE_BG[href] ?? "blue";
}
