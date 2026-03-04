import Image from "next/image";
import { Link } from "@/i18n/routing";
import { PetProjectData } from "@/types";
import { useTranslations } from "next-intl";
import styles from "./PetProjectCard.module.css";

// Map slugs to translation keys
const SLUG_TO_KEY: Record<string, string> = {
  emoview: "emoview",
  "irida-ai": "iridaAi",
  hashuhub: "hashuhub",
};

interface PetProjectCardProps {
  data: PetProjectData;
  innerRef?: (el: HTMLAnchorElement | null) => void;
}

export default function PetProjectCard({
  data,
  innerRef,
}: PetProjectCardProps) {
  const { image, horizontal, className, slug } = data;
  const t = useTranslations("petProjects");
  const translationKey = SLUG_TO_KEY[slug] || slug;
  const description = t(`items.${translationKey}.description`);

  if (horizontal) {
    return (
      <Link
        href={`/${slug}` as any}
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
      </Link>
    );
  }

  // Vertical layout for mobile projects (BAR, Chat)
  return (
    <Link
      href={`/${slug}` as any}
      className={`${styles.petProject} ${styles[className]}`}
      ref={innerRef}
    >
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
    </Link>
  );
}
