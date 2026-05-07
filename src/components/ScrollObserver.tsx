"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing once visible to prevent re-animating when scrolling up
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Give React a tick to render
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-up:not(.visible)");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
