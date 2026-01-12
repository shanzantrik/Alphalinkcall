import { Metadata } from 'next';

const siteUrl = 'https://www.alphalinkcall.com.au';
const siteName = 'AlphaLink - Call Answering Services';
const defaultTitle = 'AlphaLink - Empowering Your Business, One Call at a Time';
const defaultDescription = 'Professional 24/7 call answering services for Australian businesses. Never miss a customer call with AlphaLink\'s flexible, affordable call centre solutions. Starting from $199/month.';
const defaultKeywords = [
  'call answering service',
  '24/7 call answering',
  'virtual receptionist',
  'call centre Australia',
  'after hours call handling',
  'overflow call support',
  'call answering for trades',
  'call answering for plumbers',
  'call answering for electricians',
  'call answering for healthcare',
  'professional call answering',
  'Australian call centre',
  'fractional call centre',
  'call centre outsourcing',
  'customer service Australia',
  'phone answering service',
  'business call handling',
  'call centre services',
  'virtual call centre',
  'AI-powered call routing',
  'omnichannel support',
  'call centre integration',
  'CRM integration',
  'appointment booking service',
  'emergency call dispatch',
];

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = `${siteUrl}/alpha1.webp`,
    ogType = 'website',
    noindex = false,
    nofollow = false,
  } = config;

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const allKeywords = [...defaultKeywords, ...keywords].join(', ');
  const canonicalUrl = canonical || siteUrl;

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: 'AlphaLink' }],
    creator: 'AlphaLink',
    publisher: 'AlphaLink',
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'en_AU',
      url: canonicalUrl,
      siteName: siteName,
      title: fullTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: '@alphalinkcall',
      site: '@alphalinkcall',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(siteUrl),
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
    },
    category: 'Business Services',
    classification: 'Call Answering Services',
    other: {
      'geo.region': 'AU-NSW',
      'geo.placename': 'Sydney',
      'geo.position': '-33.8688;151.2093',
      'ICBM': '-33.8688, 151.2093',
    },
  };
}

export const defaultSEO = generateMetadata();
