"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./TeamWork.module.css";

export default function TeamWork() {
  const t = useTranslations("askBefore.teamWork");
  const navT = useTranslations("askBefore.sidebarItems");

  const teamMembers = [
    {
      avatar: "/images/askbefore/ksenya.png",
      description: t("members.ksenya"),
      link: "https://t.me/EsLichtne",
      linkText: "EsLichtne",
    },
    {
      avatar: "/images/askbefore/aynur.png",
      description: t("members.aynur"),
      link: "https://t.me/product_designer_BA",
      linkText: "product_designer_BA",
    },
  ];

  return (
    <section id={navT("teamWork")} className={styles.section}>
      <div className={styles.textBlock}>
        <h4 className={styles.title}>{t("title")}</h4>
        <p className={styles.description}>
          {t("description")}
        </p>
      </div>

      {/* Team Cards */}
      <div className={styles.cardsWrapper}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={member.avatar}
              alt=""
              width={56}
              height={56}
              className={styles.avatar}
            />
            <p className={styles.cardText}>{member.description}</p>
            <Link
              href={member.link}
              target="_blank"
              className={styles.cardLink}
            >
              {member.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
