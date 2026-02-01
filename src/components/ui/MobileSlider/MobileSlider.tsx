"use client";

import { useState } from "react";
import Image from "next/image";
import { UIShot } from "@/types";
import styles from "./MobileSlider.module.css";

interface MobileSliderProps {
  slides: UIShot[];
  slideWidth?: number;
}

export default function MobileSlider({
  slides,
  slideWidth = 355,
}: MobileSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (diff < -50 && currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className={styles.sliderSlide}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={335}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
