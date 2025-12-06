import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Shield, Zap, Trophy, ArrowRight } from "lucide-react";

export default function Home() {
  // Affiliate Link
  const AFFILIATE_LINK = "https://promotions.betonline.ag/best-online-casino?btag=ubUlKh_Oaw6AaGdneVkaxWNd7ZgqdRLk&affid=114233";

  const handlePlayClick = () => {
    window.location.href = AFFILIATE_LINK;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* --- Header / Nav --- */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Text as Image for Compliance */}
            <img src="/images/text/brand_name.png" alt="Gaming Platform" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#fairness" className="hover:text-primary transition-colors">Fairness</a>
            <a href="#sports" className="hover:text-primary transition-colors">Sports</a>
            <a href="#casino" className="hover:text-primary transition-colors">Casino</a>
            <a href="#live" className="hover:text-primary transition-colors">Live Dealer</a>
          </nav>
          <Button 
            onClick={handlePlayClick}
            className="bg-[#84BD00] hover:bg-[#76a900] text-white font-bold uppercase tracking-wide"
          >
            Play Now
          </Button>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                  <Star className="mr-1 h-3 w-3 fill-primary" />
                  Top Rated Gaming Platform 2025
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-gray-900">
                  The Premier Destination for <span className="text-primary">Fair Gaming</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-[600px]">
                  Experience the highest RTP slots, no house edge games, and a world-class sportsbook. 
                  Join millions of players on the most trusted platform in the industry.
                </p>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Licensed & Regulated</p>
                      <p className="text-xs text-gray-500">100% Secure</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Instant Payouts</p>
                      <p className="text-xs text-gray-500">Crypto Friendly</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <img 
                    src="/images/text/btn_claim_bonus.png" 
                    alt="Claim Bonus" 
                    className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={handlePlayClick}
                  />
                  <div className="flex flex-col justify-center">
                    <img src="/images/text/bonus_title.png" alt="Welcome Bonus" className="h-5 w-auto mb-1 object-contain object-left" />
                    <img src="/images/text/bonus_amount.png" alt="Bonus Amount" className="h-6 w-auto object-contain object-left" />
                  </div>
                </div>
              </div>
              
              {/* Hero Image / Banner */}
              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
                <div className="relative rounded-2xl bg-gray-100 p-2 shadow-2xl ring-1 ring-gray-200">
                   <img 
                    src="/images/limbo_banner.png" 
                    alt="Limbo Game" 
                    className="w-full rounded-xl object-cover shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Game Spotlight: Limbo (No House Edge) --- */}
        <section id="fairness" className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <img src="/images/text/no_house_edge.png" alt="No House Edge" className="h-10 md:h-12 w-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Provably Fair Gaming</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Verify every result yourself. Our blockchain-backed technology ensures complete transparency 
                and fairness on every single bet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/images/limbo_square.png" 
                  alt="Limbo Gameplay" 
                  className="w-full max-w-md mx-auto rounded-xl shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  onClick={handlePlayClick}
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-2xl font-bold">Limbo: The Ultimate Multiplier</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 shrink-0" />
                    <span><strong>1,000,000x Max Win:</strong> Turn small bets into massive payouts instantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 shrink-0" />
                    <span><strong>Strategy Control:</strong> Set your own target multipliers and win chance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 shrink-0" />
                    <span><strong>Instant Action:</strong> No waiting for rounds. Play at your own pace.</span>
                  </li>
                </ul>
                <Button 
                  onClick={handlePlayClick}
                  size="lg"
                  className="bg-[#84BD00] hover:bg-[#76a900] text-white font-bold uppercase mt-4"
                >
                  Try Limbo Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Live Casino Section --- */}
        <section id="live" className="py-16 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar Banner */}
              <div className="hidden lg:block lg:col-span-1">
                <img 
                  src="/images/live_casino_tall.png" 
                  alt="Live Casino" 
                  className="h-full w-full object-cover rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={handlePlayClick}
                />
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Premium Live Dealer Experience</h2>
                  <p className="text-lg text-gray-600">
                    Immerse yourself in the action with professional dealers, HD streaming, and real-time interaction.
                    It's just like being on the casino floor, from the comfort of your home.
                  </p>
                </div>

                {/* Baccarat Feature */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="/images/baccarat_tall.png" 
                        alt="Baccarat" 
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center bg-gray-900 text-white">
                      <h3 className="text-2xl font-bold mb-2 text-[#84BD00]">Live Baccarat</h3>
                      <p className="text-gray-300 mb-6">
                        Experience the elegance of Baccarat with crystal-clear video and seamless betting interface.
                        High limits available for VIP players.
                      </p>
                      <Button 
                        onClick={handlePlayClick}
                        variant="outline"
                        className="self-start border-[#84BD00] text-[#84BD00] hover:bg-[#84BD00] hover:text-white"
                      >
                        Play Baccarat
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Roulette Banner */}
                <div className="w-full mt-8">
                  <img 
                    src="/images/roulette_banner.png" 
                    alt="Play Roulette" 
                    className="w-full rounded-xl shadow-md cursor-pointer hover:scale-[1.01] transition-transform"
                    onClick={handlePlayClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Sportsbook Section --- */}
        <section id="sports" className="py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <img src="/images/text/sportsbook.png" alt="Sportsbook" className="h-10 md:h-12 w-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Bet on Your Favorite Sports</h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Get the best odds on NFL, NBA, UFC, and more. Live betting, props, and futures available 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "NFL Football", icon: Trophy, desc: "Competitive lines on every game of the season." },
                { title: "NBA Basketball", icon: Trophy, desc: "Live betting on every quarter and player props." },
                { title: "UFC / MMA", icon: Trophy, desc: "Fight lines, round betting, and method of victory." }
              ].map((sport, i) => (
                <Card key={i} className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 transition-colors">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                      <sport.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{sport.title}</h3>
                    <p className="text-gray-400 mb-4">{sport.desc}</p>
                    <div 
                      className="flex items-center text-[#84BD00] font-semibold cursor-pointer hover:underline"
                      onClick={handlePlayClick}
                    >
                      View Odds <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA Footer --- */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white text-center">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Winning?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join today and claim your exclusive welcome package. Fast payouts, secure banking, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <img 
                src="/images/text/btn_play_now.png" 
                alt="Play Now" 
                className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform"
                onClick={handlePlayClick}
              />
            </div>
            <div className="mt-8 flex justify-center">
               <img src="/images/text/brand_name_white.png" alt="Brand" className="h-6 w-auto opacity-50" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 text-center text-xs text-gray-600">
        <div className="container">
          <p className="mb-4">
            &copy; 2025 Gaming Review. All rights reserved. 
            Gambling involves risk. Please gamble responsibly. 18+ only.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
