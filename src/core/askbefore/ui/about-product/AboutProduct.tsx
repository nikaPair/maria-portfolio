"use client";

import Image from "next/image";
import styles from "./AboutProduct.module.css";
import Link from "next/link";

const slides = [
  {
    image: "/images/askbefore/1.png",
    caption: "Сайт для пользователей",
  },
  {
    image: "/images/askbefore/2.png",
    caption: "Сайт для клиник",
  },
];

export default function AboutProduct() {
  return (
    <section id="О продукте" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <Image
          src="/images/askbefore.svg"
          alt="AskBefore"
          width={180}
          height={32}
          className={styles.logo}
        />
        <div className={styles.tags}>
          <div className={styles.tag}>
            <span className={styles.tagLabel}>Сайт</span>
            <Link
              href={"https://askbefore.eu"}
              target="_blank"
              className={styles.tagValue}
            >
              askbefore.eu
            </Link>
          </div>
          <div className={styles.tag}>
            <span className={styles.tagLabel}>Продукт</span>
            <span className={styles.tagValue}>MedTech стартап</span>
          </div>
          <div className={styles.tag}>
            <span className={styles.tagLabel}>География</span>
            <span className={styles.tagValue}>Берлин, Германия</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={styles.description}>
        AskBefore — это сервис для безопасного обмена результатами тестов на
        ИППП. Пользователь может отправить партнеру подтверждённый статус
        здоровья в формате цифровой валентинки. Все данные при этом защищены
        сквозным шифрованием на базе блокчейн.
      </p>

      {/* Marketing Websites */}
      <div className={styles.marketingSection}>
        <h3 className={styles.subtitle}>Marketing Websites</h3>
        <p className={styles.text}>У компании есть B2C и B2B направления:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            B2C это пользователи, которые приходят в продукт за обменом
            медицинскими данными с партнером;
          </li>
          <li className={styles.listItem}>
            B2B это клиники-партнеры, которые размещают на платформе предложение
            о лабораторных медицинских исследованиях.
          </li>
        </ul>
        <p className={styles.text}>
          Для каждой из аудиторий разработан отдельный сайт.
        </p>
      </div>

      {/* Single Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/askbefore/1.png"
          alt="Сайт для пользователей"
          width={800}
          height={500}
          className={styles.image}
        />
        <p className={styles.caption}>Сайт для пользователей</p>
      </div>
    </section>
  );
}
