"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { LANGUAGES, SOCIAL_LINKS } from "@/constants";
import { Language } from "@/types";
import { useTranslations } from "next-intl";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState<string | null>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const NAV_ITEMS = [
    { href: "/" as const, label: t("home") },
    { href: "/about" as const, label: t("about") },
    { href: "/cases" as const, label: t("cases") },
  ];

  const currentLang: Language =
    LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];
  const otherLangs: Language[] = LANGUAGES.filter(
    (l) => l.code !== locale,
  );

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleLangDropdown = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLangDropdownOpen((prev) => (prev === id ? null : id));
  }, []);

  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      setLangDropdownOpen(null);
      router.replace(pathname, { locale: newLocale as "ru" | "en" });
    },
    [router, pathname],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        langDropdownOpen === "desktop" &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(target)
      ) {
        setLangDropdownOpen(null);
      }

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
            t.me/lubimova_dsgn
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
