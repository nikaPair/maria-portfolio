"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./irida-ai.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import Research from "./ui/research/Research";
import Solution from "./ui/solution/Solution";
import VisualStrategy from "./ui/visual-strategy/VisualStrategy";
import Impact from "./ui/impact/Impact";
import { OtherProjectsSection } from "@/shared/ui/other-projects";

export default function IridaAI() {
  const t = useTranslations("irida.sidebarItems");

  const list = [
    t("idea"),
    t("research"),
    t("solution"),
    t("visualStrategy"),
    t("impact"),
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.irida}>
        <Aside list={list} />
        <div className={styles.irida__content}>
          <AboutProduct />
          <Research />
          <Solution />
          <VisualStrategy />
          <Impact />
          <OtherProjectsSection page="irida-ai" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
