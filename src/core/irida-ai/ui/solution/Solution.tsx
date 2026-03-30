"use client";
import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Solution.module.css";

export default function Solution() {
  const t = useTranslations("irida.solution");
  const navT = useTranslations("irida.sidebarItems");
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const cards = [
    {
      id: 1,
      image: "/images/irida/111.png",
      alt: t("scenarios.0"),
    },
    {
      id: 2,
      image: "/images/irida/222.png",
      alt: t("scenarios.1"),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
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
    <section id={navT("solution")} className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.title}>{t("title")}</h4>
        <p className={styles.description}>
          {t("description")}
        </p>
      </div>

      <div className={styles.content}>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        {/* Desktop Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <Image
                src={card.image}
                alt={card.alt}
                width={400}
                height={492}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
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
              {cards.map((card) => (
                <div key={card.id} className={styles.slide}>
                  <div className={styles.card}>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={400}
                      height={492}
                      className={styles.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.iconWrapper}>
            <span className={styles.emoji}>🤖</span>
          </div>
          <h5 className={styles.infoTitle}>
            {t("infoTitle")}
          </h5>
          <p className={styles.infoText}>
            {t("infoText")}
          </p>
        </div>

        <div className={styles.functionBlock}>
          <h4 className={styles.functionTitle}>{t("functionTitle")}</h4>
          <p className={styles.functionDescription}>
            {t("functionDescription")}
          </p>

          <div className={styles.functionImageCard}>
            <Image
              src="/images/irida/func.png"
              alt={t("functionTitle")}
              width={800}
              height={492}
              className={styles.functionImage}
            />
          </div>
          <p className={styles.functionCaption}>{t("functionCaption")}</p>
        </div>
      </div>
    </section>
  );
}