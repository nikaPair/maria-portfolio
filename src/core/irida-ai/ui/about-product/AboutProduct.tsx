"use client";
import React from "react";
import Image from "next/image";
import styles from "./AboutProduct.module.css";

export default function AboutProduct() {
  return (
    <section id="Как появилась идея" className={styles.section}>
      <div className={styles.topBlock}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoIcon}>
              <Image
                src="/images/irida/logo.svg"
                alt="Irida AI Logo"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.title}>Irida AI</h3>
          </div>
        </div>
        <div className={styles.textBlock}>
          <p className={styles.description}>
            Irida AI — это моя переработка проекта DxGPT, волонтерского AI-ассистента для предварительной
            медицинской диагностики.
          </p>
        </div>
      </div>

      <div className={styles.contextBlock}>
        <div className={styles.contextContent}>
          <h4 className={styles.contextTitle}>Как появилась идея</h4>
          <p className={styles.contextText}>
            О проекте DxGPT я узнала от друга-врача, который использует сервис в своей практике и иногда
            рекомендует его пациентам. Из любопытства я протестировала DxGPT и увидела, что модель предлагает
            действительно хорошо обоснованные гипотезы, которые помогают разобраться в состоянии здоровья.
          </p>
          <p className={styles.contextText}>
            Я постоянно спотыкалась об интерфейс в работе с DxGPT. Его сценарий использования нарушает
            сформированные паттерны взаимодействия с AI-сервисами, не имеет удобной мобильной версии и скрывает
            текст промта. Мне захотелось с нуля переработать DxGPT, пойти по дизайн-процессу и создать более
            удобную и красивую версию.
          </p>
        </div>
        <div className={styles.imageCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/irida/idea.png"
              alt="Irida AI Mobile Interface"
              width={304}
              height={352}
              className={styles.ideaImage}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

