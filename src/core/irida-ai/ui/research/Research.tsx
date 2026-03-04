"use client";
import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Research.module.css";

export default function Research() {
  const t = useTranslations("irida.research");
  const navT = useTranslations("irida.sidebarItems");
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      image: "/images/irida/1.png",
      mobileImage: "/images/irida/11.png",
      caption: t("slides.0"),
    },
    {
      id: 2,
      image: "/images/irida/2.png",
      mobileImage: "/images/irida/22.png",
      caption: t("slides.1"),
    },
    {
      id: 3,
      image: "/images/irida/3.png",
      mobileImage: "/images/irida/33.png",
      caption: t("slides.2"),
    },
  ];

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
    <section id={navT("research")} className={styles.section}>
      <div className={styles.textBlock}>
        <h4 className={styles.title}>{t("title")}</h4>
        <p className={styles.description}>
          {t("description")}
        </p>
      </div>

      {/* Desktop Grid (Vertical Stack) */}
      <div className={styles.grid}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slideWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={slide.image}
                alt={slide.caption}
                width={800}
                height={500}
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
            {slides.map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <div className={styles.imageContainer}>
                  <Image
                    src={slide.mobileImage}
                    alt={slide.caption}
                    width={316}
                    height={256}
                    className={styles.mobileImage}
                  />
                </div>
                <p className={styles.caption}>{slide.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className={styles.problemsBlock}>
        <div className={styles.problemsHeader}>
          <span className={styles.searchIcon}>🔍</span>
          <h4 className={styles.problemsTitle}>{t("problemsTitle")}</h4>
        </div>
        <ul className={styles.problemsList}>
          <li>{t("problems.0")}</li>
          <li>{t("problems.1")}</li>
          <li>{t("problems.2")}</li>
          <li>{t("problems.3")}</li>
          <li>{t("problems.4")}</li>
        </ul>
      </div>
    </section>
  );
}
