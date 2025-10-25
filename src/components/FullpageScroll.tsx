import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * FullpageScroll
 * - Intercepts wheel/keyboard to force snap to next/previous full-screen section on desktop
 * - Disables the interception on small screens (mobile) to keep native scrolling
 */
const FullpageScroll: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      // On mobile keep native behavior; ensure container is scrollable but don't force snapping
      container.classList.remove("snap-y", "snap-mandatory");
      container.style.overflowY = "auto";
      container.style.scrollBehavior = "smooth";
      return;
    }

    // Ensure classes are present for desktop
    container.classList.add("snap-y", "snap-mandatory", "overflow-y-auto", "scroll-smooth");

    const sections = Array.from(container.querySelectorAll("section")) as HTMLElement[];
    if (sections.length === 0) return;

    const scrollToIndex = (index: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, index));
      isAnimating.current = true;
      sections[clamped].scrollIntoView({ behavior: "smooth" });
      // allow next wheel after animation finishes
      setTimeout(() => {
        isAnimating.current = false;
      }, 700);
    };

    const onWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 10) return; // ignore very small deltas

      e.preventDefault();
      const currentIndex = Math.round(container.scrollTop / container.clientHeight);
      const nextIndex = currentIndex + (delta > 0 ? 1 : -1);
      if (nextIndex === currentIndex) return;
      scrollToIndex(nextIndex);
    };

    const onKey = (e: KeyboardEvent) => {
      if (isAnimating.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const currentIndex = Math.round(container.scrollTop / container.clientHeight);
        scrollToIndex(currentIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const currentIndex = Math.round(container.scrollTop / container.clientHeight);
        scrollToIndex(currentIndex - 1);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      {children}
    </div>
  );
};

export default FullpageScroll;
