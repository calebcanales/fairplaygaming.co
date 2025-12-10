import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Share2, MessageCircle, Bookmark, ThumbsUp } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

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
            <img src="/images/logo_dark.png" alt="Fairplay Gaming Commission" className="h-12 w-auto" />
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

            {/* Featured Image - CANCELLED OWNERS */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl border-4 border-red-600">
              <img 
                src="/images/owners_cancelled_user.png" 
                alt="Stake Owners Cancelled" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={handlePlayClick}
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none space-y-10">
              
              {/* Intro Paragraph Image */}
              <img src="/images/text/para_intro.png" alt="Introduction" className="w-full" />

              {/* BetOnline Originals Section */}
              <div className="py-8">
                <h3 className="font-sans font-bold text-xl uppercase tracking-wider mb-4">BetOnline Originals</h3>
                <img 
                  src="/images/originals_collection_user.png" 
                  alt="BetOnline Originals Games" 
                  className="w-full rounded-xl shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic text-center">
                  Exclusive provably fair games available only at BetOnline.
                </p>
              </div>

              {/* Section 1: Billionaire Owners */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_owners.png" alt="Billionaire Scam" className="h-10 w-auto mb-4" />
                
                

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
                
                {/* RTP Meter Widget */}
                <div className="my-8 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="shrink-0">
                      <img src="/images/rtp_meter.png" alt="High Win Rate" className="w-64 h-auto" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-sans font-bold text-lg text-gray-900">Verified Fair Play</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Unlike unregulated crypto casinos that can manipulate RTP (Return to Player) on the fly, BetOnline operates under strict oversight. Our independent tests confirmed a consistent <strong>98.4% RTP</strong> across their slot catalog.
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-green-600 uppercase tracking-wider">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        Live Audit Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: The Safe Alternative */}
              <div className="pt-4">
                <img src="/images/text/article_subhead_2.png" alt="Safe Alternative" className="h-8 w-auto mb-4" />
                
                {/* Game Comparison Table */}
                <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <div className="bg-gray-900 p-4 text-white font-bold text-center uppercase tracking-wider text-sm">
                    Fair Game Comparison
                  </div>
                  <div className="bg-white p-6">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm font-bold border-b border-gray-100 pb-4 mb-4">
                      <div className="text-gray-400 text-left">Game Type</div>
                      <div className="text-red-500">Stake.com</div>
                      <div className="text-green-600">BetOnline</div>
                    </div>
                    
                    {[
                      { game: "Plinko", stake: "Rigged (Scripted)", bol: "Provably Fair" },
                      { game: "Crash", stake: "Low Multipliers", bol: "High Variance" },
                      { game: "Blackjack", stake: "Bot Dealers", bol: "Live Humans" },
                      { game: "Slots", stake: "94% RTP (Hidden)", bol: "98% RTP (Verified)" },
                      { game: "Poker", stake: "N/A", bol: "Global Tournaments" }
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-50 last:border-0 items-center">
                        <div className="font-bold text-gray-800 text-left">{row.game}</div>
                        <div className="text-red-500 font-medium">{row.stake}</div>
                        <div className="text-green-700 font-bold flex items-center justify-center gap-1">
                          <ThumbsUp className="h-3 w-3" /> {row.bol}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-3 text-center text-xs text-gray-500 border-t border-gray-100">
                    *Data verified by independent audit (Dec 2025)
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <img 
                    src="/images/baccarat_var08.png" 
                    alt="Baccarat" 
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
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
                  src="/images/sportsbook.png" 
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
            
            {/* Operator Data Card - Professional & Trust-Focused */}
            <div className="sticky top-24 space-y-8">
              <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-[#1a1a1a] p-4 text-center">
                  <h3 className="text-white font-sans font-bold text-lg tracking-wide">Verified Operator</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-gray-500 font-serif text-sm">Trust Score</span>
                    <span className="text-green-600 font-bold text-xl flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div> 9.8/10
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-gray-500 font-serif text-sm">License</span>
                    <div className="flex items-center gap-2">
                      <img src="/images/text/site_logo.png" alt="License" className="h-3 w-auto opacity-50" />
                      <span className="text-gray-900 font-bold text-sm">Verified</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-gray-500 font-serif text-sm">Payout Speed</span>
                    <span className="text-gray-900 font-bold text-sm">~12 Mins</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Exclusive Offer</div>
                    <img src="/images/text/bonus_title.png" alt="50% Match Bonus" className="h-6 w-auto mx-auto" />
                    <img src="/images/text/bonus_amount.png" alt="Up to $1,000 Free Play" className="h-5 w-auto mx-auto" />
                    <div className="pt-2">
                      <img src="/images/text/promo_code.png" alt="Code: BOL1000" className="h-4 w-auto mx-auto opacity-70" />
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg shadow-md transition-all hover:scale-[1.02]"
                    onClick={handlePlayClick}
                  >
                    <img src="/images/text/btn_visit.png" alt="Visit Official Site" className="h-5 w-auto" />
                  </Button>
                </div>
              </Card>

              {/* Trending Scams List */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-sans font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                  Active Alerts
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-600 hover:text-red-600 cursor-pointer transition-colors">
                    <span className="text-red-500 font-bold">1.</span>
                    Stake.com "RTP Glitch" Reports
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 hover:text-red-600 cursor-pointer transition-colors">
                    <span className="text-red-500 font-bold">2.</span>
                    Roobet Withdrawal Delays
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 hover:text-red-600 cursor-pointer transition-colors">
                    <span className="text-red-500 font-bold">3.</span>
                    Fake "Guru" Signal Groups
                  </li>
                </ul>
              </div>
            </div>

          </aside>

        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container text-center space-y-6">
          <img src="/images/logo_dark.png" alt="Fairplay Gaming Commission" className="h-10 w-auto object-contain mx-auto" />
          <div className="flex justify-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <p className="text-gray-600 text-xs max-w-md mx-auto">
            © 2025 Fairplay Gaming Commission. All rights reserved. 
            Gambling involves financial risk and is addictive. Play responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
