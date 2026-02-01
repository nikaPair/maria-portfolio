import Image from "next/image";
import styles from "./InfluencersPortal.module.css";

export default function InfluencersPortal() {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>Дополнительно</h5>

      {/* Influencers Portal Section */}
      <div className={styles.portalSection}>
        <h6 className={styles.subtitle}>Influencers Portal</h6>
        <p className={styles.description}>
          AskBefore имеет программу сотрудничества с блогерами и инфлюенсерами.
          Для них мы разработали Influencers Portal, где отображается статистика
          привлеченных пользователей. Через него партнеры могут отслеживать свой
          доход, выводить средства и отслеживать историю пополнений.
        </p>
      </div>

      {/* Influencers Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/askbefore/influencers.png"
          alt="Influencers Portal"
          width={800}
          height={500}
          className={styles.image}
        />
      </div>
      <p className={styles.restrictedCaption}>
        Ограничено для публичного просмотра
      </p>
    </div>
  );
}
