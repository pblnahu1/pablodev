import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add("is-visible");
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return elementRef;
}
