"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate } from "motion";
import { SOCIAL_LINKS } from "@/constants";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(
        heroRef.current,
        { y: [50, 0], opacity: [0, 1] },
        { duration: 0.6, delay: 0.2 },
      );
    }
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.container}>
        <Image
          src="/images/tg_profile.png"
          alt="Telegram screen"
          width={300}
          height={600}
          className={styles.heroImage}
          priority
        />

        <div className={styles.heroTextContainer}>
          <div className={styles.heroText}>
            <h2>
              Hi, I'm Maria
              <br />— Product UX/UI Designer
            </h2>
            <p>
              Работаю в берлинском medtech стартапе AskBefore на позиции
              старшего дизайнера. Вместе с командой строю международный
              кроссплатформенный продукт, у которого крупные амбиции на
              европейском IT-рынке и он успешно их реализовывает.
            </p>
            <p>
              Кейс о работе в AskBefore <a href="">по ссылке</a>
            </p>
          </div>

          <div className={styles.heroBottom}>
            <StatsCard />
            <CVCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard() {
  return (
    <div className={styles.countersContainer}>
      <div className={styles.counter}>
        <b>3 года</b>
        <span>в дизайне</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.counter}>
        <b>8 лет</b>
        <span>в digital</span>
      </div>
    </div>
  );
}

function CVCard() {
  return (
    <div className={styles.cvContainer}>
      <Image
        className={styles.cvEmoji}
        src="/images/emoji.png"
        alt="emoji"
        width={44}
        height={44}
      />
      <a className={styles.cvButton} href="/Резюме.pdf" download>
        <Image
          src="/images/tablet/download.svg"
          alt="download"
          width={20}
          height={20}
        />
        резюме.pdf
      </a>
    </div>
  );
}
