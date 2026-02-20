"use client";

import Image from "next/image";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  return (
    <section id="Контекст" className={styles.section}>
      <div className={styles.topBlock}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoIcon}>
              <Image
                src="/images/hashuhub/logo.svg"
                alt="HashuHub Logo"
                width={40}
                height={40}
                className={styles.logoImage}
              />
            </div>
            <h3 className={styles.title}>HashuHub</h3>
          </div>
        </div>

        {/* Description Text */}
        <div className={styles.textBlock}>
          <p className={styles.description}>
            Проект HushHub основан на моем трехлетнем опыте добычи BTC и ETH на
            ASIC-майнерах. Я обслуживала свою майнинг-ферму, консультировала и
            помогала ставить фермы друзьям. Мне также приходилось разбирать
            майнеры, чистить платы, наблюдать за ремонтом в сервис-центрах и
            заниматься техническим обслуживанием.
          </p>
          <p className={styles.description}>
            В работе с асиками основным источником данных и главным элементом
            управления являются административные панели. Из-за слабого дизайна
            ими редко пользуются, что ведет к позднему обнаружению сбоев и
            крупным финансовым потерям.
          </p>
        </div>
      </div>

      {/* Context Block */}
      <div className={styles.contextBlock}>
        <div className={styles.contextContent}>
          <h4 className={styles.contextTitle}>Контекст</h4>
          <p className={styles.contextText}>
            В широком смысле ASIC означает специализированный компьютер, который
            выполняет одну-единственную задачу. Следовательно, ASIC-майнер — это
            устройство, которое добывает криптовалюту и больше ни на что не
            способно.
          </p>
          <p className={styles.contextText}>
            ASIC-майнеры нового поколения имеют системы предохранения и большое
            количество датчиков, но редко у какого частного майнера есть
            средства на машины последних моделей. Это является главным
            обстоятельством, почему я спроектировала HushHub.
          </p>
        </div>

        {/* Miner Image Card */}
        <div className={styles.imageCard}>
          <div className={styles.minerImagePlaceholder}>
            {/* Since we don't have the exact image asset yet, using a placeholder path */}
            {/* User should replace /images/hashuhub/miner.png with the actual file */}
            <div className={styles.placeholderImg}>
              <Image
                src="/images/hashuhub/context.png"
                alt="AvalonMiner"
                width={304}
                height={304}
                className={styles.minerImage}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
