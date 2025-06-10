import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Image from "next/image";

export const metadata = {
  title: "Blog & Resources | InnoCall",
  description: "Read the latest insights, tips, and trends in customer service and call center management from InnoCall's experts.",
};

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

const unsplashImages: Record<string, string> = {
  "customer-service-trends": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "call-center-outsourcing": "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
  "first-call-resolution": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
};
const fallbackImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

function getPosts() {
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || content.slice(0, 120) + "...",
        imageUrl: unsplashImages[slug] || fallbackImage,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function Blog() {
  const posts = getPosts();
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Blog & Resources</h1>
      {posts.length === 0 && (
        <div className="bg-white rounded-xl shadow p-8 mb-8 text-center">
          <p className="text-gray-700 mb-2">No blog posts yet. Check back for regular updates!</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white rounded-xl shadow p-0 overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <Image src={post.imageUrl} alt={post.title} width={800} height={224} className="w-full h-56 object-cover" />
            </Link>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="text-gray-600 text-sm mb-2">{post.date}</div>
              <p className="text-gray-800 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-700 font-semibold hover:underline">Read more →</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/contact" className="inline-block px-8 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition">Contact Us for a Consultation</Link>
      </div>
    </div>
  );
}
