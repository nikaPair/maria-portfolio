import { useEffect, useRef, RefObject } from "react";
import { animate, inView } from "motion";

type AnimationConfig = {
  x?: [number, number];
  y?: [number, number];
  opacity?: [number, number] | [number, number, number];
};

type AnimationOptions = {
  duration?: number;
  delay?: number;
  easing?: string;
};

export function useScrollAnimation<T extends HTMLElement>(
  animation: AnimationConfig,
  options: AnimationOptions = { duration: 0.5 },
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      inView(ref.current, () => {
        animate(ref.current!, animation, options);
      });
    }
  }, []);

  return ref;
}

export function useEntryAnimation<T extends HTMLElement>(
  animation: AnimationConfig,
  options: AnimationOptions = { duration: 0.5 },
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animate(ref.current, animation, options);
    }
  }, []);

  return ref;
}

export function useMultipleScrollAnimations<T extends HTMLElement>(
  count: number,
  animation: AnimationConfig,
  options: AnimationOptions = { duration: 0.5 },
): RefObject<(T | null)[]> {
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (el) {
        inView(el, () => {
          animate(el, animation, options);
        });
      }
    });
  }, []);

  return refs;
}
