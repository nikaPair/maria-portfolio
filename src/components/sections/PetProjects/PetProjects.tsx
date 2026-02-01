"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import PetProjectCard from "@/components/ui/PetProjectCard";
import { PET_PROJECTS_DATA } from "@/constants";
import styles from "./PetProjects.module.css";

const ANIMATIONS = {
  first: { x: [-100, 0], opacity: [0, 1] as [number, number] },
  second: { x: [100, 0], opacity: [0, 1] as [number, number] },
  third: { y: [100, 0], opacity: [0, 1] as [number, number] },
};

export default function PetProjects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      inView(titleRef.current, () => {
        animate(
          titleRef.current!,
          { y: [50, 0], opacity: [0, 1] },
          { duration: 0.5 },
        );
      });
    }

    // Project cards animations
    projectRefs.current.forEach((el, index) => {
      if (el) {
        const className = PET_PROJECTS_DATA[index]
          .className as keyof typeof ANIMATIONS;
        const animation = ANIMATIONS[className];

        if (animation) {
          inView(el, () => {
            // @ts-ignore
            animate(el, animation, {
              duration: 0.6,
              easing: "ease-out",
            });
          });
        }
      }
    });
  }, []);

  return (
    <section className={styles.petProjects} id="pet-projects">
      <div className={styles.container}>
        <header className={styles.sectionHeader} ref={titleRef}>
          <h2>Pet-проекты</h2>
          <p>Проектирую для души и могу показывать без ограничений</p>
        </header>

        <div className={styles.projectsGrid}>
          {/* First row - two mobile projects */}
          <div className={styles.topRow}>
            {PET_PROJECTS_DATA.filter((p) => !p.horizontal).map(
              (project, index) => (
                <PetProjectCard
                  key={project.id}
                  data={project}
                  innerRef={(el) => {
                    projectRefs.current[index] = el;
                  }}
                />
              ),
            )}
          </div>

          {/* Second row - laptop project */}
          <div className={styles.bottomRow}>
            {PET_PROJECTS_DATA.filter((p) => p.horizontal).map((project) => (
              <PetProjectCard
                key={project.id}
                data={project}
                innerRef={(el) => {
                  projectRefs.current[2] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
