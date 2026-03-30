"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  const t = useTranslations("hashuhub.aboutProduct");
  const navT = useTranslations("hashuhub.sidebarItems");

  return (
    <section id={navT("context")} className={styles.section}>
      <div className={styles.topBlock}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoIcon}>
              <Image
                src="/images/logo-hushHub.png"
                alt="HashuHub Logo"
                width={40}
                height={40}
                className={styles.logoImage}
              />
            </div>
            <h3 className={styles.title}>HashuHub</h3>
          </div>
        </div>

        {/* Description Text */}
        <div className={styles.textBlock}>
          <p className={styles.description}>
            {t("description1")}
          </p>
          <p className={styles.description}>
            {t("description2")}
          </p>
        </div>
      </div>

      {/* Context Block */}
      <div className={styles.contextBlock}>
        <div className={styles.contextContent}>
          <h4 className={styles.contextTitle}>{t("contextTitle")}</h4>
          <p className={styles.contextText}>
            {t("contextText1")}
          </p>
          <p className={styles.contextText}>
            {t("contextText2")}
          </p>
        </div>

        {/* Miner Image Card */}
        <div className={styles.imageCard}>
          <div className={styles.minerImagePlaceholder}>
            <div className={styles.placeholderImg}>
              <Image
                src="/images/hashuhub/context.png"
                alt="ASIC Miner"
                width={304}
                height={304}
                className={styles.minerImage}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
