"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { OtherProjectSlide } from "@/shared/lib/other-projects";
import styles from "./OtherProjects.module.css";

const BG_CLASS: Record<OtherProjectSlide["bgColor"], string> = {
  orange: styles.orange,
  blue: styles.blue,
  pink: styles.pink,
};

export type OtherProjectsProps = {
  slides: OtherProjectSlide[];
};

export function OtherProjects({ slides }: OtherProjectsProps) {
  const tCommon = useTranslations("common");
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slideCount = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
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

  useEffect(() => {
    if (slideCount === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 3000);

    return () => clearInterval(timer);
  }, [slideCount]);

  if (slideCount === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h4 className={styles.title}>{tCommon("others")}</h4>

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
            {slides.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className={`${styles.slide} ${BG_CLASS[project.bgColor]}`}
              >
                <h5 className={styles.projectName}>{project.name}</h5>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={500}
                    className={styles.projectImage}
                  />
                </div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <Image
            src="/icons/arrow-left.svg"
            alt=""
            width={44}
            height={44}
          />
        </button>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <Image
            src="/icons/chevron-right.svg"
            alt=""
            width={44}
            height={44}
          />
        </button>
      </div>
    </section>
  );
}
