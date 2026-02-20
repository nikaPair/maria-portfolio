"use client";
import { useState, useRef, useEffect } from "react";
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
    name: "AskBefore",
    description:
      "Сервис для безопасного обмена результатами тестов на ИППП",
    image: "/images/hashuhub/askbefore.png",
    href: "/askbefore",
    bgColor: "pink",
  },
  {
    id: 3,
    name: "Emoview",
    description:
      "Профессиональный трекер психического состояния для людей с БАР и ПРЛ",
    image: "/images/bar.png",
    href: "/emoview",
    bgColor: "blue",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % otherProjects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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

      </div>
    </section>
  );
}
