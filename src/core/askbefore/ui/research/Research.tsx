"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Research.module.css";

export default function Research() {
  const t = useTranslations("askBefore.research");
  const navT = useTranslations("askBefore.sidebarItems");

  const insights = [
    t("insightsList.0"),
    t("insightsList.1"),
    t("insightsList.2"),
    t("insightsList.3"),
    t("insightsList.4"),
    t("insightsList.5"),
  ];

  return (
    <section id={navT("research")} className={styles.section}>
      <h4 className={styles.title}>{t("title")}</h4>

      <div className={styles.descriptionBlock}>
        <p className={styles.description}>
          {t("description1")}
        </p>
        <p className={styles.description}>
          {t("description2")}
        </p>
      </div>

      {/* Highlight Block */}
      <div className={styles.highlightBlock}>
        <span className={styles.rocketIcon}>🚀</span>
        <p className={styles.highlightText}>
          {t("highlightText")}
        </p>
      </div>

      {/* Insights Block */}
      <div className={styles.insightsBlock}>
        <h5 className={styles.insightsTitle}>{t("insightsTitle")}</h5>
        <ul className={styles.insightsList}>
          {insights.map((insight, index) => (
            <li key={index} className={styles.insightItem}>
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
