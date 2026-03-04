"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  const t = useTranslations("irida.aboutProduct");
  const navT = useTranslations("irida.sidebarItems");

  return (
    <section id={navT("idea")} className={styles.section}>
      <div className={styles.topBlock}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoIcon}>
              <Image
                src="/images/logo-irida.png"
                alt="Irida AI Logo"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.title}>Irida AI</h3>
          </div>
        </div>
        <div className={styles.textBlock}>
          <p className={styles.description}>
            {t("description")}
          </p>
        </div>
      </div>

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
        <div className={styles.imageCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/irida/idea.png"
              alt="Irida AI"
              width={304}
              height={352}
              className={styles.ideaImage}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
