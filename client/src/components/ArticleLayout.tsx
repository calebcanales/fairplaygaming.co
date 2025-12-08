import { ReactNode, useEffect } from "react";
import { BonusBox } from "./BonusBox";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { SEO, generateArticleStructuredData, generateFAQStructuredData } from "./SEO";

interface ArticleLayoutProps {
  // SEO Meta
  metaTitle: string;
  metaDescription: string;
  
  // Article Content
  title: string;
  subtitle?: string;
  publishDate: string;
  updatedDate?: string;
  author?: string;
  category: string;
  
  // Table of Contents
  tableOfContents: { id: string; title: string; level: number }[];
  
  // Main Content
  children: ReactNode;
  
  // FAQ Section
  faqs?: { question: string; answer: string }[];
  
  // Internal Links
  relatedArticles?: { title: string; url: string; description: string }[];
}

export function ArticleLayout({
  metaTitle,
  metaDescription,
  title,
  subtitle,
  publishDate,
  updatedDate,
  author = "Fairplay Gaming Commission",
  category,
  tableOfContents,
  children,
  faqs,
  relatedArticles,
}: ArticleLayoutProps) {
  
  // Generate structured data
  const articleStructuredData = generateArticleStructuredData({
    headline: title,
    description: metaDescription,
    url: typeof window !== 'undefined' ? window.location.href : '',
    publishDate: new Date(publishDate).toISOString(),
    imageUrl: "https://fairplaygaming.com/images/shield-logo.png"
  });

  const faqStructuredData = faqs && faqs.length > 0 ? generateFAQStructuredData(faqs) : null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={metaTitle}
        description={metaDescription}
        type="article"
        publishedTime={new Date(publishDate).toISOString()}
        section={category}
        structuredData={faqStructuredData || articleStructuredData}
      />
      {/* Article Header */}
      <div className="bg-white border-b">
        <div className="container max-w-5xl py-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="uppercase font-bold text-red-600">{category}</span>
            <span>•</span>
            <span>{publishDate}</span>
            {updatedDate && (
              <>
                <span>•</span>
                <span>Updated: {updatedDate}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
            <span>By {author}</span>
            <span>•</span>
            <span>Fairplay Gaming Commission</span>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar - Hero Bonus Box (Sticky) */}
          <aside className="lg:col-span-4 order-1 lg:order-2">
            <BonusBox variant="hero" />
          </aside>
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 order-2 lg:order-1">
            
            {/* Table of Contents */}
            <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
              <h2 className="font-bold text-lg mb-4 text-blue-900">Table of Contents</h2>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className={`block text-blue-700 hover:text-blue-900 hover:underline transition-colors ${
                      item.level === 3 ? 'pl-4 text-sm' : 'font-medium'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </Card>
            
            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
            
            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
              <div className="mt-16" id="faq">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Final CTA */}
            <BonusBox variant="final" />
            
            {/* Related Articles */}
            {relatedArticles && relatedArticles.length > 0 && (
              <div className="mt-16">
                <Separator className="mb-8" />
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((article, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <a href={article.url} className="block">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {article.description}
                        </p>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
          </article>
          
        </div>
      </div>
    </div>
  );
}
