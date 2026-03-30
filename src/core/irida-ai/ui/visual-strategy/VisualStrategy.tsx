"use client";
import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./VisualStrategy.module.css";

const slides = [
    {
        id: 1,
        image: "/images/irida/featured_mockup.png",
    },
    {
        id: 2,
        image: "/images/irida/featured_mockup-1.png",
    },
    {
        id: 3,
        image: "/images/irida/featured_mockup-2.png",
    },
    {
        id: 4,
        image: "/images/irida/featured_mockup-3.png",
    },
    {
        id: 5,
        image: "/images/irida/featured_mockup-4.png",
    },
    {
        id: 6,
        image: "/images/irida/featured_mockup-5.png",
    },
    {
        id: 7,
        image: "/images/irida/featured_mockup-6.png",
    },
];

export default function VisualStrategy() {
    const t = useTranslations("irida.visualStrategy");
    const navT = useTranslations("irida.sidebarItems");
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <section id={navT("visualStrategy")} className={styles.section}>
            <div className={styles.header}>
                <h4 className={styles.title}>{t("title")}</h4>
                <p className={styles.description}>
                    {t("description")}
                </p>
            </div>

            <div className={styles.content}>
                {/* Desktop: grid layout */}
                <div className={styles.desktopGrid}>
                    <div className={styles.topRow}>
                        <div className={styles.topCard}>
                            <Image
                                src="/images/irida/1111.png"
                                alt="Irida AI screen"
                                width={600}
                                height={800}
                                className={styles.mockupImage}
                            />
                        </div>
                        <div className={styles.topCard}>
                            <Image
                                src="/images/irida/2222.png"
                                alt="Irida AI onboarding"
                                width={600}
                                height={800}
                                className={styles.mockupImage}
                            />
                        </div>
                    </div>

                    <div className={styles.bottomCard}>
                        <Image
                            src="/images/irida/3333.png"
                            alt="Irida AI desktop"
                            width={1200}
                            height={600}
                            className={styles.bottomMockupImage}
                        />
                    </div>
                </div>

                {/* Mobile: slider */}
                <div className={styles.sliderWrapper}>
                    <div
                        className={styles.slider}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={styles.sliderTrack}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className={styles.slide}>
                                    <Image
                                        src={slide.image}
                                        alt={`Slide ${slide.id}`}
                                        width={316}
                                        height={550}
                                        className={styles.slideImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className={styles.footnote}>
                    {t("footnote")}
                </p>
            </div>
        </section>
    );
}
