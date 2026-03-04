"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate } from "motion";
import { useTranslations } from "next-intl";
import { SOCIAL_LINKS } from "@/constants";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const t = useTranslations("hero");

  useEffect(() => {
    if (heroRef.current) {
      animate(
        heroRef.current,
        { y: [50, 0], opacity: [0, 1] },
        { duration: 0.6, delay: 0.2 },
      );
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.container}>
        <Image
          src="/images/tg_profile.png"
          alt="Telegram screen"
          width={300}
          height={600}
          className={styles.heroImage}
          priority
        />

        <div className={styles.heroTextContainer}>
          <div className={styles.heroText}>
            <h2>
              {t("greeting")}
              <br />{t("role")}
            </h2>
            <p>{t("description")}</p>
            <p>
              {t("caseLinkPrefix")}{" "}
              <a href="">{t("caseLinkText")}</a>
            </p>
          </div>

          <div className={styles.heroBottom}>
            <StatsCard />
            <CVCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard() {
  const t = useTranslations("hero");

  return (
    <div className={styles.countersContainer}>
      <div className={styles.counter}>
        <b>{t("yearsDesign")}</b>
        <span>{t("inDesign")}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.counter}>
        <b>{t("yearsDigital")}</b>
        <span>{t("inDigital")}</span>
      </div>
    </div>
  );
}

function CVCard() {
  const t = useTranslations("hero");

  return (
    <div className={styles.cvContainer}>
      <Image
        className={styles.cvEmoji}
        src="/images/emoji.png"
        alt="emoji"
        width={44}
        height={44}
      />
      <a className={styles.cvButton} href={t("resumePath")} download>
        <Image
          src="/images/tablet/download.svg"
          alt="download"
          width={20}
          height={20}
        />
        {t("resumeFile")}
      </a>
    </div>
  );
}
