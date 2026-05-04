import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="main-part overflow-x-hidden" id="main-part">
      <Navbar />
      <Hero />
      <About />
      <Projects limit={5} showButton />
      <Experience expLimit={2} achLimit={3} showMoreLinks />
      <Contact />
      <Footer />
    </main>
  );
}
