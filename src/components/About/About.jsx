import { BriefcaseBusiness, GraduationCap, Languages, MapPin } from "lucide-react";
import { Reveal, SectionHeader } from "../UI";

const highlights = [
  { icon: GraduationCap, label: "Education", text: "B.Tech – Information Technology\nNoorul Islam Centre For Higher Education · CGPA 7.64" },
  { icon: MapPin, label: "Location", text: "Chennai, Tamil Nadu\nOpen to remote & hybrid roles" },
  { icon: Languages, label: "Languages", text: "English · Tamil · Malayalam" },
  { icon: BriefcaseBusiness, label: "Expertise", text: "Backend Engineering\nGen AI & LLM Systems\nEnterprise Automation" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          label="// who_am_i"
          title="About Me"
          sub="A results-driven engineer turning complex problems into elegant, scalable solutions"
        />

        <div className="about-layout">
          <Reveal className="about-story">
            <p>
              I&apos;m a <strong>Python Full Stack Developer &amp; Gen AI Engineer</strong> with <strong>3+ years</strong> of experience building production-grade backend systems, AI-powered automation pipelines, and real-time intelligent applications. At <strong>Droidal</strong>, I architect end-to-end solutions from REST APIs to LLM-integrated voice agent platforms.
            </p>
            <p>
              I specialize in <strong>Gemini LLM, RAG pipelines, LangChain, and ChromaDB</strong>, and real-time telephony systems (LiveKit + Twilio). I&apos;ve delivered <strong>8 AI automation agents</strong> processing 1,500+ records daily — earning the <strong>Employee of the Month</strong> recognition.
            </p>
          </Reveal>

          <div className="about-facts">
            {highlights.map(({ icon: Icon, label, text }, index) => (
              <Reveal className="fact-card" delay={index * 0.05} key={label}>
                <Icon size={20} />
                <div><span>{label}</span><p>{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
