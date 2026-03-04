"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./OtherProjects.module.css";

export default function OtherProjects() {
    const tCommon = useTranslations("common");
    const tPetProjects = useTranslations("petProjects.items");
    const tCases = useTranslations("cases.items");

    const otherProjects = [
        {
            id: 1,
            name: "Irida-AI",
            description: tPetProjects("iridaAi.description"),
            image: "/images/chat.png",
            href: "/irida-ai",
            bgColor: "blue",
        },
        {
            id: 2,
            name: "AskBefore",
            description: tCases("askbefore.description"),
            image: "/images/hashuhub/askbefore.png",
            href: "/askbefore",
            bgColor: "pink",
        },
        {
            id: 3,
            name: "HashuHub",
            description: tPetProjects("hashuhub.description"),
            image: "/images/asic.png",
            href: "/hashuhub",
            bgColor: "orange",
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

            </div>
        </section>
    );
}
