"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AlphaLink",
    "alternateName": "AlphaLink Call Answering Services",
    "url": "https://www.alphalinkcall.com.au",
    "logo": "https://www.alphalinkcall.com.au/alpha1.webp",
    "description": "Professional 24/7 call answering services for Australian businesses. Never miss a customer call with AlphaLink's flexible, affordable call centre solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 York St",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-425285597",
      "contactType": "Customer Service",
      "areaServed": "AU",
      "availableLanguage": ["en", "en-AU"]
    },
    "sameAs": [
      "https://www.instagram.com/alphalinkcall",
      "https://x.com/alphalinkcall",
      "https://www.facebook.com/share/1Ar4f228He/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Call Answering Service",
    "provider": {
      "@type": "Organization",
      "name": "AlphaLink"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Call Answering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Call Answering",
            "description": "Round-the-clock professional call answering service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "After-Hours Call Handling",
            "description": "Night, weekend, and public holiday coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Overflow Call Support",
            "description": "Backup when you're flat out"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM Integration",
            "description": "Seamless integration with your existing systems"
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.alphalinkcall.com.au",
    "name": "AlphaLink",
    "image": "https://www.alphalinkcall.com.au/alpha1.webp",
    "description": "Professional call answering services for Australian businesses",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 York St",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8688,
      "longitude": 151.2093
    },
    "url": "https://www.alphalinkcall.com.au",
    "telephone": "+61425285597",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
