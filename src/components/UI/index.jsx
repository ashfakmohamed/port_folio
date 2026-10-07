import { useEffect, useRef } from "react";

let revealObserver;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const clearWillChange = (event) => {
            if (event.propertyName !== "transform") return;
            entry.target.style.willChange = "auto";
            entry.target.removeEventListener("transitionend", clearWillChange);
          };

          entry.target.addEventListener("transitionend", clearWillChange);
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 140px", threshold: 0.01 },
    );
  }
  return revealObserver;
}

export function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 34" role="img">
        <path className="logo-m" d="M3.5 28V6L12 18L20.5 6V28" />
        <path className="logo-a" d="M26 28L34.5 6L43 28M29.5 19H39.5" />
      </svg>
    </span>
  );
}

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const Component = as;

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return undefined;
    }

    element.style.willChange = "opacity, transform";
    const observer = getRevealObserver();
    observer.observe(element);
    return () => {
      observer.unobserve(element);
      element.style.willChange = "auto";
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={`${className} reveal`.trim()}
      style={{ "--reveal-delay": `${delay}s` }}
    >
      {children}
    </Component>
  );
}

export function SectionHeader({ label, title, sub, align = "left" }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

export function Badge({ text }) {
  return <span className="tech-badge">{text}</span>;
}

export function ArrowLink({ children, href, onClick, primary = false, download }) {
  const className = primary ? "button button--primary" : "button button--secondary";
  if (href) {
    return <a className={className} href={href} onClick={onClick} download={download}>{children}</a>;
  }
  return <button className={className} type="button" onClick={onClick}>{children}</button>;
}
