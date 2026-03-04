"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./DevelopmentStart.module.css";

export default function DevelopmentStart() {
    const t = useTranslations("emoview.developmentStart");
    const tSidebar = useTranslations("emoview.sidebarItems");

    const insights = [
        t("insights.0"),
        t("insights.1"),
        t("insights.2"),
        t("insights.3"),
    ];

    return (
        <section id={tSidebar("development")} className={styles.section}>
            <div className={styles.content}>
                <h3 className={styles.title}>{t("title")}</h3>
                <p className={styles.text}>
                    {t("text")}
                </p>

                <div className={styles.insightsBox}>
                    <h4 className={styles.insightsTitle}>{t("insightsTitle")}</h4>
                    <ul className={styles.insightsList}>
                        {insights.map((insight, index) => (
                            <li key={index} className={styles.insightsItem}>
                                {insight}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
