import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'AlphaLink - Empowering Your Business, One Call at a Time',
  description: 'Professional 24/7 call answering services for Australian businesses. Never miss a customer call with AlphaLink\'s flexible, affordable call centre solutions. Starting from $199/month.',
  keywords: ['call answering service', '24/7 call answering', 'virtual receptionist', 'call centre Australia'],
  canonical: 'https://www.alphalinkcall.com.au',
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
