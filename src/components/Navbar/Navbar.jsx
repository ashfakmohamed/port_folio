import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection, useNavScroll, useScrollProgress } from "../../hooks";
import { navLinks, personal } from "../../data";
import { LogoMark } from "../UI";

export default function Navbar() {
  const { toggle, isDark } = useTheme();
  const { scrolled } = useNavScroll();
  const ids = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const active = useActiveSection(ids);
  const progressRef = useScrollProgress();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const close = () => window.innerWidth > 920 && setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const backgroundRegions = document.querySelectorAll(
      "main, footer, .site-header > .brand, .site-header > .desktop-nav, .site-header .header-cta, .site-header .icon-button:not(.menu-button)",
    );

    backgroundRegions.forEach((element) => {
      element.toggleAttribute("inert", open);
      if (open) element.setAttribute("aria-hidden", "true");
      else element.removeAttribute("aria-hidden");
    });

    let focusTimer;
    if (open) {
      wasOpenRef.current = true;
      focusTimer = window.setTimeout(() => {
        mobilePanelRef.current?.querySelector("a")?.focus();
      }, 0);
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      menuButtonRef.current?.focus();
    }

    return () => {
      if (focusTimer) window.clearTimeout(focusTimer);
      document.body.classList.remove("menu-open");
      backgroundRegions.forEach((element) => {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      });
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = [menuButtonRef.current, ...mobilePanelRef.current.querySelectorAll("a")].filter(Boolean);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label={`${personal.name}, home`} onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="brand-name">Mohamed Ashfak</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={active === link.href.slice(1) ? "is-active" : ""}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-cta" href={`mailto:${personal.email}`}>Hire Me</a>
          <button className="icon-button" type="button" onClick={toggle} aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            ref={menuButtonRef}
            className="icon-button menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        ref={mobilePanelRef}
        id="mobile-navigation"
        className={`mobile-panel ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal={open ? "true" : undefined}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
            </a>
          ))}
          <a className="mobile-hire" href={`mailto:${personal.email}`} onClick={() => setOpen(false)}>Hire Me</a>
        </nav>
      </div>
    </>
  );
}
