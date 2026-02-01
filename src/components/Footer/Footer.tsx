import Image from "next/image";
import styles from "./Footer.module.css";
import { SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href={SOCIAL_LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.telegramLink}
      >
        <Image
          src="/images/tablet/telegram.svg"
          alt="Telegram"
          width={24}
          height={24}
        />
        <span>lubimova_dsgn</span>
      </a>
    </footer>
  );
}
