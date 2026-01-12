import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy - AlphaLink',
  description: 'AlphaLink\'s Privacy Policy outlines how we collect, use, store, and disclose your information in accordance with Australian Privacy Principles.',
  keywords: ['privacy policy', 'data protection', 'privacy'],
  canonical: 'https://www.alphalinkcall.com.au/privacy',
  noindex: true,
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
