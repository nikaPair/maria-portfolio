"use client";
import React from "react";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./irida-ai.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import Research from "./ui/research/Research";
import Solution from "./ui/solution/Solution";
import Impact from "./ui/impact/Impact";
import OtherProjects from "./ui/other-projects/OtherProjects";

export default function IridaAI() {
  const list = [
    "Как появилась идея",
    "Исследование и инсайты",
    "Решение",
    "Визуальная стратегия",
    "Перспективы проекта",
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.irida}>
        <Aside list={list} />
        <div className={styles.irida__content}>
          <AboutProduct />
          <Research />
          <Solution />
          <Impact />
          <OtherProjects />
        </div>
      </div>
      <Footer />
    </div>
  );
}
