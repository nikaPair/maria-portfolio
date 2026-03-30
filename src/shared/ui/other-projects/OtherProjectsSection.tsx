"use client";

import type { OtherProjectPageId } from "@/shared/lib/other-projects";
import { useOtherProjectSlides } from "@/shared/lib/other-projects";
import { OtherProjects } from "./OtherProjects";

export type OtherProjectsSectionProps = {
  page: OtherProjectPageId;
};

export function OtherProjectsSection({ page }: OtherProjectsSectionProps) {
  const slides = useOtherProjectSlides(page);
  return <OtherProjects slides={slides} />;
}
