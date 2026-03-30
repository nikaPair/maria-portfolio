"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Result.module.css";

export default function Result() {
  const t = useTranslations("askBefore.result");
  const navT = useTranslations("askBefore.sidebarItems");

  const achievements = [
    t("achievements.0"),
    t("achievements.1"),
    t("achievements.2"),
    t("achievements.3"),
  ];

  return (
    <section id={navT("result")} className={styles.section}>
      <h4 className={styles.title}>{t("title")}</h4>

      {/* Achievements Block */}
      <div className={styles.achievementsBlock}>
        <span className={styles.icon}>🏆</span>
        <h5 className={styles.blockTitle}>{t("blockTitle")}</h5>
        <ul className={styles.list}>
          {achievements.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Challenge Block */}
      <div className={styles.challengeBlock}>
        <span className={styles.icon}>🧗</span>
        <h5 className={styles.challengeTitle}>
          {t("challengeTitle")}
        </h5>
        <p className={styles.challengeText}>
          {t("challengeText")}
        </p>
      </div>
    </section>
  );
}
