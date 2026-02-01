import Hero from "@/components/sections/Hero";
import Cases from "@/components/sections/Cases";
import PetProjects from "@/components/sections/PetProjects";
import UIShots from "@/components/sections/UIShots";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <h1>Портфолио Марии Любимовой - Product UX/UI Designer</h1>
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
