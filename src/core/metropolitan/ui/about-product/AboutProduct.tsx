"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  const t = useTranslations("metropolitan");

  return (
    <section className={styles.section}>
      <Image
        src="/images/metropolitan.svg"
        alt="Metropolitan logo"
        width={220}
        height={24}
        className={styles.logo}
      />

      <div className={styles.infoGrid}>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("site")}</span>
          <a
            href="https://metropolitan.realestate"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            metropolitan.realestate
          </a>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("product")}</span>
          <span className={styles.infoValue}>PropTech</span>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("geography")}</span>
          <span className={styles.infoValue}>{t("geographyValue")}</span>
        </div>
      </div>

      <p className={styles.description}>{t("description")}</p>

      <div className={styles.restrictionsBlock}>
        <h3 className={styles.subtitle}>{t("restrictionsTitle")}</h3>
        <p className={styles.description}>{t("restrictionsText")}</p>
      </div>

      <div className={styles.imageBlock}>
        <Image
          src="/images/metropolitan/image 286.png"
          alt="Metropolitan screen"
          width={488}
          height={280}
          className={styles.mainImage}
        />
      </div>
      <p className={styles.imageCaption}>{t("imageCaption")}</p>
    </section>
  );
}
