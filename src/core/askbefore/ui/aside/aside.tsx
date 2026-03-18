"use client";
import styles from "./Aside.module.css";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useActiveSection } from "./useActiveSection";

export default function Aside({ list }: { list: string[] }) {
  const activeSection = useActiveSection(list);
  const t = useTranslations("nav");

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__container}>
        <Link href="/" className={styles.aside__link}>
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={20}
            height={20}
          />
          {t("back")}
        </Link>
        <nav className={styles.aside__list}>
          {list.map((item) => (
            <Link
              href={`#${item}` as any}
              key={item}
              className={`${styles.aside__list__item} ${activeSection === item ? styles.active : ""}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
