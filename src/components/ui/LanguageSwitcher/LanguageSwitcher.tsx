"use client";

import Image from "next/image";
import { Language } from "@/types";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  isOpen: boolean;
  onToggle: (e: React.MouseEvent) => void;
  currentLang: Language;
  otherLangs: Language[];
  onLocaleChange: (locale: string) => void;
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({
  isOpen,
  onToggle,
  currentLang,
  otherLangs,
  onLocaleChange,
  variant = "desktop",
}: LanguageSwitcherProps) {
  const handleOptionClick = (locale: string) => {
    onLocaleChange(locale);
  };

  // All languages for the dropdown
  const allLangs = [currentLang, ...otherLangs];

  return (
    <div
      className={`${styles.langSwitcher} ${isOpen ? styles.isOpen : ""} ${styles[variant]}`}
    >
      {/* Closed state - current language button */}
      <button className={styles.langCurrent} type="button" onClick={onToggle}>
        <Image
          src={currentLang.flag}
          alt={currentLang.label}
          width={28}
          height={28}
          className={styles.langFlag}
        />
        <span className={styles.langCode}>{currentLang.label}</span>
      </button>

      {/* Open state - dropdown with all languages */}
      <div className={styles.langDropdown}>
        {allLangs.map((lang) => (
          <button
            key={lang.code}
            className={`${styles.langOption} ${lang.code === currentLang.code ? styles.langOptionActive : ""}`}
            type="button"
            onClick={() => handleOptionClick(lang.code)}
          >
            <Image
              src={lang.flag}
              alt={lang.label}
              width={28}
              height={28}
              className={styles.langFlag}
            />
            <span className={styles.langCode}>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
