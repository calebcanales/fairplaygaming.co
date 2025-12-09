import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Share2, MessageCircle, Bookmark } from "lucide-react";
import { ReactNode } from "react";
import { BonusBox } from "./BonusBox";

interface ArticleLayoutProps {
  category: string;
  subcategory: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
  tableOfContents?: { id: string; title: string }[];
  children: ReactNode;
  faqs?: { question: string; answer: string }[];
}

export function ArticleLayout({
  category,
  subcategory,
  title,
  description,
  author = "Fairplay Gaming Commission",
  date = "Dec 08, 2025",
  tableOfContents,
  children,
  faqs
}: ArticleLayoutProps) {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      {/* --- News Site Header (Matching Homepage) --- */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img src="/images/logo_dark.png" alt="Fairplay Gaming Commission" className="h-12 w-auto cursor-pointer" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-bold text-gray-800 uppercase tracking-wider">
              <Link href="/investigations" className="hover:text-red-600 transition-colors">Investigations</Link>
              <Link href="/sports-analysis" className="hover:text-red-600 transition-colors">Sports Analysis</Link>
              <Link href="/scam-alerts" className="hover:text-red-600 transition-colors">Scam Alerts</Link>
              <Link href="/verified-sites" className="hover:text-red-600 transition-colors">Verified Sites</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex font-sans">Subscribe</Button>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 font-sans">Login</Button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- Main Article Column --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-red-600 uppercase tracking-wider">
                <span>{category}</span>
                <span>•</span>
                <span>{subcategory}</span>
              </div>
              
              {/* Article Title */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                {title}
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between border-y border-gray-100 py-4">
                <div className="text-sm text-gray-600">
                  <span className="font-bold">By {author}</span>
                  <span className="mx-2">•</span>
                  <span>Updated: {date}</span>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <Share2 className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                  <Bookmark className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                  <MessageCircle className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>

            {/* Table of Contents - NEUTRAL GRAY STYLING */}
            {tableOfContents && tableOfContents.length > 0 && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h2 className="font-bold text-lg mb-4 text-gray-900 font-sans uppercase tracking-wider">Table of Contents</h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-gray-700 hover:text-red-600 hover:underline transition-colors font-sans"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-10">
              {children}
            </div>

            {/* FAQ Section - NEUTRAL STYLING */}
            {faqs && faqs.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200" id="faq">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* --- Right Sidebar --- */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <BonusBox variant="hero" />
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-70">
            <img src="/images/logo_dark.png" alt="Fairplay Gaming Commission" className="h-8 w-auto grayscale" />
          </div>
          <p className="text-gray-600 text-xs max-w-md mx-auto mb-8 font-sans">
            Fairplay Gaming Commission is an independent review site. We may earn commissions from links on this page. 
            Please be aware that involvement in activities related to chance carries risk. Please engage responsibly. 21+
          </p>
          <div className="flex justify-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <a href="#" className="hover:text-gray-900">About Us</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
