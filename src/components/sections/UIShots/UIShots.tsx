"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, inView } from "motion";
import MobileSlider from "@/components/ui/MobileSlider";
import {
  UI_SHOTS_DESKTOP,
  UI_SHOTS_TABLET,
  UI_SHOTS_MOBILE,
} from "@/constants";
import styles from "./UIShots.module.css";

export default function UIShots() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      inView(gridRef.current, () => {
        animate(
          gridRef.current!,
          { opacity: [0, 1], y: [50, 0] },
          { duration: 0.6 },
        );
      });
    }
  }, []);

  return (
    <section className={styles.uiShots} id="ui-shots">
      <header className={styles.sectionHeader}>
        <h2>UI шоты</h2>
        <p>Визуал с кейсов и pet-проектов</p>
      </header>

      {/* Desktop grid - 11 images */}
      <div className={styles.desktopGrid} ref={gridRef}>
        {/* Row 1: 2 images */}
        <div className={styles.row}>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[0].src}
              alt={UI_SHOTS_DESKTOP[0].alt}
              width={410}
              height={400}
              className={styles.shotImage}
            />
          </div>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[1].src}
              alt={UI_SHOTS_DESKTOP[1].alt}
              width={774}
              height={400}
              className={styles.shotImage}
            />
          </div>
        </div>

        {/* Row 2: 2 images */}
        <div className={styles.row}>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[2].src}
              alt={UI_SHOTS_DESKTOP[2].alt}
              width={774}
              height={590}
              className={styles.shotImage}
            />
          </div>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[3].src}
              alt={UI_SHOTS_DESKTOP[3].alt}
              width={410}
              height={590}
              className={styles.shotImage}
            />
          </div>
        </div>

        {/* Row 3: 1 image */}
        <div className={styles.row}>
          <div className={styles.shotFull}>
            <Image
              src={UI_SHOTS_DESKTOP[4].src}
              alt={UI_SHOTS_DESKTOP[4].alt}
              width={1200}
              height={500}
              className={styles.shotImage}
            />
          </div>
        </div>

        {/* Row 4: 2 images */}
        <div className={styles.row}>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[5].src}
              alt={UI_SHOTS_DESKTOP[5].alt}
              width={590}
              height={400}
              className={styles.shotImage}
            />
          </div>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[6].src}
              alt={UI_SHOTS_DESKTOP[6].alt}
              width={590}
              height={400}
              className={styles.shotImage}
            />
          </div>
        </div>

        {/* Row 5: 3 images */}
        <div className={styles.rowThree}>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[7].src}
              alt={UI_SHOTS_DESKTOP[7].alt}
              width={390}
              height={400}
              className={styles.shotImage}
            />
          </div>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[8].src}
              alt={UI_SHOTS_DESKTOP[8].alt}
              width={390}
              height={400}
              className={styles.shotImage}
            />
          </div>
          <div className={styles.shot}>
            <Image
              src={UI_SHOTS_DESKTOP[9].src}
              alt={UI_SHOTS_DESKTOP[9].alt}
              width={390}
              height={400}
              className={styles.shotImage}
            />
          </div>
        </div>

        {/* Row 6: 1 image */}
        <div className={styles.row}>
          <div className={styles.shotFull}>
            <Image
              src={UI_SHOTS_DESKTOP[10].src}
              alt={UI_SHOTS_DESKTOP[10].alt}
              width={1200}
              height={500}
              className={styles.shotImage}
            />
          </div>
        </div>
      </div>

      {/* Tablet grid: singles are 3, 8, 9, 15 */}
      <div className={styles.tabletGrid}>
        {/* Row 1: 1, 2 (pair) */}
        <div className={styles.tabletRow}>
          <Image
            src={UI_SHOTS_TABLET[0].src}
            alt={UI_SHOTS_TABLET[0].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
          <Image
            src={UI_SHOTS_TABLET[1].src}
            alt={UI_SHOTS_TABLET[1].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
        </div>
        {/* Row 2: 3 (single) */}
        <div className={styles.tabletRowFull}>
          <Image
            src={UI_SHOTS_TABLET[2].src}
            alt={UI_SHOTS_TABLET[2].alt}
            width={720}
            height={484}
            className={styles.tabletImageFull}
          />
        </div>
        {/* Row 3: 4, 5 (pair) */}
        <div className={styles.tabletRow}>
          <Image
            src={UI_SHOTS_TABLET[3].src}
            alt={UI_SHOTS_TABLET[3].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
          <Image
            src={UI_SHOTS_TABLET[4].src}
            alt={UI_SHOTS_TABLET[4].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
        </div>
        {/* Row 4: 6, 7 (pair) */}
        <div className={styles.tabletRow}>
          <Image
            src={UI_SHOTS_TABLET[5].src}
            alt={UI_SHOTS_TABLET[5].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
          <Image
            src={UI_SHOTS_TABLET[6].src}
            alt={UI_SHOTS_TABLET[6].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
        </div>
        {/* Row 5: 8 (single) */}
        <div className={styles.tabletRowFull}>
          <Image
            src={UI_SHOTS_TABLET[7].src}
            alt={UI_SHOTS_TABLET[7].alt}
            width={720}
            height={484}
            className={styles.tabletImageFull}
          />
        </div>
        {/* Row 6: 9 (single) */}
        <div className={styles.tabletRowFull}>
          <Image
            src={UI_SHOTS_TABLET[8].src}
            alt={UI_SHOTS_TABLET[8].alt}
            width={720}
            height={484}
            className={styles.tabletImageFull}
          />
        </div>
        {/* Row 7: 10, 11 (pair) */}
        <div className={styles.tabletRow}>
          <Image
            src={UI_SHOTS_TABLET[9].src}
            alt={UI_SHOTS_TABLET[9].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
          <Image
            src={UI_SHOTS_TABLET[10].src}
            alt={UI_SHOTS_TABLET[10].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
        </div>
        {/* Row 8: 12, 13 (pair) */}
        <div className={styles.tabletRow}>
          <Image
            src={UI_SHOTS_TABLET[11].src}
            alt={UI_SHOTS_TABLET[11].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
          <Image
            src={UI_SHOTS_TABLET[12].src}
            alt={UI_SHOTS_TABLET[12].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
        </div>
        {/* Row 9: 15 (single) */}
        <div className={styles.tabletRowFull}>
          <Image
            src={UI_SHOTS_TABLET[14].src}
            alt={UI_SHOTS_TABLET[14].alt}
            width={720}
            height={484}
            className={styles.tabletImageFull}
          />
        </div>
        {/* Row 10: 14, 16 (pair) */}
        <div className={styles.tabletRow}>
          <Image
            src={UI_SHOTS_TABLET[13].src}
            alt={UI_SHOTS_TABLET[13].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
          <Image
            src={UI_SHOTS_TABLET[15].src}
            alt={UI_SHOTS_TABLET[15].alt}
            width={350}
            height={550}
            className={styles.tabletImage}
          />
        </div>
      </div>

      {/* Mobile slider */}
      <MobileSlider slides={UI_SHOTS_MOBILE} />
    </section>
  );
}
