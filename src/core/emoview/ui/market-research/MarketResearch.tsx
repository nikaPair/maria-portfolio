"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./MarketResearch.module.css";

const competitors = [
    { src: "/images/emoview/thera.svg", name: "Thera" },
    { src: "/images/emoview/feeltracker.svg", name: "Feeltracker" },
    { src: "/images/emoview/tracker.svg", name: "Mind Tracker" },
    { src: "/images/emoview/moodi.svg", name: "Moodi" },
    { src: "/images/emoview/moodnotes.svg", name: "Moodnotes" },
    { src: "/images/emoview/vos.svg", name: "VOS" },
    { src: "/images/emoview/daylio.svg", name: "Daylio" },
];

export default function MarketResearch() {
    const t = useTranslations("emoview.marketResearch");
    const tSidebar = useTranslations("emoview.sidebarItems");

    return (
        <section id={tSidebar("market")} className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <h3 className={styles.title}>{t("title")}</h3>
                    <p className={styles.text}>
                        {t("text1")}
                    </p>
                </div>

                <div className={styles.competitorsBox}>
                    <div className={styles.competitorsList}>
                        {competitors.map((item, index) => (
                            <div key={index} className={styles.competitorItem}>
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className={styles.competitorIcon}
                                />
                                <span className={styles.competitorName}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.texts}>
                    <p className={styles.text}>
                        {t("text2")}
                    </p>
                    <p className={styles.text}>
                        {t("text3")}
                    </p>
                </div>

                <div className={styles.bipolarTrackerBox}>
                    <div className={styles.bipolarLeft}>
                        <div className={styles.bipolarHeader}>
                            <Image
                                src="/images/emoview/freepik.svg"
                                alt="Bipolar Mood Tracker"
                                width={56}
                                height={56}
                                className={styles.bipolarIcon}
                            />
                            <h4 className={styles.bipolarTitle}>
                                {t("bipolarTitle")}
                            </h4>
                        </div>
                        <div className={styles.bipolarTexts}>
                            <p className={styles.bipolarText}>
                                {t("bipolarText1")}
                            </p>
                            <div className={styles.bipolarMobileImage}>
                                <Image
                                    src="/images/emoview/emoview_competitor_paywall.png"
                                    alt="Emoview competitor app"
                                    width={153}
                                    height={280}
                                    className={styles.phoneImage}
                                />
                            </div>
                            <p className={styles.bipolarText}>
                                {t("bipolarText2")}
                            </p>
                        </div>
                    </div>
                    <div className={styles.bipolarRight}>
                        <Image
                            src="/images/emoview/emoview_competitor_paywall.png"
                            alt="Emoview competitor app"
                            width={153}
                            height={280}
                            className={styles.phoneImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
