"use client";
import React, { useState, useRef } from "react";
import styles from "./Research.module.css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/irida/1.png",
    mobileImage: "/images/irida/11.png",
    caption: "DxGPT: результат генерации",
  },
  {
    id: 2,
    image: "/images/irida/2.png",
    mobileImage: "/images/irida/22.png",
    caption: "DxGPT: ввод промта",
  },
  {
    id: 3,
    image: "/images/irida/3.png",
    mobileImage: "/images/irida/33.png",
    caption: "DxGPT: уточнение ответа",
  },
];

export default function Research() {
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
    <section id="Исследование и инсайты" className={styles.section}>
      <div className={styles.textBlock}>
        <h4 className={styles.title}>Исследование и инсайты</h4>
        <p className={styles.description}>
          Мне помогли беседы с двумя врачами, опыт работы с DxGPT и анализ существующих AI-сервисов.
          Для начала работы я выделила самые слабые стороны DxGPT и приступила к редизайну.
        </p>
      </div>

      {/* Desktop Grid (Vertical Stack) */}
      <div className={styles.grid}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slideWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={slide.image}
                alt={''}
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
          <h4 className={styles.problemsTitle}>Проблемы</h4>
        </div>
        <ul className={styles.problemsList}>
          <li>Флоу DxGPT разительно отличается от других AI-сервисов и нарушает установленный опыт взаимодействия;</li>
          <li>Все функции находятся на одном уровне, что нарушает сценарии использования и скрывает ценный расширенный режим;</li>
          <li>Визуальный стиль элементов может не соответствовать их функции, ошибка в базовой семантике интерфейса;</li>
          <li>Многословный нейминг элементов превращается в текстовый шум, который пользователь плохо воспринимает;</li>
          <li>Нельзя использовать расширенный режим при входе, он становится доступен после ввода первого промта.</li>
        </ul>
      </div>
    </section>
  );
}
