"use client";
import React from "react";
import styles from "./Impact.module.css";

export default function Impact() {
  return (
    <section id="Перспективы проекта" className={styles.section}>
      <h4 className={styles.title}>Перспективы проекта</h4>
      <p className={styles.description}>
        DxGPT создан и поддерживается волонтерами, поэтому по окончании разработки я хочу
        безвозмездно передать дизайн-проект Irida.
      </p>

      <div className={styles.highlight}>
        <div className={styles.iconWrapper}>
          <span className={styles.emoji}>🤝</span>
        </div>
        <p className={styles.text}>
          Если команде DxGPT понравится редизайн, то я готова на время
          присоединиться и доработать проект под потребности продукта.
        </p>
      </div>
    </section>
  );
}
