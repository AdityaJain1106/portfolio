import Navbar from "../../components/Navbar";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer";

export default function AchievementsPage() {
  return (
    <main className="main-part overflow-x-hidden" id="main-part">
      <Navbar />
      <Experience defaultTab="divc1" showTabs={false} />
      <Footer />
    </main>
  );
}
