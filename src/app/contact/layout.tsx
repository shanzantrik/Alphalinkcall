import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact AlphaLink - Get Your Free Consultation',
  description: 'Ready to transform your call handling? Contact AlphaLink for a free consultation. Call +61 425285597, email info@alphalinkcall.com.au, or use our contact form.',
  keywords: ['contact alphalink', 'free consultation', 'call centre quote', 'call answering quote'],
  canonical: 'https://www.alphalinkcall.com.au/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
