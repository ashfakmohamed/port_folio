import { AudioLines, Award, Bot, GraduationCap } from "lucide-react";
import { achievements } from "../../data";
import { Reveal, SectionHeader } from "../UI";

const achievementIcons = [Award, Bot, AudioLines, GraduationCap];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeader
          label="// recognition"
          title="Achievements"
          sub="Milestones and recognitions reflecting real-world enterprise impact"
        />

        <div className="achievement-grid">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[index];
            return (
            <Reveal className={`achievement-card ${achievement.highlight ? "is-highlight" : ""}`} delay={index * 0.06} key={achievement.title}>
              <div className="achievement-number">{String(index + 1).padStart(2, "0")}</div>
              <span className="achievement-icon" aria-hidden="true"><Icon size={24} /></span>
              <h3>{achievement.title}</h3>
              <span className="achievement-company">{achievement.company}</span>
              <p>{achievement.desc}</p>
            </Reveal>
          );})}
        </div>
      </div>
    </section>
  );
}
