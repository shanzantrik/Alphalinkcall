import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service - AlphaLink',
  description: 'AlphaLink\'s Terms of Service govern the use of our call answering and support services. Read our terms and conditions.',
  keywords: ['terms of service', 'terms and conditions'],
  canonical: 'https://www.alphalinkcall.com.au/terms',
  noindex: true,
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
