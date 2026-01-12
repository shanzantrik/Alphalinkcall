import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About AlphaLink - Our Story & Mission',
  description: 'Learn about AlphaLink\'s journey. Aussie-based, globally fulfilled call answering services built by business owners for business owners. Starting from $199/month with no long contracts.',
  keywords: ['about alphalink', 'call centre australia', 'virtual receptionist australia', 'business call answering'],
  canonical: 'https://www.alphalinkcall.com.au/about',
  ogImage: 'https://www.alphalinkcall.com.au/about1.webp',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
