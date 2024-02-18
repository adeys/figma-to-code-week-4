import Header from "./components/header.jsx";
import HeroSection from "./sections/hero-section.jsx";
import Footer from "./components/footer.jsx";
import SkillSection from "./sections/skill-section.jsx";
import ExperienceSection from "./sections/experience-section.jsx";
import AboutSection from "./sections/about-section.jsx";
import ProjectSection from "./sections/projects-section.jsx";
import TestimonialSection from "./sections/testimonal-section.jsx";
import ContactSection from "./sections/contact-section.jsx";

export function App() {

  return (
    <>
      <Header/>

      <main>
        <HeroSection />
        <SkillSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectSection />
        <TestimonialSection />
        <ContactSection />
      </main>

      <Footer/>
    </>
  )
}
