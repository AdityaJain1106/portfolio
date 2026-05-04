import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { blogs } from "../../../data/blog";
import { notFound } from "next/navigation";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="main-part overflow-x-hidden" id="main-part" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section className="blog-post-section" style={{ flex: 1 }}>
        <article className="blog-post">
          <header className="blog-post-header">
            <h1>{blog.title}</h1>
            <p className="blog-subtitle">{blog.subtitle}</p>
            <p className="blog-date">{formatDate(blog.date)}</p>
          </header>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </section>
      <Footer />
    </main>
  );
}