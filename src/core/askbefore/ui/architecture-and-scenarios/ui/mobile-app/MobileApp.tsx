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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slidesPerView = isMobile ? 1 : 2;
  const groups = [];
  for (let i = 0; i < mobileImages.length; i += slidesPerView) {
    groups.push(mobileImages.slice(i, i + slidesPerView));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groups.length) % groups.length);
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
            {groups.map((group, groupIndex) => (
              <div key={groupIndex} className={styles.slide}>
                {group.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`Mobile App экран ${groupIndex * 2 + imgIndex + 1}`}
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
