"use client";
import React, { useState, useRef } from "react";
import styles from "./Solution.module.css";
import Image from "next/image";

const cards = [
  {
    id: 1,
    image: "/images/irida/111.png",
    alt: "Быстрый режим",
  },
  {
    id: 2,
    image: "/images/irida/222.png",
    alt: "Расширенный режим",
  },
];

export default function Solution() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
    <section id="Решение" className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.title}>Решение</h4>
        <p className={styles.description}>
          DxGPT часто нужен в моменте, на приеме или между пациентами. В таких
          сценариях врач работает с телефоном, поэтому я выбрала подход mobile first.
        </p>
      </div>

      <div className={styles.content}>
        <p className={styles.subtitle}>2 основных сценария использования:</p>

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
            В расширенном режиме работы сервиса пользователь не пишет промпт вручную. 
            Он заполняет анкету, а система сама формирует запрос к модели.
          </h5>
          <p className={styles.infoText}>
            Для изменения результата и отправки нового промта достаточно отредактировать 
            уже заполненную анкету.
          </p>
        </div>

        <div className={styles.functionBlock}>
          <h4 className={styles.functionTitle}>Общая функция</h4>
          <p className={styles.functionDescription}>
            Независимо от выбранного режима у пользователя есть возможность задать уточняющие вопросы
            к одной гипотезе. Для этого нужно перейти по нажатию на заголовок гипотезы и откроется экран с
            готовыми вопросами; они же и являются промптами для модели.
          </p>
          
          <div className={styles.functionImageCard}>
            <Image
              src="/images/irida/func.png"
              alt="Уточняющие вопросы к гипотезе"
              width={800}
              height={492}
              className={styles.functionImage}
            />
          </div>
          <p className={styles.functionCaption}>Ответы генерируются сразу, без переходов между экранами.</p>
        </div>
      </div>
    </section>
  );
}