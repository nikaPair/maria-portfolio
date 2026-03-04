import Hero from "@/components/sections/Hero";
import Cases from "@/components/sections/Cases";
import PetProjects from "@/components/sections/PetProjects";
import UIShots from "@/components/sections/UIShots";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("hero");

  return (
    <>
      <h1>{t("pageTitle")}</h1>
      <main>
        <Hero />
        <Cases />
        <PetProjects />
        <UIShots />
      </main>
      <Footer />
    </>
  );
}
