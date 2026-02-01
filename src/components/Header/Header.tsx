"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/hooks/useLocale";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState<string | null>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const { currentLang, otherLangs, changeLocale } = useLocale();

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleLangDropdown = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLangDropdownOpen((prev) => (prev === id ? null : id));
  }, []);

  const handleLocaleChange = useCallback(
    (locale: string) => {
      changeLocale(locale);
      setLangDropdownOpen(null);
    },
    [changeLocale],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      // Check if click is outside desktop dropdown
      if (
        langDropdownOpen === "desktop" &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(target)
      ) {
        setLangDropdownOpen(null);
      }

      // Check if click is outside mobile dropdown
      // Note: we don't strictly need to close mobile dropdown on outside click
      // if it's inside the mobile menu panel, but consistent behavior is good.
      if (
        langDropdownOpen === "mobile" &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target)
      ) {
        setLangDropdownOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [langDropdownOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Profile section */}
        <div className={styles.profile}>
          <Link href="/">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={44}
              height={44}
            />
          </Link>
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            t.me/lyubimova_dsgn
          </a>

          {/* Mobile menu button */}
          <button
            className={`${styles.mobileNavButton} ${mobileMenuOpen ? styles.isOpen : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Image src="/images/dots.png" alt="menu" width={4} height={20} />
          </button>

          {/* Mobile menu */}
          <div
            className={styles.headerMobile}
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              pointerEvents: mobileMenuOpen ? "all" : "none",
            }}
          >
            <Navigation
              items={NAV_ITEMS}
              variant="mobile"
              onItemClick={closeMobileMenu}
            />
            <div className={styles.mobileLanguage} ref={mobileDropdownRef}>
              <LanguageSwitcher
                isOpen={langDropdownOpen === "mobile"}
                onToggle={(e) => toggleLangDropdown("mobile", e)}
                currentLang={currentLang}
                otherLangs={otherLangs}
                onLocaleChange={handleLocaleChange}
                variant="mobile"
              />
            </div>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className={styles.headerCenter}>
          <Navigation items={NAV_ITEMS} variant="desktop" />
        </div>

        {/* Desktop language switcher */}
        <div className={styles.headerRight} ref={desktopDropdownRef}>
          <LanguageSwitcher
            isOpen={langDropdownOpen === "desktop"}
            onToggle={(e) => toggleLangDropdown("desktop", e)}
            currentLang={currentLang}
            otherLangs={otherLangs}
            onLocaleChange={handleLocaleChange}
            variant="desktop"
          />
        </div>
      </div>
    </header>
  );
}
