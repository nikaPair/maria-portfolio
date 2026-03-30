"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./BusinessPositioning.module.css";

const businessSlides = [
  {
    image: "/images/askbefore/bussines-1.png",
  },
  {
    image: "/images/askbefore/bussines-2.png",
  },
  {
    image: "/images/askbefore/bussines-3.png",
  },
  {
    image: "/images/askbefore/bussines-4.png",
  },
];

export default function BusinessPositioning() {
  const t = useTranslations("askBefore.architectureAndScenarios.businessPositioning");
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % businessSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + businessSlides.length) % businessSlides.length,
    );
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
    <div className={styles.wrapper}>
      {/* Business Positioning Section */}
      <div className={styles.businessSection}>
        <h5 className={styles.subtitle}>{t("subtitle")}</h5>
        <div className={styles.descriptionBlock}>
          <p className={styles.description}>
            {t("description1")}
          </p>
          <p className={styles.description}>
            {t("description2")}
          </p>
        </div>
      </div>

      {/* Business Slider */}
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
            {businessSlides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={500}
                  className={styles.slideImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <Image
            src="/icons/chevron-right.svg"
            alt=""
            width={20}
            height={20}
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <Image src="/icons/chevron-right.svg" alt="" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
