"use client";
import React from "react";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="Стратегия" className={styles.section}>
      <h4 className={styles.title}>Стратегия</h4>
      <div className={styles.strategyCard}>
        <div className={styles.blueLine}></div>
        <p className={styles.strategyText}>
          Я хочу дать владельцу простую и понятную картину состояния фермы: если
          температура растет, интерфейс объясняет риски и предлагает действия;
          если падает хэшрейт, панель указывает на возможные причины. Техники
          получают отдельный доступ к логам и другим внутренним данным.
        </p>
      </div>
    </section>
  );
}
