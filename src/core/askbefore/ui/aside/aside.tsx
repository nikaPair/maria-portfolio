"use client";
import styles from "./Aside.module.css";
import Link from "next/link";
import Image from "next/image";
import { useActiveSection } from "./useActiveSection";

export default function Aside({ list }: { list: string[] }) {
  const activeSection = useActiveSection(list);

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__container}>
        <Link href="/" className={styles.aside__link}>
          <Image
            src="/icons/arrow-left.svg"
            alt="arrow-left"
            width={20}
            height={20}
          />
          Назад
        </Link>
        <nav className={styles.aside__list}>
          {list.map((item) => (
            <Link
              href={`#${item}`}
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
