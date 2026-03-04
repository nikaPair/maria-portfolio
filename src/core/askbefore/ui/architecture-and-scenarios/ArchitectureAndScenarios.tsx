"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ArchitectureAndScenarios.module.css";
import BusinessPositioning from "./ui/business-positioning/BusinessPositioning";
import ClinicsPortal from "./ui/clinics-portal/ClinicsPortal";
import InfluencersPortal from "./ui/influencers-portal/InfluencersPortal";
import MobileApp from "./ui/mobile-app/MobileApp";

export default function ArchitectureAndScenarios() {
  const t = useTranslations("askBefore.architectureAndScenarios");
  const navT = useTranslations("askBefore.sidebarItems");

  return (
    <section id={navT("architecture")} className={styles.section}>
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
        <span className={styles.starIcon}>⭐️</span>
        <p className={styles.highlightText}>
          {t("highlightText")}
        </p>
      </div>

      {/* BPMN Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/askbefore/architecture.png"
          alt={t("imageCaption")}
          width={1200}
          height={600}
          className={styles.image}
        />
        <p className={styles.imageCaption}>{t("imageCaption")}</p>
      </div>

      {/* Business Positioning */}
      <BusinessPositioning />

      {/* Clinics Portal */}
      <ClinicsPortal />

      {/* Influencers Portal */}
      <InfluencersPortal />

      {/* Mobile App */}
      <MobileApp />
    </section>
  );
}
