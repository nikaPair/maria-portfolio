"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Aside from "./ui/aside/aside";
import styles from "./askbefore.module.css";
import AboutProduct from "./ui/about-product/AboutProduct";
import ContextAndTask from "./ui/context-and-task/ContextAndTask";
import Research from "./ui/research/Research";
import ArchitectureAndScenarios from "./ui/architecture-and-scenarios/ArchitectureAndScenarios";
import DesignSystem from "./ui/design-system/DesignSystem";
import TeamWork from "./ui/team-work/TeamWork";
import Result from "./ui/result/Result";
import OtherProjects from "./ui/other-projects/OtherProjects";
import Footer from "@/components/Footer/Footer";

export default function AskBefore() {
  const t = useTranslations("askBefore.sidebarItems");

  const list = [
    t("about"),
    t("context"),
    t("research"),
    t("architecture"),
    t("designSystem"),
    t("teamWork"),
    t("result"),
  ];

  return (
    <>
      <div className={styles.askbefore}>
        <Aside list={list} />
        <div className={styles.askbefore__content}>
          <AboutProduct />
          <ContextAndTask />
          <Research />
          <ArchitectureAndScenarios />
          <DesignSystem />
          <TeamWork />
          <Result />
          <OtherProjects />
        </div>
      </div>
      <Footer />
    </>
  );
}
