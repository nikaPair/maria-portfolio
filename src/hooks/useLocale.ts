"use client";

import { useState, useEffect, useCallback } from "react";
import { LANGUAGES, LOCALE_STORAGE_KEY, DEFAULT_LOCALE } from "@/constants";
import { Language } from "@/types";

export function useLocale() {
  const [currentLocale, setCurrentLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored && LANGUAGES.some((l) => l.code === stored)) {
        setCurrentLocale(stored);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const changeLocale = useCallback((newLocale: string) => {
    setCurrentLocale(newLocale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch {
      // localStorage not available
    }
  }, []);

  const currentLang: Language =
    LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];
  const otherLangs: Language[] = LANGUAGES.filter(
    (l) => l.code !== currentLocale,
  );

  return {
    currentLocale,
    currentLang,
    otherLangs,
    changeLocale,
  };
}
