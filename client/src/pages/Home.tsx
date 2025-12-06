import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Share2, MessageCircle, Bookmark, ThumbsUp } from "lucide-react";

export default function Home() {
  // Affiliate Link
  const AFFILIATE_LINK = "https://promotions.betonline.ag/best-online-casino?btag=ubUlKh_Oaw6AaGdneVkaxWNd7ZgqdRLk&affid=114233";

  const handlePlayClick = () => {
    window.location.href = AFFILIATE_LINK;
  };

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      {/* --- News Site Header --- */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Site Logo (Image) */}
            <img src="/images/text/site_logo.png" alt="Gaming Insider" className="h-8 w-auto" />
            <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-bold text-gray-800 uppercase tracking-wider">
              <a href="#" className="hover:text-red-600 transition-colors">News</a>
              <a href="#" className="hover:text-red-600 transition-colors">Reviews</a>
              <a href="#" className="hover:text-red-600 transition-colors">Strategy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Industry</a>
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
          
          {/* --- Main Article Column (Left) --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-red-600 uppercase tracking-wider">
                <span>Review</span>
                <span>•</span>
                <span>Online Gaming</span>
              </div>
              
              {/* Headline Image */}
              <img src="/images/text/article_headline.png" alt="Article Headline" className="w-full max-w-3xl" />
              
              {/* Meta Info Image */}
              <div className="flex items-center justify-between border-y border-gray-100 py-4">
                <img src="/images/text/article_meta.png" alt="Author Info" className="h-5 w-auto" />
                <div className="flex gap-4 text-gray-400">
                  <Share2 className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                  <Bookmark className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                  <MessageCircle className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
              <img 
                src="/images/limbo_banner.png" 
                alt="Featured Game" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={handlePlayClick}
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none space-y-8">
              
              {/* Intro Paragraph Image */}
              <img src="/images/text/para_intro.png" alt="Introduction" className="w-full" />

              {/* Subhead 1 */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_1.png" alt="Provably Fair" className="h-8 w-auto mb-4" />
                <img src="/images/text/para_limbo.png" alt="Limbo Description" className="w-full mb-6" />
                
                {/* In-Article Ad / CTA */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <ThumbsUp className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <img src="/images/text/bonus_title.png" alt="Bonus" className="h-4 w-auto mb-1" />
                      <img src="/images/text/bonus_amount.png" alt="Amount" className="h-5 w-auto" />
                    </div>
                  </div>
                  <img 
                    src="/images/text/btn_claim_bonus.png" 
                    alt="Claim" 
                    className="h-12 w-auto cursor-pointer hover:opacity-90"
                    onClick={handlePlayClick}
                  />
                </div>
              </div>

              {/* Subhead 2 */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_2.png" alt="Live Dealer" className="h-8 w-auto mb-4" />
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <img 
                    src="/images/baccarat_tall.png" 
                    alt="Baccarat" 
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer"
                    onClick={handlePlayClick}
                  />
                  <div className="flex flex-col justify-center">
                    <img src="/images/text/para_live.png" alt="Live Dealer Description" className="w-full" />
                  </div>
                </div>
              </div>

              {/* Subhead 3 */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_3.png" alt="Sportsbook" className="h-8 w-auto mb-4" />
                <img src="/images/text/para_sports.png" alt="Sports Description" className="w-full mb-6" />
                <img 
                  src="/images/text/sportsbook.png" 
                  alt="Sportsbook Banner" 
                  className="w-full rounded-lg cursor-pointer"
                  onClick={handlePlayClick}
                />
              </div>

            </div>
          </div>

          {/* --- Sidebar (Right) --- */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* "Ad" Widget */}
            <div className="sticky top-24 space-y-8">
              <Card className="p-6 bg-gray-900 text-white border-none shadow-xl text-center">
                <div className="mb-4 text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">Sponsored</div>
                <img src="/images/text/brand_name_white.png" alt="Brand" className="h-8 w-auto mx-auto mb-6" />
                <img src="/images/roulette_banner.png" alt="Roulette" className="w-full rounded mb-6" />
                <div className="space-y-2 mb-6">
                  <img src="/images/text/bonus_title.png" alt="Bonus" className="h-4 w-auto mx-auto invert" />
                  <img src="/images/text/bonus_amount.png" alt="Amount" className="h-6 w-auto mx-auto" />
                </div>
                <img 
                  src="/images/text/btn_play_now.png" 
                  alt="Play Now" 
                  className="h-14 w-auto mx-auto cursor-pointer hover:scale-105 transition-transform"
                  onClick={handlePlayClick}
                />
                <div className="mt-4 text-xs text-gray-500">
                  T&Cs apply. 18+ only.
                </div>
              </Card>

              {/* "Trending" List (Fake) */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-sans font-bold text-gray-900 uppercase tracking-wider mb-4">Trending Now</h3>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex gap-4 items-start group cursor-pointer">
                      <span className="text-2xl font-bold text-gray-300 group-hover:text-red-500 font-sans">{i}</span>
                      <div className="h-3 bg-gray-200 rounded w-full mt-2 group-hover:bg-gray-300 transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </aside>

        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white py-12 mt-12 font-sans">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <img src="/images/text/site_logo.png" alt="Logo" className="h-6 w-auto invert mb-4" />
            <p className="text-gray-400 text-sm max-w-sm">
              The leading source for independent gaming news, reviews, and strategy. 
              Dedicated to transparency and player advocacy since 2025.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Reviews</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="container text-center text-xs text-gray-500">
          &copy; 2025 Gaming Insider. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
