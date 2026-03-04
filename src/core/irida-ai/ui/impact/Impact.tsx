"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Impact.module.css";

export default function Impact() {
  const t = useTranslations("irida.impact");
  const navT = useTranslations("irida.sidebarItems");

  return (
    <section id={navT("impact")} className={styles.section}>
      <h4 className={styles.title}>{t("title")}</h4>
      <p className={styles.description}>
        {t("description")}
      </p>

      <div className={styles.highlight}>
        <div className={styles.iconWrapper}>
          <span className={styles.emoji}>🤝</span>
        </div>
        <p className={styles.text}>
          {t("text")}
        </p>
      </div>
    </section>
  );
}
