"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { bgForProjectHref } from "./project-slide-bg";
import type { OtherProjectPageId, OtherProjectSlide } from "./types";

function slide(
  partial: Omit<OtherProjectSlide, "bgColor">,
): OtherProjectSlide {
  return {
    ...partial,
    bgColor: bgForProjectHref(partial.href),
  };
}

export function useOtherProjectSlides(
  page: OtherProjectPageId,
): OtherProjectSlide[] {
  const tPetProjects = useTranslations("petProjects.items");
  const tCases = useTranslations("cases.items");

  return useMemo(() => {
    switch (page) {
      case "dessst":
      case "metropolitan":
        return [
          slide({
            id: 1,
            name: "Emoview",
            description: tPetProjects("emoview.description"),
            image: "/images/bar.png",
            href: "/emoview",
          }),
          slide({
            id: 2,
            name: "Irida-AI",
            description: tPetProjects("iridaAi.description"),
            image: "/images/chat.png",
            href: "/irida-ai",
          }),
          slide({
            id: 3,
            name: "AskBefore",
            description: tCases("askbefore.description"),
            image: "/images/hashuhub/askbefore.png",
            href: "/askbefore",
          }),
        ];
      case "askbefore":
        return [
          slide({
            id: 1,
            name: "Irida-AI",
            description: tPetProjects("iridaAi.description"),
            image: "/images/chat.png",
            href: "/irida-ai",
          }),
          slide({
            id: 2,
            name: "Emoview",
            description: tPetProjects("emoview.description"),
            image: "/images/bar.png",
            href: "/emoview",
          }),
          slide({
            id: 3,
            name: "HashuHub",
            description: tPetProjects("hashuhub.description"),
            image: "/images/emoview-slider.png",
            href: "/hashuhub",
          }),
        ];
      case "emoview":
        return [
          slide({
            id: 1,
            name: "Irida-AI",
            description: tPetProjects("iridaAi.description"),
            image: "/images/chat.png",
            href: "/irida-ai",
          }),
          slide({
            id: 2,
            name: "AskBefore",
            description: tCases("askbefore.description"),
            image: "/images/hashuhub/askbefore.png",
            href: "/askbefore",
          }),
          slide({
            id: 3,
            name: "HashuHub",
            description: tPetProjects("hashuhub.description"),
            image: "/images/asic.png",
            href: "/hashuhub",
          }),
        ];
      case "hashuhub":
        return [
          slide({
            id: 1,
            name: "Irida-AI",
            description: tPetProjects("iridaAi.description"),
            image: "/images/chat.png",
            href: "/irida-ai",
          }),
          slide({
            id: 2,
            name: "AskBefore",
            description: tCases("askbefore.description"),
            image: "/images/hashuhub/askbefore.png",
            href: "/askbefore",
          }),
          slide({
            id: 3,
            name: "Emoview",
            description: tPetProjects("emoview.description"),
            image: "/images/bar.png",
            href: "/emoview",
          }),
        ];
      case "irida-ai":
        return [
          slide({
            id: 1,
            name: "HashuHub",
            description: tPetProjects("hashuhub.description"),
            image: "/images/asic.png",
            href: "/hashuhub",
          }),
          slide({
            id: 2,
            name: "AskBefore",
            description: tCases("askbefore.description"),
            image: "/images/hashuhub/askbefore.png",
            href: "/askbefore",
          }),
          slide({
            id: 3,
            name: "Emoview",
            description: tPetProjects("emoview.description"),
            image: "/images/bar.png",
            href: "/emoview",
          }),
        ];
    }
  }, [page, tPetProjects, tCases]);
}
