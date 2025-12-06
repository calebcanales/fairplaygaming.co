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
            <img src="/images/text/site_logo.png" alt="Fairplay Gaming Commission" className="h-8 w-auto" />
            <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-bold text-gray-800 uppercase tracking-wider">
              <a href="#" className="hover:text-red-600 transition-colors">Investigations</a>
              <a href="#" className="hover:text-red-600 transition-colors">Scam Alerts</a>
              <a href="#" className="hover:text-red-600 transition-colors">Verified Sites</a>
              <a href="#" className="hover:text-red-600 transition-colors">Player Reports</a>
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
                <span>Investigation</span>
                <span>•</span>
                <span>Crypto Scams</span>
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

            {/* Featured Image - SAVAGE COMPARISON */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl border-4 border-red-600">
              <img 
                src="/images/text/hero_savage_final.png" 
                alt="Stake vs BetOnline Comparison" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={handlePlayClick}
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none space-y-10">
              
              {/* Intro Paragraph Image */}
              <img src="/images/text/para_intro.png" alt="Introduction" className="w-full" />

              {/* Section 1: Billionaire Owners */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_owners.png" alt="Billionaire Scam" className="h-10 w-auto mb-4" />
                
                {/* Cancelled Owners Graphic */}
                <div className="mb-6 relative group cursor-pointer" onClick={handlePlayClick}>
                  <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <img 
                    src="/images/owners_cancelled.png" 
                    alt="Owners Cancelled" 
                    className="w-full rounded-lg shadow-lg border border-gray-200" 
                  />
                  <p className="text-xs text-center text-gray-500 mt-2 italic">Stake.com founders Eddie and Bijan facing scrutiny</p>
                </div>

                <img src="/images/text/para_owners.png" alt="Owners Analysis" className="w-full mb-6" />
                <div className="bg-red-50 border-l-4 border-red-600 p-4 italic text-gray-700 font-serif">
                  "They're buying $50 million mansions while you lose your rent money on rigged plinko balls."
                </div>
              </div>

              {/* Section 2: Targeting Youth */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_youth.png" alt="Predatory Tactics" className="h-10 w-auto mb-4" />
                <img src="/images/text/para_youth.png" alt="Youth Targeting" className="w-full mb-6" />
                <img src="/images/limbo_var08.png" alt="Gamified Gambling" className="w-full rounded-lg shadow-md border border-gray-200" />
              </div>

              {/* Section 3: Hidden House Edge */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_edge.png" alt="Hidden Edge" className="h-10 w-auto mb-4" />
                <img src="/images/text/para_edge.png" alt="RTP Manipulation" className="w-full mb-6" />
                
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

              {/* Section 4: The Safe Alternative */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_2.png" alt="Safe Alternative" className="h-8 w-auto mb-4" />
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <img 
                    src="/images/baccarat_var08.png" 
                    alt="Baccarat" 
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer"
                    onClick={handlePlayClick}
                  />
                  <div className="flex flex-col justify-center">
                    <img src="/images/text/para_live.png" alt="Live Dealer Description" className="w-full" />
                  </div>
                </div>
              </div>

              {/* Section 5: Conclusion */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_3.png" alt="Final Verdict" className="h-8 w-auto mb-4" />
                <img src="/images/text/para_sports.png" alt="Conclusion" className="w-full mb-6" />
                <img 
                  src="/images/text/sportsbook.png" 
                  alt="Sportsbook Banner" 
                  className="w-full rounded-lg cursor-pointer"
                  onClick={handlePlayClick}
                />
              </div>

              <Separator className="my-12" />

              {/* Comments Section (Fake Social Proof) */}
              <div className="space-y-8">
                <h3 className="font-sans font-bold text-xl uppercase tracking-wider">Discussion</h3>
                <div className="space-y-6">
                  {[
                    { user: "CryptoKing99", img: "comment_1.png", time: "2h ago" },
                    { user: "SarahJ", img: "comment_2.png", time: "5h ago" },
                    { user: "MikeT", img: "comment_3.png", time: "1d ago" }
                  ].map((comment, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 shrink-0">
                        {comment.user[0]}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">{comment.user}</span>
                          <span className="text-xs text-gray-400">• {comment.time}</span>
                        </div>
                        <img src={`/images/text/${comment.img}`} alt="Comment" className="h-auto w-full max-w-md opacity-80" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* --- Sidebar (Right) --- */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* "Ad" Widget - Updated to Direct Offer */}
            <div className="sticky top-24 space-y-8">
              <Card className="p-6 bg-gray-900 text-white border-none shadow-xl text-center overflow-hidden relative">
                {/* Glowing Effect Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  <img src="/images/text/brand_name_white.png" alt="Brand" className="h-10 w-auto mx-auto mb-6" />
                  
                  <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/10">
                    <img src="/images/roulette_banner.png" alt="Roulette" className="w-full rounded mb-4 shadow-lg" />
                    <div className="space-y-3">
                      <img src="/images/text/bonus_title.png" alt="Bonus" className="h-3 w-auto mx-auto invert opacity-80" />
                      <img src="/images/text/bonus_amount.png" alt="Amount" className="h-8 w-auto mx-auto drop-shadow-glow" />
                    </div>
                  </div>

                  <img 
                    src="/images/text/btn_play_now.png" 
                    alt="Play Now" 
                    className="h-16 w-auto mx-auto cursor-pointer hover:scale-105 transition-transform shadow-xl shadow-green-500/20"
                    onClick={handlePlayClick}
                  />
                  
                  <div className="mt-6 text-[10px] text-gray-500 font-sans">
                    T&Cs apply. 18+ only.
                  </div>
                </div>
              </Card>

              {/* Related Articles Widget */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-sans font-bold text-gray-900 uppercase tracking-wider mb-4">Related Stories</h3>
                <ul className="space-y-6">
                  {[
                    { img: "related_1.png", cat: "Strategy" },
                    { img: "related_2.png", cat: "Safety" },
                    { img: "related_3.png", cat: "Banking" }
                  ].map((item, i) => (
                    <li key={i} className="group cursor-pointer" onClick={handlePlayClick}>
                      <div className="text-xs font-bold text-red-600 mb-1 uppercase">{item.cat}</div>
                      <img src={`/images/text/${item.img}`} alt="Related" className="w-full group-hover:opacity-70 transition-opacity" />
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
              The industry's leading watchdog for online gaming fairness. 
              Exposing scams and verifying legitimate platforms since 2025.
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
          &copy; 2025 Fairplay Gaming Commission. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
