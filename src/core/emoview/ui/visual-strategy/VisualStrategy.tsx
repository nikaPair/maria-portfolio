"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./VisualStrategy.module.css";

const allSlides = [
    { src: "/images/emoview/2-1.png", alt: "Emoview screen 2-1" },
    { src: "/images/emoview/2-2.png", alt: "Emoview screen 2-2" },
    { src: "/images/emoview/2-3.png", alt: "Emoview screen 2-3" },
    { src: "/images/emoview/2-5.png", alt: "Emoview screen 2-5" },
    { src: "/images/emoview/2-6.png", alt: "Emoview screen 2-6" },
    { src: "/images/emoview/2-7.png", alt: "Emoview screen 2-7" },
    { src: "/images/emoview/2-8.png", alt: "Emoview screen 2-8" },
    { src: "/images/emoview/2-9.png", alt: "Emoview screen 2-9" },
    { src: "/images/emoview/2-10.png", alt: "Emoview screen 2-10" }
];

export default function VisualStrategy() {
    const t = useTranslations("emoview.visualStrategy");
    const tSidebar = useTranslations("emoview.sidebarItems");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id={tSidebar("visualStrategy")} className={styles.section}>
            <div className={styles.content}>
                <h3 className={styles.title}>{t("title")}</h3>
                <div className={styles.texts}>
                    <p className={styles.text}>
                        {t("text1")}
                    </p>
                    <p className={styles.text}>
                        {t("text2")}
                    </p>
                </div>

                <div className={styles.visualGrid}>
                    {isMobile ? (
                        <div className={styles.sliderContainer}>
                            <div className={styles.sliderTrack}>
                                {allSlides.map((slide, index) => (
                                    <div key={index} className={styles.slide}>
                                        <div className={styles.imageCardMobile}>
                                            <Image
                                                src={slide.src}
                                                alt={slide.alt}
                                                width={210}
                                                height={440}
                                                className={styles.phoneImage}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={styles.rowTwoCols}>
                                <div className={styles.imageCard}>
                                    <Image src="/images/emoview/2-1.png" alt="Emoview screen 2-1" width={150} height={310} className={styles.phoneImage} />
                                    <Image src="/images/emoview/2-2.png" alt="Emoview screen 2-2" width={150} height={310} className={styles.phoneImage} />
                                </div>
                                <div className={styles.imageCard}>
                                    <Image src="/images/emoview/2-3.png" alt="Emoview screen 2-3" width={150} height={310} className={styles.phoneImage} />
                                    <Image src="/images/emoview/2-4.png" alt="Emoview screen 2-4" width={150} height={310} className={`${styles.phoneImage} ${styles.hideOnTablet}`} />
                                </div>
                            </div>
                            <div className={styles.rowUneven}>
                                <div className={styles.imageCard}>
                                    <Image src="/images/emoview/2-5.png" alt="Emoview screen 2-5" width={150} height={310} className={styles.phoneImage} />
                                </div>
                                <div className={styles.imageCard}>
                                    <Image src="/images/emoview/2-6.png" alt="Emoview screen 2-6" width={150} height={310} className={styles.phoneImage} />
                                    <Image src="/images/emoview/2-7.png" alt="Emoview screen 2-7" width={150} height={310} className={styles.phoneImage} />
                                </div>
                            </div>
                            <div className={styles.rowSingle}>
                                <div className={styles.imageCard}>
                                    <Image src="/images/emoview/2-8.png" alt="Emoview screen 2-8" width={150} height={310} className={styles.phoneImage} />
                                    <Image src="/images/emoview/2-9.png" alt="Emoview screen 2-9" width={150} height={310} className={styles.phoneImage} />
                                    <Image src="/images/emoview/2-10.png" alt="Emoview screen 2-10" width={150} height={310} className={styles.phoneImage} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
