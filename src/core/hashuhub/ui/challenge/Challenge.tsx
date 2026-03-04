"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Challenge.module.css";

export default function Challenge() {
  const t = useTranslations("hashuhub.challenge");
  const navT = useTranslations("hashuhub.sidebarItems");

  return (
    <section id={navT("challenge")} className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.title}>{t("title")}</h4>
        <p className={styles.subtitle}>
          {t("subtitle")}
        </p>
      </div>

      <div className={styles.columns}>
        {/* Left Card: Mining Pool */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}>
            <span className={styles.emojiIcon}>⛏️</span>
          </div>
          <h3 className={styles.columnTitle}>{t("miningPoolTitle")}</h3>
          <p className={styles.columnText}>
            {t("miningPoolText")}
          </p>
        </div>

        {/* Right Card: Admin Panel */}
        <div className={styles.column}>
          <div className={styles.iconWrapper}>
            <span className={styles.emojiIcon}>🔧</span>
          </div>
          <h3 className={styles.columnTitle}>{t("adminPanelTitle")}</h3>
          <p className={styles.columnText}>
            {t("adminPanelText")}
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className={styles.bottomTextWrapper}>
        <p className={styles.bottomText}>
          {t("bottomText")}
        </p>
      </div>

      {/* Complication Section */}
      <div className={styles.complicationSection}>
        <h4 className={styles.complicationTitle}>{t("complicationTitle")}</h4>
        <p className={styles.complicationText}>
          {t("complicationText")}
        </p>

        <div className={styles.warningCard}>
          <div className={styles.warningIconWrapper}>
            <span className={styles.emojiIcon}>⚠️</span>
          </div>
          <p className={styles.warningText}>
            {t("warningText")}
          </p>
        </div>
      </div>
    </section>
  );
}
