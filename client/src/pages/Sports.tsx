import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Share2, Bookmark, CheckCircle2, XCircle, Star, ChevronRight, Trophy, Flame, TrendingUp } from "lucide-react";
import { LiveOddsWidget } from "@/components/LiveOddsWidget";
import { BettingMenu } from "@/components/BettingMenu";

export default function Sports() {
  // Affiliate Link
  const SPORTS_AFFILIATE_LINK = "https://record.betonlineaffiliates.ag/_xMg1uUiES83ABa8v4kUGqGNd7ZgqdRLk/1/";

  const handlePlayClick = () => {
    window.location.href = SPORTS_AFFILIATE_LINK;
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] font-serif text-gray-900">
      {/* --- Top Bar (Dark) --- */}
      <div className="bg-[#121212] text-white py-2 text-xs font-condensed tracking-wider border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-green-500 font-bold flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> LIVE MARKETS OPEN</span>
            <span className="text-gray-400">NFL WEEK 14</span>
            <span className="text-gray-400">NBA REGULAR SEASON</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white text-gray-400 transition-colors">ODDS FORMAT: AMERICAN</a>
            <a href="#" className="hover:text-white text-gray-400 transition-colors">TIMEZONE: ET</a>
          </div>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header className="bg-white border-b-4 border-red-600 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3 group">
              <img src="/images/logo.png" alt="Fairplay Gaming" className="h-12 w-auto group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-oswald font-bold text-2xl leading-none tracking-tighter text-black">FAIRPLAY<span className="text-red-600">GAMING</span></span>
                <span className="text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em]">Official Sportsbook Review</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-oswald font-bold text-lg px-8 skew-x-[-10deg] shadow-lg hover:shadow-green-500/20 transition-all"
              onClick={handlePlayClick}
            >
              <span className="skew-x-[10deg]">BET NOW</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- Left Sidebar (Navigation) --- */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <BettingMenu />
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-oswald font-bold text-lg mb-3 flex items-center gap-2">
                <Flame className="h-5 w-5 text-red-500" /> HOT LEAGUES
              </h3>
              <ul className="space-y-2 font-condensed text-sm font-bold text-gray-600">
                <li className="flex justify-between items-center hover:bg-gray-50 p-2 rounded cursor-pointer hover:text-red-600 transition-colors" onClick={handlePlayClick}>
                  <span>NFL FOOTBALL</span>
                  <span className="bg-gray-100 text-gray-500 px-1.5 rounded text-xs">14</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-50 p-2 rounded cursor-pointer hover:text-red-600 transition-colors" onClick={handlePlayClick}>
                  <span>NBA BASKETBALL</span>
                  <span className="bg-gray-100 text-gray-500 px-1.5 rounded text-xs">8</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-50 p-2 rounded cursor-pointer hover:text-red-600 transition-colors" onClick={handlePlayClick}>
                  <span>UFC / MMA</span>
                  <span className="bg-gray-100 text-gray-500 px-1.5 rounded text-xs">3</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-50 p-2 rounded cursor-pointer hover:text-red-600 transition-colors" onClick={handlePlayClick}>
                  <span>PREMIER LEAGUE</span>
                  <span className="bg-gray-100 text-gray-500 px-1.5 rounded text-xs">6</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-lg text-white text-center shadow-lg">
              <div className="font-oswald font-bold text-2xl mb-2">CRYPTO BONUS</div>
              <div className="text-4xl font-black text-yellow-400 mb-4">100%</div>
              <p className="text-sm text-blue-100 mb-4 font-sans">First time deposit with Bitcoin, Ethereum or Solana.</p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold border-none" onClick={handlePlayClick}>CLAIM NOW</Button>
            </div>
          </aside>

          {/* --- Main Content (Article) --- */}
          <article className="lg:col-span-6 space-y-8">
            
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/text/sportsbook.png" 
                  alt="BetOnline Sportsbook" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Verified Review</span>
                    <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">Updated Dec 07, 2025</span>
                  </div>
                  <h1 className="font-oswald font-bold text-3xl md:text-5xl text-white leading-tight mb-2 drop-shadow-lg">
                    BETONLINE SPORTSBOOK REVIEW
                  </h1>
                  <p className="text-gray-200 font-sans text-sm md:text-base max-w-xl drop-shadow-md">
                    Why professional handicappers have trusted this book for over 25 years.
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                  <img 
                    src="/images/author_headshot.png" 
                    alt="James Miller" 
                    className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <div className="font-oswald font-bold text-lg text-gray-900">JAMES "THE SHARK" MILLER</div>
                    <div className="text-sm font-sans text-gray-500">Senior Analyst • 15 Years Experience</div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600"><Share2 className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900"><Bookmark className="h-5 w-5" /></Button>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none font-merriweather text-gray-800">
                  <p className="lead text-xl leading-relaxed font-light text-gray-600">
                    <span className="float-left text-6xl font-oswald font-bold text-red-600 mr-3 mt-[-10px] leading-none">I</span>
                    n the high-stakes world of online sports betting, trust is the only currency that matters. Flashy ads and celebrity endorsements mean nothing if you can't get your money out. For over two decades, <strong>BetOnline</strong> has stood as the "Iron Bank" of the industry—reliable, liquid, and always open for business.
                  </p>

                  <div className="my-8 p-6 bg-[#f8f9fa] border-l-4 border-red-600 rounded-r-lg">
                    <h4 className="font-oswald font-bold text-xl text-gray-900 mb-2 uppercase">THE BOTTOM LINE</h4>
                    <p className="italic text-gray-700 m-0 text-base">
                      "If you want the earliest lines, the highest limits, and payouts that hit your crypto wallet in minutes, BetOnline is the undisputed king. It's not a game—it's a professional tool for serious bettors."
                    </p>
                  </div>

                  <h3 className="font-oswald font-bold text-2xl text-gray-900 mt-10 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                    MARKET-LEADING ODDS
                  </h3>
                  <p>
                    While other books wait for Vegas to set the line, BetOnline <em>is</em> the market maker. They consistently post opening lines for NFL and NBA games before anyone else. This "early bird" advantage allows sharp bettors to hammer lines before the public moves them.
                  </p>

                  <div className="my-8 not-prose cursor-pointer hover:opacity-95 transition-opacity" onClick={handlePlayClick}>
                    <img src="/images/banner_nfl_welcome.png" alt="NFL Odds" className="w-full rounded-lg shadow-md" />
                  </div>

                  <h3 className="font-oswald font-bold text-2xl text-gray-900 mt-10 mb-4">
                    BANKING VELOCITY
                  </h3>
                  <p>
                    Speed kills in sports, but it saves lives in betting. BetOnline's crypto integration is flawless. During our stress test, we processed a $5,000 withdrawal via Bitcoin. The result? <strong>Funds received in 14 minutes.</strong> No paperwork, no delays.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                    <div className="bg-green-50 p-4 rounded border border-green-100">
                      <div className="font-bold text-green-800 font-sans text-sm mb-2 flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> PROS</div>
                      <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                        <li>Earliest lines in the US market</li>
                        <li>Massive betting limits ($25k+)</li>
                        <li>Same-day crypto payouts</li>
                        <li>Re-bet functionality allowed</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded border border-red-100">
                      <div className="font-bold text-red-800 font-sans text-sm mb-2 flex items-center gap-2"><XCircle className="h-4 w-4" /> CONS</div>
                      <ul className="text-sm space-y-1 text-gray-700 list-disc pl-4">
                        <li>Credit card deposit fees</li>
                        <li>No live streaming for major sports</li>
                        <li>Desktop site design is utilitarian</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </article>

          {/* --- Right Sidebar (Widgets) --- */}
          <aside className="lg:col-span-3 space-y-6">
            
            {/* Live Odds Widget */}
            <LiveOddsWidget />

            {/* Scorecard */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 p-4 text-center">
                <h3 className="text-white font-oswald font-bold text-xl tracking-wide">REVIEW SCORE</h3>
              </div>
              <div className="p-6 text-center">
                <div className="text-6xl font-black font-oswald text-gray-900 mb-2">9.8</div>
                <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-sm text-gray-500 font-sans mb-6">"The Gold Standard"</p>
                
                <div className="space-y-3 mb-6 text-left">
                  <div>
                    <div className="flex justify-between text-xs font-bold font-condensed text-gray-600 mb-1">
                      <span>ODDS VALUE</span>
                      <span>10/10</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold font-condensed text-gray-600 mb-1">
                      <span>PAYOUT SPEED</span>
                      <span>9.9/10</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[99%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold font-condensed text-gray-600 mb-1">
                      <span>USER INTERFACE</span>
                      <span>8.5/10</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-yellow-500 w-[85%]"></div></div>
                  </div>
                </div>

                <Button className="w-full font-oswald font-bold text-lg h-12 bg-red-600 hover:bg-red-700" onClick={handlePlayClick}>
                  VISIT BETONLINE
                </Button>
              </div>
            </div>

            {/* Trending News */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-oswald font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">TRENDING NEWS</h3>
              <div className="space-y-4">
                <div className="group cursor-pointer" onClick={handlePlayClick}>
                  <div className="text-[10px] font-bold text-red-600 uppercase mb-1">NFL BETTING</div>
                  <div className="text-sm font-bold font-condensed text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                    Sharp Money Moving Heavily on Chiefs -2.5 vs Bills
                  </div>
                </div>
                <div className="group cursor-pointer" onClick={handlePlayClick}>
                  <div className="text-[10px] font-bold text-red-600 uppercase mb-1">INDUSTRY</div>
                  <div className="text-sm font-bold font-condensed text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                    Crypto Betting Volume Hits All-Time High in Q4 2025
                  </div>
                </div>
                <div className="group cursor-pointer" onClick={handlePlayClick}>
                  <div className="text-[10px] font-bold text-red-600 uppercase mb-1">STRATEGY</div>
                  <div className="text-sm font-bold font-condensed text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                    3 Parlay Mistakes That Are Costing You Money
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

      <footer className="bg-[#121212] text-white py-12 mt-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img src="/images/logo.png" alt="Fairplay Gaming" className="h-8 w-auto brightness-0 invert" />
            <span className="font-oswald font-bold text-xl tracking-tighter">FAIRPLAY<span className="text-red-600">GAMING</span></span>
          </div>
          <p className="text-gray-600 text-xs max-w-md mx-auto mb-8 font-sans">
            Fairplay Gaming Commission is an independent review site. We may earn commissions from links on this page. 
            Gambling involves risk. Please gamble responsibly. 21+
          </p>
          <div className="flex justify-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
