import AboutMe from "../components/AboutMe";
import PersonalInf from "../components/PersonalInf";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
      <AboutMe />
      <PersonalInf />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </div>
  );
}
