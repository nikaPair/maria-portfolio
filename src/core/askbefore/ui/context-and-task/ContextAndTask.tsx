"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ContextAndTask.module.css";

const memberPortalSlides = [
  {
    image: "/images/askbefore/3.png",
    caption: "Загрузка анализов",
  },
  {
    image: "/images/askbefore/4.png",
    caption: "Визуальное оформление",
  },
  {
    image: "/images/askbefore/5.png",
    caption: "Генерация QR-кода",
  },
  {
    image: "/images/askbefore/6.png",
    caption: "Страница обмена",
  },
  {
    image: "/images/askbefore/7.png",
    caption: "Уведомления",
  },
  {
    image: "/images/askbefore/8.png",
    caption: "Результат",
  },
];

export default function ContextAndTask() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memberPortalSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + memberPortalSlides.length) % memberPortalSlides.length,
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
    <section id="Контекст и задача" className={styles.section}>
      <h4 className={styles.title}>Контекст и задача</h4>

      <p className={styles.description}>
        Я присоединилась к команде на раннем этапе, когда начали отрисовывать
        базовый сценарий, и его доработка перешла в мою зону ответственности.
        Также мне поручили создание с нуля 4х крупных участков продукта и
        передача их в разработку. Я начала с проработки основного функционала,
        или по-другому Member Portal.
      </p>

      {/* Member Portal Section */}
      <div className={styles.portalSection}>
        <h3 className={styles.subtitle}>Member Portal</h3>
        <p className={styles.text}>
          Основной пользовательский сценарий включает в себя загрузку анализов,
          визуальное оформление и генерация QR-кода для безопасного доступа
          партнера к странице обмена.
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
            {memberPortalSlides.map((slide, index) => (
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
    </section>
  );
}
