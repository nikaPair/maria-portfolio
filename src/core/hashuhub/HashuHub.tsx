"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./hashuhub.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import Challenge from "./ui/challenge/Challenge";
import Process from "./ui/process/Process";
import OriginalDesign from "./ui/original-design/OriginalDesign";
import Solution from "./ui/solution/Solution";
import Impact from "./ui/impact/Impact";
import { OtherProjectsSection } from "@/shared/ui/other-projects";

export default function HashuHub() {
  const t = useTranslations("hashuhub.sidebarItems");

  const list = [
    t("context"),
    t("challenge"),
    t("strategy"),
    t("originalDesign"),
    t("solution"),
    t("impact"),
  ];

  return (
    <>
      <div className={styles.hashuhub}>
        <Aside list={list} />
        <div className={styles.hashuhub__content}>
          <AboutProduct />
          <Challenge />
          <Process />
          <OriginalDesign />
          <Solution />
          <Impact />
          <OtherProjectsSection page="hashuhub" />
        </div>
      </div>
      <Footer />
    </>
  );
}
