import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { personal, stats } from "../../data";
import { ArrowLink, Reveal } from "../UI";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal>
            <div className="availability"><span />Available for opportunities</div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="hero-kicker">{personal.name} · {personal.location}</p>
            <h1>{personal.title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-intro">{personal.tagline}</p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.18}>
            <ArrowLink href="#projects" primary>View Projects <ArrowDownRight size={17} /></ArrowLink>
            <ArrowLink href={`mailto:${personal.email}`}>Hire Me <ArrowUpRight size={17} /></ArrowLink>
          </Reveal>
        </div>

        <Reveal className="hero-aside" delay={0.14}>
          <span className="hero-aside__label">Current focus</span>
          <div className="focus-list">
            <span>Real-time voice AI</span>
            <span>RAG systems</span>
            <span>Enterprise automation</span>
          </div>
          <div className="hero-contact">
            <span><MapPin size={15} />{personal.location}</span>
            <a href={`mailto:${personal.email}`}><Mail size={15} />{personal.email}</a>
          </div>
        </Reveal>

        <Reveal className="hero-stats" delay={0.2}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value.toLocaleString()}{stat.suffix}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
        </Reveal>
      </div>
    </section>
  );
}
