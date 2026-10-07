import { MapPin } from "lucide-react";
import { experiences } from "../../data";
import { Badge, Reveal, SectionHeader } from "../UI";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          label="// work_history"
          title="Work Experience"
          sub="3+ years delivering production systems for enterprise clients"
        />

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal className="experience-item" delay={index * 0.08} key={`${experience.company}-${experience.role}`}>
              <div className="experience-period">
                <span>{experience.period}</span>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </div>
              <article className="experience-card">
                <header>
                  <div>
                    <span className="experience-badge">{experience.badge}</span>
                    <h3>{experience.role}</h3>
                    <p>{experience.company} <span><MapPin size={13} />{experience.location}</span></p>
                  </div>
                </header>
                <p className="experience-summary">{experience.summary}</p>
                <ul>
                  {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                </ul>
                <div className="badge-list">{experience.stack.map((item) => <Badge text={item} key={item} />)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
