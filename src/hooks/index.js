import { useEffect, useRef, useState } from "react";

export function useScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      const progress = scrollable > 0 ? scrollTop / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      }
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return progressRef;
}

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let lastScrolled = window.scrollY > 60;

    const update = () => {
      frameId = 0;
      const nextScrolled = window.scrollY > 60;
      if (nextScrolled === lastScrolled) return;
      lastScrolled = nextScrolled;
      setScrolled(nextScrolled);
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return { scrolled };
}

export function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        setActive((current) => current === visible.target.id ? current : visible.target.id);
      },
      { rootMargin: "-20% 0px -70%", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}
