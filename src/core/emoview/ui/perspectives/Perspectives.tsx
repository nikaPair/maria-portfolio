"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Perspectives.module.css";

export default function Perspectives() {
    const t = useTranslations("emoview.perspectives");
    const tSidebar = useTranslations("emoview.sidebarItems");

    return (
        <section id={tSidebar("perspectives")} className={styles.section}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <h3 className={styles.title}>{t("title")}</h3>
                    <p className={styles.text}>
                        {t("text1")}
                    </p>
                </div>

                <div className={styles.highlightBox}>
                    <div className={styles.highlightContent}>
                        <span className={styles.highlightIcon}>👨🏻‍💻</span>
                        <p className={styles.highlightText}>
                            {t("highlightText")}
                        </p>
                    </div>
                </div>

                <div className={styles.listCard}>
                    <h4 className={styles.listTitle}>{t("listTitle")}</h4>
                    <ul className={styles.listMenu}>
                        <li className={styles.listItem}>
                            {t("list.0")}
                        </li>
                        <li className={styles.listItem}>
                            {t("list.1")}
                        </li>
                        <li className={styles.listItem}>
                            {t("list.2")}
                        </li>
                    </ul>
                </div>

                <p className={styles.text}>
                    {t("text2")}
                </p>
            </div>
        </section>
    );
}
