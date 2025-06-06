import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";

const unsplashImages: Record<string, string> = {
  "customer-service-trends": "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=800&q=80",
  "call-center-outsourcing": "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
  "first-call-resolution": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
};
const fallbackImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  // Remove .md if present in the slug
  let slug = await params.slug;
  if (slug.endsWith('.md')) slug = slug.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const imageUrl = unsplashImages[slug] || fallbackImage;
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: data.title }]} />
      <img src={imageUrl} alt={data.title || slug} className="w-full h-64 object-cover rounded-xl mb-8 shadow" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
      <div className="text-gray-600 text-sm mb-8">{data.date}</div>
      <article className="prose prose-blue max-w-none text-gray-900" dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
