import Image from "next/image";
import styles from "./DesignSystem.module.css";

const systemCards = [
  {
    image: "/images/askbefore/system-1.png",
    title: "Design System",
    subtitle: "Edited 2 hours ago",
  },
  {
    image: "/images/askbefore/system-2.png",
    title: "Dev Member Portal",
    subtitle: "Edited 2 hours ago",
  },
  {
    image: "/images/askbefore/system-3.png",
    title: "Dev Client Portal",
    subtitle: "Edited 2 hours ago",
  },
  {
    image: "/images/askbefore/system-4.png",
    title: "Whole product BPMN",
    subtitle: "Edited 2 days ago",
  },
  {
    image: "/images/askbefore/system-5.png",
    title: "Dev Influencers",
    subtitle: "Edited 3 days ago",
  },
  {
    image: "/images/askbefore/system-6.png",
    title: "Landing Pages",
    subtitle: "Edited 3 days ago",
  },
];

export default function DesignSystem() {
  return (
    <section id="Дизайн-система" className={styles.section}>
      <h4 className={styles.title}>Дизайн-система</h4>

      {/* Highlight Block */}
      <div className={styles.highlightBlock}>
        <span className={styles.icon}>🏆</span>
        <h4 className={styles.highlightTitle}>
          Совместно с командой я систематизировала разрозненные UI-компоненты и
          выстроила масштабируемую дизайн-систему.
        </h4>
        <p className={styles.highlightText}>
          Это ускорило сборку макетов для веб-платформы и мобильного приложения
          и заложило крепкую основу для масштабирования продукта.
        </p>
      </div>

      {/* Cards Grid */}
      <div className={styles.grid}>
        {systemCards.map((card, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className={styles.cardImage}
            />
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardSubtitle}>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
