import { BrainCircuit, Code2, Container } from "lucide-react";
import { expertiseGroups } from "../../data";
import { Badge, Reveal, SectionHeader } from "../UI";

const icons = [Code2, BrainCircuit, Container];

export default function Skills() {
  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <SectionHeader
          label="// tech_stack"
          title="Technical Expertise"
          sub="Capabilities applied across production backend, AI, automation, and product delivery"
        />

        <div className="expertise-grid">
          {expertiseGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal className="expertise-card" delay={index * 0.06} key={group.title}>
                <div className="expertise-card__top">
                  <span className="expertise-icon"><Icon size={21} /></span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="badge-list">{group.items.map((item) => <Badge text={item} key={item} />)}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
