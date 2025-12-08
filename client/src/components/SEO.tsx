import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "FairPlay Gaming Commission",
  section,
  tags = [],
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    
    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    
    if (canonical) {
      updateMetaTag("og:url", canonical, true);
      
      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Article-specific meta tags
    if (type === "article") {
      if (publishedTime) {
        updateMetaTag("article:published_time", publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag("article:modified_time", modifiedTime, true);
      }
      if (author) {
        updateMetaTag("article:author", author, true);
      }
      if (section) {
        updateMetaTag("article:section", section, true);
      }
      if (tags.length > 0) {
        tags.forEach(tag => {
          updateMetaTag("article:tag", tag, true);
        });
      }
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Optionally reset title when component unmounts
      // document.title = "FairPlay Gaming Commission";
    };
  }, [title, description, canonical, type, publishedTime, modifiedTime, author, section, tags, structuredData]);

  return null; // This component doesn't render anything
}

// Helper function to generate Article structured data
export function generateArticleStructuredData(params: {
  headline: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  imageUrl?: string;
}) {
  const {
    headline,
    description,
    url,
    publishDate,
    modifiedDate,
    author = "FairPlay Gaming Commission",
    imageUrl = "https://fairplaygaming.com/images/shield-logo.png"
  } = params;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://fairplaygaming.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FairPlay Gaming Commission",
      "logo": {
        "@type": "ImageObject",
        "url": imageUrl
      }
    },
    "image": imageUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

// Helper function to generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Helper function to generate BreadcrumbList structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
