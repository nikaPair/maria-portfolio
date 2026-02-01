import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
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
      <body className={manrope.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
