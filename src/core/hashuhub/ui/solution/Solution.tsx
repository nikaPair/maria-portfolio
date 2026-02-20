"use client";
import React, { useState, useRef } from "react";
import styles from "./Solution.module.css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    caption: "Dashboard",
    image: "/images/hashuhub/11.png",
  },
  {
    id: 2,
    caption: "Авторизация",
    image: "/images/hashuhub/22.png",
  },
  {
    id: 3,
    caption: "Системный статус",
    image: "/images/hashuhub/33.png",
  },
  {
    id: 4,
    caption: "Конфигурация пула",
    image: "/images/hashuhub/44.png",
  },
  {
    id: 5,
    caption: "Логи",
    image: "/images/hashuhub/55.png",
  },
];

export default function Solution() {
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
    <section id="Решение" className={styles.section}>
      <h4 className={styles.title}>Решение</h4>
      <p className={styles.description}>
        Мне было важно сделать мониторинг понятным с первого взгляда. Для этого
        я упростила доступ к ключевым показателям, усилила визуальную иерархию и
        адаптировала интерфейс под работу с тем устройствами. В основе работы
        лежит разделение функционала, увеличение зон взаимодействия и
        группировка информации.
      </p>

      {/* Desktop Grid */}
      <div className={styles.grid}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slideWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={slide.image}
                alt={slide.caption}
                width={1000}
                height={600}
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
                    src={slide.image}
                    alt={slide.caption}
                    width={1000}
                    height={600}
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
