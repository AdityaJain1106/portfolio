import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { blogs } from "../../data/blog";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPage() {
  return (
    <main className="main-part overflow-x-hidden" id="main-part" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <br />
      <section className="blog-section" style={{ flex: 1 }}>
        <h1>My Blog</h1>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="blog-card">
              <div className="blog-card-content">
                <h2>{blog.title}</h2>
                <p className="blog-subtitle">{blog.subtitle}</p>
                <p className="blog-date">{formatDate(blog.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}