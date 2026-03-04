"use client";
import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./OriginalDesign.module.css";

export default function OriginalDesign() {
  const t = useTranslations("hashuhub.originalDesign");
  const navT = useTranslations("hashuhub.sidebarItems");
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const cards = [
    { id: 1, image: "/images/hashuhub/1.png", text: t("cards.0") },
    { id: 2, image: "/images/hashuhub/2.png", text: t("cards.1") },
    { id: 3, image: "/images/hashuhub/3.png", text: t("cards.2") },
    { id: 4, image: "/images/hashuhub/4.png", text: t("cards.3") },
    { id: 5, image: "/images/hashuhub/5.png", text: t("cards.4") },
    { id: 6, image: "/images/hashuhub/6.png", text: t("cards.5") },
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
    <section id={navT("originalDesign")} className={styles.section}>
      <h4 className={styles.title}>{t("title")}</h4>
      <div className={styles.description}>
        <p className={styles.text}>
          {t("description1")}
        </p>
        <p className={styles.text}>
          {t("description2")}
        </p>
      </div>

      {/* Desktop Grid */}
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.stepNumber}>{card.id}</div>
            <p className={styles.cardText}>{card.text}</p>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
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
                <div className={styles.stepNumber}>{card.id}</div>
                <p className={styles.cardText}>{card.text}</p>
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.image}
                    alt=""
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
