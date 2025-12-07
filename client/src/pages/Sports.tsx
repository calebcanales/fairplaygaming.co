import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Share2, MessageCircle, Bookmark, ShieldCheck, TrendingUp, DollarSign } from "lucide-react";

export default function Sports() {
  // Affiliate Link
  const SPORTS_AFFILIATE_LINK = "https://record.betonlineaffiliates.ag/_xMg1uUiES83ABa8v4kUGqGNd7ZgqdRLk/1/";

  const handlePlayClick = () => {
    window.location.href = SPORTS_AFFILIATE_LINK;
  };

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      {/* --- Header --- */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/images/text/site_logo.png" alt="Fairplay Gaming Commission" className="h-12 w-auto" />
            <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-bold text-gray-800 uppercase tracking-wider">
              <a href="/" className="hover:text-red-600 transition-colors">Casino Investigation</a>
              <a href="/sports" className="text-red-600 border-b-2 border-red-600">Sports Analysis</a>
              <a href="#" className="hover:text-red-600 transition-colors">Verified Sites</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
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
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-green-600 uppercase tracking-wider">
                <span>Verified Review</span>
                <span>•</span>
                <span>Sports Betting Authority</span>
              </div>
              
              <h1 className="font-sans font-black text-4xl md:text-5xl leading-tight text-gray-900">
                BetOnline Sportsbook Review: The Most Trusted Name in Online Betting for 25+ Years
              </h1>
              
              <div className="flex items-center justify-between border-y border-gray-100 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div className="text-sm font-sans font-bold text-gray-700">By Senior Analyst</div>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <Share2 className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                  <Bookmark className="h-5 w-5 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              <img 
                src="/images/text/sportsbook.png" 
                alt="Sportsbook Interface" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white font-sans font-bold text-xl">
                  Industry Leader: Highest Limits, Fastest Payouts, and Best Odds
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none space-y-8">
              <p className="lead text-xl text-gray-600">
                For over two decades, one name has stood above the rest in the world of online sports betting. BetOnline isn't just another sportsbook; it's an institution. Known for the earliest lines, highest limits, and fastest payouts in the industry, it remains the top choice for both professional handicappers and casual fans alike.
              </p>

              {/* Point 1: Market Leading Odds */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-gray-900 mt-0">1. Market-Leading Odds & Early Lines</h3>
                    <p className="text-gray-700 mb-4">
                      BetOnline is famous for "setting the market." They are often the first sportsbook in the world to post opening lines for NFL, NBA, and major sporting events. This allows sharp bettors to lock in value before the rest of the market adjusts. Combined with reduced juice options, BetOnline offers mathematically superior value to players.
                    </p>
                    <img 
                      src="/images/banner_nfl_welcome.png" 
                      alt="NFL Welcome Bonus" 
                      className="w-full rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={handlePlayClick}
                    />
                  </div>
                </div>
              </div>

              {/* Point 2: VIP Treatment */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-gray-900 mt-0">2. High Limits & VIP Rewards</h3>
                    <p className="text-gray-700 mb-4">
                      Unlike newer "soft" books that limit winners, BetOnline welcomes action. They offer some of the highest betting limits in the industry, making them the preferred home for high-rollers. Their VIP program rewards loyalty with generous bonuses, reload offers, and dedicated account management.
                    </p>
                    <img 
                      src="/images/banner_vip_rewards.png" 
                      alt="VIP Rewards" 
                      className="w-full rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={handlePlayClick}
                    />
                  </div>
                </div>
              </div>

              {/* Point 3: Crypto Pioneer */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 p-3 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-gray-900 mt-0">3. The Crypto Betting Pioneer</h3>
                    <p className="text-gray-700 mb-4">
                      BetOnline was one of the first major sportsbooks to fully embrace cryptocurrency. They support a wide range of coins including Bitcoin, Ethereum, and Solana, offering instant deposits and same-day withdrawals. Their crypto-first approach ensures privacy, security, and speed for every transaction.
                    </p>
                    <img 
                      src="/images/banner_crypto_deposit.png" 
                      alt="Crypto Deposits" 
                      className="w-full rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={handlePlayClick}
                    />
                  </div>
                </div>
              </div>

              <div className="my-8">
                <Button 
                  className="w-full h-16 text-xl font-bold bg-green-600 hover:bg-green-700 shadow-lg"
                  onClick={handlePlayClick}
                >
                  Claim 50% Sports Welcome Bonus
                </Button>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Use Code: BOL1000 for up to $1,000 Free Play
                </p>
              </div>

            </div>
          </div>

          {/* --- Sidebar --- */}
          <aside className="lg:col-span-4 space-y-8">
            <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden sticky top-24">
              <div className="bg-gray-900 p-6 text-center">
                <h3 className="text-white font-bold text-xl">Sportsbook Rating</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-600">Odds Quality</span>
                  <span className="font-bold text-green-600">9.9/10</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-600">Betting Limits</span>
                  <span className="font-bold text-green-600">High</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-600">Live Betting</span>
                  <span className="font-bold text-green-600">Excellent</span>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-sm font-bold text-blue-800">New Player Offer</div>
                  <div className="text-2xl font-black text-gray-900 my-1">50% BONUS</div>
                  <div className="text-xs text-gray-500">Up to $1,000</div>
                </div>

                <Button className="w-full font-bold text-lg h-12" onClick={handlePlayClick}>
                  Bet Now
                </Button>
              </div>
            </Card>
          </aside>

        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container text-center space-y-4">
          <img src="/images/text/site_logo.png" alt="Fairplay Gaming Commission" className="h-8 w-auto mx-auto brightness-0 invert" />
          <p className="text-gray-500 text-sm">
            © 2025 Fairplay Gaming Commission. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
