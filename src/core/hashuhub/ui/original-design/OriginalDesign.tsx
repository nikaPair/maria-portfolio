"use client";
import React, { useState, useRef } from "react";
import styles from "./OriginalDesign.module.css";
import Image from "next/image";

const cards = [
  {
    id: 1,
    text: "Главный дашборд со статусом устройств, показателями и событиями",
    image: "/images/hashuhub/1.png",
  },
  {
    id: 2,
    text: "Обзор системных характеристик, памяти и сетевых параметров",
    image: "/images/hashuhub/2.png",
  },
  {
    id: 3,
    text: "Настройки подключения к майнинг-пулу и рабочих узлов",
    image: "/images/hashuhub/3.png",
  },
  {
    id: 4,
    text: "Раздел системных логов для технической диагностики",
    image: "/images/hashuhub/4.png",
  },
  {
    id: 5,
    text: "Синхронизация системного времени через NTP-серверы",
    image: "/images/hashuhub/5.png",
  },
  {
    id: 6,
    text: "Страница авторизации с вводом логина и пароля администратора",
    image: "/images/hashuhub/6.png",
  },
];

export default function OriginalDesign() {
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
    <section id="Исходный дизайн" className={styles.section}>
      <h4 className={styles.title}>Исходный дизайн</h4>
      <div className={styles.description}>
        <p className={styles.text}>
          В производстве майнеров одним из главных лидеров является компания
          MicroBT. Во время конференции Bitcoin MENA компания представила новые
          поколения машин с революционными показателями и регулярно продолжает
          пробивать технический потолок мощности майнинга.
        </p>
        <p className={styles.text}>
          Я взяла интерфейс Whatsminer (модель асика от компании MicroBT) как
          исходный, ориентируясь на него как на стандарт индустрии. Он
          перегружен таблицами, слабо структурирован и почти не дает визуальной
          обратной связи. Ключевые метрики теряются среди второстепенных данных,
          из-за чего даже техникам сложно быстро оценить состояние оборудования.
          На мобильных устройствах интерфейс становится неудобным и медленным.
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
