"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./MobileApp.module.css";

const mobileImages = [
  "/images/askbefore/mobile-1.png",
  "/images/askbefore/mobile-2.png",
  "/images/askbefore/mobile-3.png",
  "/images/askbefore/mobile-4.png",
];

export default function MobileApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Определяем количество слайдов в зависимости от устройства
  const slidesPerView = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(mobileImages.length / slidesPerView);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
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

  // Группируем изображения по слайдам
  const getSlideImages = () => {
    const slides = [];
    for (let i = 0; i < mobileImages.length; i += slidesPerView) {
      slides.push(mobileImages.slice(i, i + slidesPerView));
    }
    return slides;
  };

  const slides = getSlideImages();

  return (
    <div className={styles.wrapper}>
      {/* Mobile App Section */}
      <div className={styles.section}>
        <h5 className={styles.subtitle}>Mobile App</h5>
        <p className={styles.description}>
          Также мы сделали адаптации веб-версии под нативные гайдлайны iOS и
          Android, чтобы сервис был удобен на мобильных устройствах.
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
            {slides.map((slideImages, slideIndex) => (
              <div key={slideIndex} className={styles.slide}>
                {slideImages.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`Mobile App экран ${slideIndex * slidesPerView + imgIndex + 1}`}
                    width={387}
                    height={400}
                    className={styles.slideImage}
                  />
                ))}
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
