"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./Solution.module.css";

const slidesRow1 = [
    { src: "/images/emoview/1-1.png", alt: "Screen 1" },
    { src: "/images/emoview/1-4.png", alt: "Screen 2" },
    { src: "/images/emoview/1-2.png", alt: "Screen 3" }
];

const slidesRow2 = [
    { src: "/images/emoview/1-3.png", alt: "Screen 4" },
    { src: "/images/emoview/1-5.png", alt: "Screen 5" },
    { src: "/images/emoview/1-6.png", alt: "Screen 6" },
    { src: "/images/emoview/1-7.png", alt: "Screen 7" }
];

const allSlides = [...slidesRow1, ...slidesRow2];

export default function Solution() {
    const t = useTranslations("emoview.solution");
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

    const solutions = [
        {
            title: t("cards.0.title"),
            text: t("cards.0.text"),
        },
        {
            title: t("cards.1.title"),
            text: t("cards.1.text"),
        },
        {
            title: t("cards.2.title"),
            text: t("cards.2.text"),
        },
        {
            title: t("cards.3.title"),
            text: t("cards.3.text"),
        },
    ];

    return (
        <section id={tSidebar("solution")} className={styles.section}>
            <div className={styles.content}>
                <div className={styles.solutionHeaderAndGrid}>
                    <h3 className={styles.title}>{t("title")}</h3>

                    <div className={styles.grid}>
                        {solutions.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <h4 className={styles.cardTitle}>{item.title}</h4>
                                <p className={styles.cardText}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.visualContainer}>
                    {isMobile ? (
                        <div className={styles.sliderContainer}>
                            <div className={styles.sliderTrack}>
                                {allSlides.map((slide, index) => (
                                    <div key={index} className={styles.slide}>
                                        <div className={styles.imageCard}>
                                            <Image
                                                src={slide.src}
                                                alt={slide.alt}
                                                width={210}
                                                height={440}
                                                className={styles.slideImage}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.desktopGrid}>
                            <div className={styles.topRow}>
                                <div className={styles.imageCardDark}>
                                    <Image src={slidesRow1[0].src} alt={slidesRow1[0].alt} width={150} height={310} className={styles.gridImage} />
                                </div>
                                <div className={styles.imageCardLightGroup}>
                                    <Image src={slidesRow1[1].src} alt={slidesRow1[1].alt} width={150} height={310} className={styles.gridImage} />
                                    <Image src={slidesRow1[2].src} alt={slidesRow1[2].alt} width={150} height={310} className={styles.gridImage} />
                                </div>
                            </div>
                            <div className={styles.bottomRow}>
                                {slidesRow2.map((slide, idx) => (
                                    <Image key={idx} src={slide.src} alt={slide.alt} width={340} height={680} className={styles.gridImage} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
