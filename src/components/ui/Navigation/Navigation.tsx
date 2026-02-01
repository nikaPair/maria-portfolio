import Link from "next/link";
import { NavItem } from "@/types";
import styles from "./Navigation.module.css";

interface NavigationProps {
  items: NavItem[];
  variant?: "desktop" | "mobile";
  onItemClick?: () => void;
}

export default function Navigation({
  items,
  variant = "desktop",
  onItemClick,
}: NavigationProps) {
  return (
    <nav className={`${styles.nav} ${styles[variant]}`}>
      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link href={item.href} onClick={onItemClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
