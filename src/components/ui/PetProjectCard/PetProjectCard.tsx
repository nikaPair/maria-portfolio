import Image from "next/image";
import { PetProjectData } from "@/types";
import styles from "./PetProjectCard.module.css";

interface PetProjectCardProps {
  data: PetProjectData;
  innerRef?: (el: HTMLLIElement | null) => void;
}

export default function PetProjectCard({
  data,
  innerRef,
}: PetProjectCardProps) {
  const { description, image, horizontal, className } = data;

  if (horizontal) {
    // Horizontal layout for laptop/desktop project (ASIC)
    return (
      <li
        className={`${styles.petProject} ${styles.horizontal} ${styles[className]}`}
        ref={innerRef}
      >
        <div className={styles.laptopContainer}>
          {image && (
            <Image
              src={image}
              alt="Project screenshot"
              width={900}
              height={563}
              className={styles.laptopImage}
            />
          )}
        </div>
        <p className={styles.horizontalDescription}>{description}</p>
      </li>
    );
  }

  // Vertical layout for mobile projects (BAR, Chat)
  return (
    <li className={`${styles.petProject} ${styles[className]}`} ref={innerRef}>
      <div className={styles.phoneContainer}>
        {image && (
          <Image
            src={image}
            alt="Project screenshot"
            width={400}
            height={800}
            className={styles.phoneImage}
          />
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
