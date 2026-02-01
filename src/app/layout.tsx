import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio - Maria Lubimova | Product UX/UI Designer",
  description:
    "Портфолио UX/UI дизайнера Марии Любимовой. 3 года в продуктовом дизайне: дизайн-системы, UX Research, прототипирование.",
  icons: {
    icon: "/images/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
