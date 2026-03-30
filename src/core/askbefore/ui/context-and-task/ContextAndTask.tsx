"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./ContextAndTask.module.css";

export default function ContextAndTask() {
  const t = useTranslations("askBefore.contextAndTask");
  const navT = useTranslations("askBefore.sidebarItems");

  const slides = [
    {
      image: "/images/askbefore/1-1.png",
      caption: t("slides.upload"),
    },
    {
      image: "/images/askbefore/2-2.png",
      caption: t("slides.visual"),
    },
    {
      image: "/images/askbefore/3-3.png",
      caption: t("slides.qr"),
    },
    {
      image: "/images/askbefore/4-4.png",
      caption: t("slides.exchange"),
    },
    {
      image: "/images/askbefore/5-5.png",
      caption: t("slides.notifications"),
    },
    {
      image: "/images/askbefore/6-6.png",
      caption: t("slides.result"),
    },
  ];

  return (
    <section id={navT("context")} className={styles.section}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.description}>{t("description")}</p>
      </div>

      <div className={styles.block}>
        <div className={styles.portalSection}>
          <h3 className={styles.subtitle}>{t("subtitle")}</h3>
          <p className={styles.text}>{t("text")}</p>
        </div>

        {/* Desktop Grid */}
        <div className={styles.desktopGrid}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.gridItem}>
              <p className={styles.gridItemTitle}>{slide.caption}</p>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  width={400}
                  height={180}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className={styles.mobileSlider}>
          <Swiper spaceBetween={16} slidesPerView={1}>
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={styles.slideItem}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={slide.image}
                      alt={slide.caption}
                      width={400}
                      height={180}
                      className={styles.image}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
