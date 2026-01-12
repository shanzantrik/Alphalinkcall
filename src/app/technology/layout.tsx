import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Technology & AI-Powered Call Routing Solutions',
  description: 'Explore AlphaLink\'s cutting-edge technology: AI-powered call routing, virtual customer support, omnichannel solutions, and seamless integrations. Built to empower your business.',
  keywords: ['AI call routing', 'virtual customer support', 'call centre technology', 'omnichannel support', 'CRM integration'],
  canonical: 'https://www.alphalinkcall.com.au/technology',
  ogImage: 'https://www.alphalinkcall.com.au/alpha5.webp',
});

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
