import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  return (
    <main className="main-part overflow-x-hidden" id="main-part">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}
