import Hero         from "../components/Hero/Hero";
import About        from "../components/About/About";
import Skills       from "../components/Skills/Skills";
import Experience   from "../components/Experience/Experience";
import Projects     from "../components/Projects/Projects";
import Achievements from "../components/Achievements/Achievements";
import Contact      from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Achievements/>
      <Contact/>
    </>
  );
}
