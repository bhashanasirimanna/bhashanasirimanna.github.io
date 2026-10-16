import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyMe from "@/components/sections/WhyMe";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <WhyMe />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
