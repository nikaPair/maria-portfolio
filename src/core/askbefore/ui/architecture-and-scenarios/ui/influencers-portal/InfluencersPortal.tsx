"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./InfluencersPortal.module.css";

export default function InfluencersPortal() {
  const t = useTranslations("askBefore.architectureAndScenarios.influencersPortal");

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{t("title")}</h5>

      {/* Influencers Portal Section */}
      <div className={styles.portalSection}>
        <h6 className={styles.subtitle}>{t("subtitle")}</h6>
        <p className={styles.description}>
          {t("description")}
        </p>
      </div>

      {/* Influencers Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/askbefore/influencers.png"
          alt={t("subtitle")}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>
      <p className={styles.restrictedCaption}>
        {t("restricted")}
      </p>
    </div>
  );
}
