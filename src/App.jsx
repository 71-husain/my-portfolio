import Hero from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
      <div>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
  );
}
