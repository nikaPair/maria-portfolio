"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Process.module.css";

export default function Process() {
  const t = useTranslations("hashuhub.strategy");
  const navT = useTranslations("hashuhub.sidebarItems");

  return (
    <section id={navT("strategy")} className={styles.section}>
      <h4 className={styles.title}>{t("title")}</h4>
      <div className={styles.strategyCard}>
        <div className={styles.blueLine}></div>
        <p className={styles.strategyText}>
          {t("text")}
        </p>
      </div>
    </section>
  );
}
