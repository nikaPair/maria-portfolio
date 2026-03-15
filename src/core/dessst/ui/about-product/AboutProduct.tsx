"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  const t = useTranslations("dessst");

  return (
    <section className={styles.section}>
      <Image
        src="/images/dessst.svg"
        alt="Dessst logo"
        width={129}
        height={24}
        className={styles.logo}
      />

      <div className={styles.infoGrid}>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("site")}</span>
          <a
            href="https://dessst.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            dessst.ru
          </a>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("product")}</span>
          <span className={styles.infoValue}>EdTech</span>
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
          src="/images/dest/image 285.png"
          alt="Dessst screen"
          width={800}
          height={450}
          className={styles.mainImage}
        />
      </div>
      <p className={styles.imageCaption}>{t("imageCaption")}</p>
    </section>
  );
}
