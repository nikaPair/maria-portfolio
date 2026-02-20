"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OtherProjects.module.css";

const otherProjects = [
  {
    id: 1,
    name: "Irida-AI",
    description:
      "Медицинский AI-ассистент на технической базе некоммерческого проекта DxGPT",
    image: "/images/chat.png",
    href: "/irida-ai",
    bgColor: "orange",
  },
  {
    id: 2,
    name: "Emoview",
    description:
      "Профессиональный трекер психического состояния для людей с БАР и ПРЛ",
    image: "/images/bar.png",
    href: "/emoview",
    bgColor: "blue",
  },
  {
    id: 3,
    name: "HashuHub",
    description:
      "Унифицированная платформа для мониторинга работы ASIC-майнеров",
    image: "/images/asic.png",
    href: "/hashuhub",
    bgColor: "purple",
  },
];

export default function OtherProjects() {
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

  return (
    <section className={styles.section}>
      <h4 className={styles.title}>Другие проекты</h4>

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
