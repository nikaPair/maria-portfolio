"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { SOCIAL_LINKS } from "@/constants";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <main>
        <section className={styles.about}>
          <div className={styles.wrapper}>
            <ProfileHeader />
            <Biography />
            <WorkApproach />
            <UXUISection />
            <ContactCTA />
          </div>
        </section>
      </main>
      {/* @ts-ignore */}
      <Footer showSubtitle />
    </>
  );
}

function ProfileHeader() {
  return (
    <div className={styles.firstBlock}>
      <Image
        src="/images/portrait.jpg"
        alt="portrait"
        width={280}
        height={280}
        className={styles.portrait}
      />
      <div className={styles.nameContainer}>
        <Image
          src="/images/quote.png"
          alt="quote"
          width={24}
          height={24}
          className={styles.quote}
        />
        <h3 className={styles.name}>Мария Любимова</h3>
        <p className={styles.description}>
          Строю карьеру вокруг ценностей бизнеса и углубления в продуктовый
          дизайн
        </p>
      </div>
    </div>
  );
}

function Biography() {
  return (
    <div className={styles.secondBlock}>
      <p className={styles.secondBlockText}>
        Я пришла в дизайн из цифрового маркетинга, где научилась работать с
        вниманием пользователей и веб-аналитикой. Этот опыт дал мне понимание
        развития онлайн-бизнеса и помог достичь в рекламе хороших результатов
        <br />
        <br />
        Со временем я стала уделять больше времени клиентским онлайн-площадкам,
        анализировать и улучшать их в Figma. Коллеги начали чаще со мной
        советоваться по вопросам дизайна и его влияния на продажи. Я начала
        помогать команде дизайнеров в своем digital-агентстве, а затем решила
        начать свой путь в UX/UI дизайне, который сегодня продолжаю в
        продуктовом
      </p>
    </div>
  );
}

function WorkApproach() {
  return (
    <div className={styles.thirdBlock}>
      <h3 className={styles.thirdBlockTitle}>Подход к работе</h3>
      <p className={styles.thirdBlockText}>
        Я перенимаю приоритеты разработки и бизнеса вокруг ROI. Стараюсь, чтобы
        мои дизайн-решения приносили пользу и делали это стабильно. Для этого я
        детально погружаюсь в метрики, внимательно слушаю пользователей и
        согласовываю свои шаги с фронтендерами, менеджерами и стекхолдерами
      </p>
    </div>
  );
}

function UXUISection() {
  const sections = [
    {
      title: "UX",
      text: "Доверяю статистике и минимизирую субъективный взгляд на интерфейс. Люблю модерируемые интервью и сессионную аналитику. Прорабатываю corner кейсы и снижаю фрустрацию пользователей",
    },
    {
      title: "UI",
      text: "Люблю подбирать визуальные синонимы для бренда компании, продолжать его идеи и настроение. Работаю с современными дизайн-системами, поддерживаю и создаю их с нуля",
    },
  ];

  return (
    <div className={styles.fourthBlock}>
      {sections.map((section) => (
        <div key={section.title} className={styles.U}>
          <h3 className={styles.fourthBlockTitle}>{section.title}</h3>
          <p className={styles.fourthBlockText}>{section.text}</p>
        </div>
      ))}
    </div>
  );
}

function ContactCTA() {
  return (
    <div className={styles.fifthBlock}>
      <p className={styles.fifthBlockText}>Буду рада познакомиться</p>
      <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">
        Telegram
        <Image
          src="/images/arrow.png"
          alt="arrow-right"
          width={20}
          height={20}
          className={styles.arrowRight}
        />
      </a>
    </div>
  );
}
