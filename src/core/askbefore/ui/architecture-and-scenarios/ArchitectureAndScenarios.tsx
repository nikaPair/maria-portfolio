import Image from "next/image";
import styles from "./ArchitectureAndScenarios.module.css";
import BusinessPositioning from "./ui/business-positioning/BusinessPositioning";
import ClinicsPortal from "./ui/clinics-portal/ClinicsPortal";
import InfluencersPortal from "./ui/influencers-portal/InfluencersPortal";
import MobileApp from "./ui/mobile-app/MobileApp";

export default function ArchitectureAndScenarios() {
  return (
    <section id="Архитектура и сценарии" className={styles.section}>
      <h4 className={styles.title}>Архитектура и сценарии</h4>

      <div className={styles.descriptionBlock}>
        <p className={styles.description}>
          В результате исследования я спроектировала «As-Is process flow», чтобы
          зафиксировать текущий путь пользователей. Далее в процессе мозгового
          штурма мы определили, какие решения необходимо создать в корне
          продукта, чтобы закрыть острые болевые точки.
        </p>
        <p className={styles.description}>
          Я использовала BPMN для визуализации процессов и синхронизации с
          разработкой. Нотация помогла структурировать логику сервиса и
          выдержала три итерации масштабирования бизнес-модели.
        </p>
      </div>

      {/* Highlight Block */}
      <div className={styles.highlightBlock}>
        <span className={styles.starIcon}>⭐️</span>
        <p className={styles.highlightText}>
          Результат моей работы использовался для передачи макетов в разработку,
          общения с юристами и специалистами по защите данных.
        </p>
      </div>

      {/* BPMN Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/askbefore/architecture.png"
          alt="Часть BPMN карты"
          width={1200}
          height={600}
          className={styles.image}
        />
        <p className={styles.imageCaption}>Часть BPMN карты</p>
      </div>

      {/* Business Positioning */}
      <BusinessPositioning />

      {/* Clinics Portal */}
      <ClinicsPortal />

      {/* Influencers Portal */}
      <InfluencersPortal />

      {/* Mobile App */}
      <MobileApp />
    </section>
  );
}
