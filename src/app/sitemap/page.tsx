import Link from "next/link";

export default function SitemapPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Sitemap</h1>
      <ul className="space-y-4 text-lg text-[#0054ab]">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/industries">Industries</Link></li>
        <li><Link href="/technology">Technology</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms of Service</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/sitemap.xml">XML Sitemap</Link></li>
        <li><Link href="/robots.txt">Robots.txt</Link></li>
      </ul>
    </div>
  );
}
