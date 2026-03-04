"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./OtherProjects.module.css";

export default function OtherProjects() {
  const tCommon = useTranslations("common");
  const tPetProjects = useTranslations("petProjects.items");

  const otherProjects = [
    {
      id: 1,
      name: "Irida-AI",
      description: tPetProjects("iridaAi.description"),
      image: "/images/chat.png",
      href: "/irida-ai",
      bgColor: "orange",
    },
    {
      id: 2,
      name: "Emoview",
      description: tPetProjects("emoview.description"),
      image: "/images/bar.png",
      href: "/emoview",
      bgColor: "blue",
    },
    {
      id: 3,
      name: "HashuHub",
      description: tPetProjects("hashuhub.description"),
      image: "/images/asic.png",
      href: "/hashuhub",
      bgColor: "purple",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + otherProjects.length) % otherProjects.length,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % otherProjects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [otherProjects.length]);

  return (
    <section className={styles.section}>
      <h4 className={styles.title}>{tCommon("others")}</h4>

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
            {otherProjects.map((project) => (
              <Link
                // @ts-ignore
                key={project.id}
                href={project.href}
                className={`${styles.slide} ${styles[project.bgColor]}`}
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
