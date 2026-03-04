"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ClinicsPortal.module.css";

export default function ClinicsPortal() {
  const t = useTranslations("askBefore.architectureAndScenarios.clinicsPortal");

  return (
    <div className={styles.wrapper}>
      {/* Clinics Portal Section */}
      <div className={styles.clinicsSection}>
        <h5 className={styles.subtitle}>{t("subtitle")}</h5>
        <p className={styles.description}>
          {t("description")}
        </p>
      </div>

      {/* Clinics Image */}
      <div className={styles.clinicsImageWrapper}>
        <Image
          src="/images/askbefore/clinics.png"
          alt={t("subtitle")}
          width={800}
          height={500}
          className={styles.clinicsImage}
        />
      </div>
      <p className={styles.restrictedCaption}>
        {t("restricted")}
      </p>
    </div>
  );
}
