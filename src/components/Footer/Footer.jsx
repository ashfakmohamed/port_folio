import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, personal } from "../../data";
import { LogoMark } from "../UI";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home"><LogoMark /><span className="brand-name">Mohamed Ashfak</span></a>
            <p>Python Full Stack Developer &amp; Gen AI Engineer building scalable systems and AI-powered applications.</p>
          </div>
          <div className="footer-links">
            <span>Navigation</span>
            {navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </div>
          <div className="footer-contact">
            <span>Contact</span>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
            <a href={`tel:${personal.phone.replace(/\s/g, "")}`}>{personal.phone}</a>
            <p>{personal.location}</p>
          </div>
          <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={20} /></a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mohamed Ashfak</p>
          <div>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            {personal.github && <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>}
            <a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
