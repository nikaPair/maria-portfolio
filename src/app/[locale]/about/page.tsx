"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <main>
        <section className={styles.about}>
          <div className={styles.wrapper}>
            <ProfileHeader />
            <Biography />
            <WorkApproach />
            <UXUISection />
          </div>
        </section>
      </main>
      {/* @ts-ignore */}
      <Footer showSubtitle />
    </>
  );
}

function ProfileHeader() {
  const t = useTranslations("about");
  return (
    <div className={styles.firstBlock}>
      <Image
        src="/images/portrait.png"
        alt="portrait"
        width={280}
        height={280}
        className={styles.portrait}
      />
      <div className={styles.nameContainer}>
        <Image
          src="/images/quote.png"
          alt="quote"
          width={24}
          height={24}
          className={styles.quote}
        />
        <h3 className={styles.name}>{t("name")}</h3>
        <p className={styles.description}>
          {t("tagline")}
        </p>
      </div>
    </div>
  );
}

function Biography() {
  const t = useTranslations("about");
  return (
    <div className={styles.secondBlock}>
      <p className={styles.secondBlockText}>
        {t("biography")}
        <br />
        <br />
        {t("biographyContinued")}
      </p>
    </div>
  );
}

function WorkApproach() {
  const t = useTranslations("about");
  return (
    <div className={styles.thirdBlock}>
      <h3 className={styles.thirdBlockTitle}>{t("workApproachTitle")}</h3>
      <p className={styles.thirdBlockText}>
        {t("workApproachText")}
      </p>
    </div>
  );
}

function UXUISection() {
  const t = useTranslations("about");
  const sections = [
    {
      title: "UX",
      text: t("uxText"),
    },
    {
      title: "UI",
      text: t("uiText"),
    },
  ];

  return (
    <div className={styles.fourthBlock}>
      {sections.map((section) => (
        <div key={section.title} className={styles.U}>
          <h3 className={styles.fourthBlockTitle}>{section.title}</h3>
          <p className={styles.fourthBlockText}>{section.text}</p>
        </div>
      ))}
    </div>
  );
}


