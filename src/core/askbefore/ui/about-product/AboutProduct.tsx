"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./AboutProduct.module.css";
import Link from "next/link";

const slides = [
  {
    image: "/images/askbefore/1.png",
    caption: "Сайт для пользователей",
  },
  {
    image: "/images/askbefore/2.png",
    caption: "Сайт для клиник",
  },
];

export default function AboutProduct() {
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
    <section id="О продукте" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <Image
          src="/images/askbefore.svg"
          alt="AskBefore"
          width={180}
          height={32}
          className={styles.logo}
        />
        <div className={styles.tags}>
          <div className={styles.tag}>
            <span className={styles.tagLabel}>Сайт</span>
            <Link
              href={"https://askbefore.eu"}
              target="_blank"
              className={styles.tagValue}
            >
              askbefore.eu
            </Link>
          </div>
          <div className={styles.tag}>
            <span className={styles.tagLabel}>Продукт</span>
            <span className={styles.tagValue}>MedTech стартап</span>
          </div>
          <div className={styles.tag}>
            <span className={styles.tagLabel}>География</span>
            <span className={styles.tagValue}>Берлин, Германия</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={styles.description}>
        AskBefore — это сервис для безопасного обмена результатами тестов на
        ИППП. Пользователь может отправить партнеру подтверждённый статус
        здоровья в формате цифровой валентинки. Все данные при этом защищены
        сквозным шифрованием на базе блокчейн.
      </p>

      {/* Marketing Websites */}
      <div className={styles.marketingSection}>
        <h3 className={styles.subtitle}>Marketing Websites</h3>
        <p className={styles.text}>У компании есть B2C и B2B направления:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            B2C это пользователи, которые приходят в продукт за обменом
            медицинскими данными с партнером;
          </li>
          <li className={styles.listItem}>
            B2B это клиники-партнеры, которые размещают на платформе предложение
            о лабораторных медицинских исследованиях.
          </li>
        </ul>
        <p className={styles.text}>
          Для каждой из аудиторий разработан отдельный сайт.
        </p>
      </div>

      {/* Slider */}
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
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <Image
                  src={slide.image}
                  alt={slide.caption}
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

      {/* Caption */}
      <p className={styles.caption}>{slides[currentSlide].caption}</p>
    </section>
  );
}
