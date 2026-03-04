"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
    const t = useTranslations("emoview.aboutProduct");
    const tSidebar = useTranslations("emoview.sidebarItems");

    return (
        <section id={tSidebar("idea")} className={styles.section}>
            <div className={styles.topBlock}>
                <div className={styles.header}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoIcon}>
                            <Image
                                src="/images/emoview/logo.svg"
                                alt="Emoview Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h3 className={styles.title}>Emoview</h3>
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
                    <p className={styles.contextText}>
                        {t("contextText3")}
                    </p>
                </div>
                <div className={styles.imageCard}>
                    <Image
                        src="/images/emoview/idea.png"
                        alt="eMoods Bipolar Mood Tracker"
                        width={760}
                        height={760}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
