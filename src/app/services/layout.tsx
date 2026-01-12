import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Call Answering Services - 24/7 Professional Support',
  description: 'Discover AlphaLink\'s flexible call answering services: fractional call centre, after-hours support, overflow handling, and seamless CRM integration. Never miss a call again.',
  keywords: ['call answering services', 'fractional call centre', 'after hours call handling', 'overflow call support', 'CRM integration'],
  canonical: 'https://www.alphalinkcall.com.au/services',
  ogImage: 'https://www.alphalinkcall.com.au/service1.webp',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
