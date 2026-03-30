"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import CaseCard from "@/components/ui/CaseCard";
import { CASES_DATA } from "@/constants";
import { useTranslations } from "next-intl";
import styles from "./Cases.module.css";
import { Link } from "@/i18n/routing";

type CasesProps = {
  variant?: "home" | "casesPage";
};

export default function Cases({ variant = "home" }: CasesProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const t = useTranslations("cases");
  const sectionClassName =
    variant === "casesPage"
      ? `${styles.cases} ${styles.casesPage}`
      : styles.cases;

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      inView(titleRef.current, () => {
        animate(
          titleRef.current!,
          { y: [50, 0], opacity: [0, 1] },
          { duration: 0.5 },
        );
      });
    }

    // Content animations (slide from left)
    contentRefs.current.forEach((el) => {
      if (el) {
        inView(el, () => {
          animate(el, { x: [-100, 0], opacity: [0, 1] }, { duration: 0.5 });
        });
      }
    });

    // Image animations (slide from right)
    imageRefs.current.forEach((el) => {
      if (el) {
        inView(el, () => {
          animate(
            el,
            { x: [100, 0], opacity: [0, 1] },
            { duration: 0.5, delay: 0.1 },
          );
        });
      }
    });
  }, []);

  return (
    <section className={sectionClassName} id="cases">
      <div className={styles.container}>
        <hgroup className={styles.casesTitle} ref={titleRef}>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </hgroup>

        <ol className={styles.projects}>
          {CASES_DATA.map((caseData, index) => (
            <Link key={caseData.id} href={`/${caseData.slug}` as any}>
              <CaseCard
                data={caseData}
                colorVariant={
                  index === 0 ? "blue" : index === 1 ? "orange" : "pink"
                }
                contentRef={(el) => {
                  contentRefs.current[index] = el;
                }}
                imageRef={(el) => {
                  imageRefs.current[index] = el;
                }}
              />
            </Link>
          ))}
        </ol>
      </div>
    </section>
  );
}
