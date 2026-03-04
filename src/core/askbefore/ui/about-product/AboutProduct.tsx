"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  const t = useTranslations("askBefore.aboutProduct");
  const navT = useTranslations("askBefore.sidebarItems");

  const slides = [
    {
      image: "/images/askbefore/1.png",
      caption: t("userSiteCaption"),
    },
    {
      image: "/images/askbefore/2.png",
      caption: t("clinicSiteCaption"),
    },
  ];

  return (
    <section id={navT("about")} className={styles.section}>
      <Image
        src="/images/askbefore.svg"
        alt="AskBefore logo"
        width={133}
        height={24}
        className={styles.logo}
      />

      <div className={styles.infoGrid}>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("site")}</span>
          <a
            href="https://askbefore.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            askbefore.com
          </a>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("product")}</span>
          <span className={styles.infoValue}>{t("productValue")}</span>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>{t("geography")}</span>
          <span className={styles.infoValue}>{t("geographyValue")}</span>
        </div>
      </div>

      <p className={styles.description}>
        {t("description")}
      </p>

      <div className={styles.marketingBlock}>
        <h3 className={styles.subtitle}>{t("marketingTitle")}</h3>
        <div className={styles.marketingContent}>
          <p className={styles.text}>{t("marketingText")}</p>
          <ul className={styles.list}>
            <li>{t("b2cDescription")}</li>
            <li>{t("b2bDescription")}</li>
          </ul>
          <p className={styles.text}>{t("marketingConclusion")}</p>
        </div>
      </div>

      <div className={styles.sliderBlock}>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          className={styles.swiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideItem}>
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  width={800}
                  height={450}
                  className={styles.mainImage}
                />
                <p className={styles.imageCaption}>{slide.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
