import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Industries We Support - Trades, Healthcare & More',
  description: 'AlphaLink provides specialized call answering services for trades, healthcare, property, and online businesses. Industry-focused solutions tailored to your needs.',
  keywords: ['call answering for trades', 'call answering for plumbers', 'call answering for healthcare', 'call answering for property', 'industry-specific call centre'],
  canonical: 'https://www.alphalinkcall.com.au/industries',
  ogImage: 'https://www.alphalinkcall.com.au/alpha6.webp',
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
