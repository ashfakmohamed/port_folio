import { ArrowUpRight, AudioLines, BarChart3, DatabaseZap, Github, Workflow } from "lucide-react";
import { projects } from "../../data";
import { Badge, Reveal, SectionHeader } from "../UI";

const projectIcons = [AudioLines, DatabaseZap, Workflow, BarChart3];

export default function Projects() {
  return (
    <section id="projects" className="section section--tinted">
      <div className="container">
        <SectionHeader
          label="// portfolio"
          title="Featured Projects"
          sub="Enterprise systems built at production scale with real business impact"
        />

        <div className="projects-list">
          {projects.map((project, index) => {
            const Icon = projectIcons[index];
            return (
            <Reveal className={`project-card ${index === 0 ? "is-featured" : ""}`} delay={index * 0.05} key={project.title}>
              <div className="project-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i>{index === 0 ? "Featured case study" : project.category}</i>
              </div>
              <div className="project-main">
                <header>
                  <span className="project-icon" aria-hidden="true"><Icon size={20} /></span>
                  <h3>{project.title}</h3>
                </header>
                <p className="project-description">{project.desc}</p>
                <div className="project-impact"><span>Impact</span><p>{project.impact}</p></div>
                <div className="project-architecture"><span>Architecture</span><p>{project.architecture}</p></div>
                {project.repo && (
                  <a className="button project-repo-link" href={project.repo} target="_blank" rel="noreferrer">
                    <Github size={17} /> {project.repoLabel || "View repository"} <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <div className="project-details">
                <span className="detail-label">Key capabilities</span>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="badge-list">{project.stack.map((item) => <Badge text={item} key={item} />)}</div>
              </div>
            </Reveal>
          );})}
        </div>
      </div>
    </section>
  );
}
