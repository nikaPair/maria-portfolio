"use client";
import React from "react";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./hashuhub.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import Challenge from "./ui/challenge/Challenge";
import Process from "./ui/process/Process";
import OriginalDesign from "./ui/original-design/OriginalDesign";
import Solution from "./ui/solution/Solution";
import Impact from "./ui/impact/Impact";
import OtherProjects from "./ui/other-projects/OtherProjects";

export default function HashuHub() {
  const list = [
    "Контекст",
    "Проблема",
    "Стратегия",
    "Исходный дизайн",
    "Решение",
    "Перспективы проекта",
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
          <OtherProjects />
        </div>
      </div>
      <Footer />
    </>
  );
}
