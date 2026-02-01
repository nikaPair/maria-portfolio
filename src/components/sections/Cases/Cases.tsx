"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import CaseCard from "@/components/ui/CaseCard";
import { CASES_DATA } from "@/constants";
import styles from "./Cases.module.css";
import Link from "next/link";

export default function Cases() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

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
    <section className={styles.cases} id="cases">
      <div className={styles.container}>
        <hgroup className={styles.casesTitle} ref={titleRef}>
          <h2>Кейсы</h2>
          <p>3 компании — 3 кейса</p>
        </hgroup>

        <ol className={styles.projects}>
          {CASES_DATA.map((caseData, index) => (
            <Link key={caseData.id} href={`/${caseData.slug}`}>
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
