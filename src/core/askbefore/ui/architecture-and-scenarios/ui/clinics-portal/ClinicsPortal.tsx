import Image from "next/image";
import styles from "./ClinicsPortal.module.css";

export default function ClinicsPortal() {
  return (
    <div className={styles.wrapper}>
      {/* Clinics Portal Section */}
      <div className={styles.clinicsSection}>
        <h5 className={styles.subtitle}>Clinics Portal</h5>
        <p className={styles.description}>
          Первым по важности после Member Portal следует Clinic Portal. Мы его
          создали, чтобы обеспечить Member Portal необходимыми данными и сделать
          процесс автоматическим.
        </p>
      </div>

      {/* Clinics Image */}
      <div className={styles.clinicsImageWrapper}>
        <Image
          src="/images/askbefore/clinics.png"
          alt="Clinics Portal"
          width={800}
          height={500}
          className={styles.clinicsImage}
        />
      </div>
      <p className={styles.restrictedCaption}>
        Ограничено для публичного просмотра
      </p>
    </div>
  );
}
