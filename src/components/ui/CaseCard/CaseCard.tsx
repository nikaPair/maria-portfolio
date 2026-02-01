import Image from "next/image";
import { CaseData } from "@/types";
import styles from "./CaseCard.module.css";

interface CaseCardProps {
  data: CaseData;
  contentRef?: (el: HTMLDivElement | null) => void;
  imageRef?: (el: HTMLElement | null) => void;
  colorVariant?: "blue" | "orange" | "pink";
}

export default function CaseCard({
  data,
  contentRef,
  imageRef,
  colorVariant,
}: CaseCardProps) {
  const colorVariantClass = colorVariant
    ? {
        blue: styles.imageContainerBlue,
        orange: styles.imageContainerOrange,
        pink: styles.imageContainerPink,
      }[colorVariant]
    : "";
  const {
    position,
    location,
    logo,
    logoWidth,
    logoHeight,
    company,
    description,
    tags,
    image,
    isNDA,
  } = data;

  return (
    <li className={styles.caseCard}>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.header}>
          <Image
            className={styles.companyLogo}
            src={logo}
            alt={company}
            width={logoWidth}
            height={logoHeight}
          />
          {isNDA && (
            <span className={styles.ndaBadge}>Детали на собеседовании</span>
          )}
        </div>

        <h3 className={styles.position}>{position}</h3>
        <p className={styles.location}>{location}</p>

        <p className={styles.description}>{description}</p>

        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        )}

        {/* Mobile image - shown only on mobile */}
        {image && (
          <div className={styles.mobileImageContainer}>
            <Image
              src={image}
              alt={`${company} project screenshot`}
              width={600}
              height={400}
              className={styles.mobileScreenshot}
            />
          </div>
        )}
      </div>

      {/* Desktop image - hidden on mobile */}
      <aside
        className={`${styles.imageContainer} ${colorVariantClass}`}
        ref={imageRef}
      >
        {image && (
          <div className={styles.laptopMockup}>
            <Image
              src={image}
              alt={`${company} project screenshot`}
              width={400}
              height={280}
              className={styles.screenshot}
            />
          </div>
        )}
      </aside>
    </li>
  );
}
