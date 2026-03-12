interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JointCommerce",
  "url": "https://jointcommerce.co",
  "logo": "https://jointcommerce.co/marketing/logos/logo-without-text.png",
  "description": "The leading commerce media platform connecting brands, retailers, and shoppers.",
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-949-698-2094",
    "contactType": "customer service",
    "email": "jointcommerce@jointcommerce.co"
  },
  "sameAs": [
    "https://www.linkedin.com/company/jointcommerce",
    "https://twitter.com/jointcommerce"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
};

// Website structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JointCommerce",
  "url": "https://jointcommerce.co",
  "description": "The leading commerce media platform connecting brands, retailers, and shoppers.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://jointcommerce.co/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Service structured data
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commerce Media Platform",
  "provider": {
    "@type": "Organization",
    "name": "JointCommerce"
  },
  "description": "Comprehensive commerce media platform connecting brands, retailers, and shoppers through innovative advertising solutions.",
  "serviceType": "Commerce Media Platform",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "JointCommerce Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Retail Media Solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Advertising Platform"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shopper Marketing Solutions"
        }
      }
    ]
  }
};