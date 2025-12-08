import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";

interface BonusBoxProps {
  variant: "hero" | "mid" | "final";
  affiliateLink?: string;
}

export function BonusBox({ variant, affiliateLink = "https://promotions.betonline.ag/best-online-casino?btag=ubUlKh_Oaw6AaGdneVkaxWNd7ZgqdRLk&affid=114233/1/" }: BonusBoxProps) {
  
  const handleClick = () => {
    window.location.href = affiliateLink;
  };

  // Hero Bonus Box (Top 20% of Article)
  if (variant === "hero") {
    return (
      <Card className="sticky top-24 bg-gradient-to-br from-green-50 to-white border-2 border-green-600 shadow-xl overflow-hidden">
        <div className="bg-[#1a1a1a] p-4 text-center relative">
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            VERIFIED
          </div>
          <h3 className="text-white font-sans font-bold text-lg tracking-wide flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-green-400" />
            FairPlayGaming Editor's Choice
          </h3>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-center">
            <img 
              src="/images/text/site_logo.png" 
              alt="BetOnline" 
              className="h-8 w-auto opacity-90"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 font-medium">Fastest crypto withdrawals</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 font-medium">Best odds accuracy (commission verified)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 font-medium">Transparent terms</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 font-medium">Trusted for 20+ years</span>
            </div>
          </div>

          {/* Bonus offer using PNG images for compliance */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Exclusive Offer</div>
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/images/text/bonus_50_welcome.png" 
                alt="Welcome Offer" 
                className="h-8 w-auto"
              />
              <img 
                src="/images/text/bonus_up_to_1000.png" 
                alt="Bonus Amount" 
                className="h-7 w-auto"
              />
            </div>
            <div className="pt-2">
              <img 
                src="/images/text/promo_code.png" 
                alt="Promo Code" 
                className="h-4 w-auto mx-auto"
              />
            </div>
          </div>

          {/* CTA button with PNG text */}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-14 shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 relative overflow-hidden"
            onClick={handleClick}
          >
            <img 
              src="/images/text/cta_play_now_verified.png" 
              alt="Play Now" 
              className="h-5 w-auto relative z-10"
            />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Commission-verified speed • Instant crypto withdrawals
          </p>
        </div>
      </Card>
    );
  }

  // Mid-Article Bonus Box
  if (variant === "mid") {
    return (
      <Card className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-600 shadow-lg">
        <div className="p-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <TrendingUp className="h-6 w-6" />
            <h4 className="font-sans font-bold text-xl">Recommended by FairPlayGaming Analysts</h4>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            After testing major sportsbooks, <strong className="text-blue-700">BetOnline ranked #1</strong> in speed and odds reliability.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>98.4% Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>~12 Min Average</span>
            </div>
          </div>

          {/* CTA button with PNG text */}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 shadow-md transition-all hover:scale-[1.02] flex items-center justify-center"
            onClick={handleClick}
          >
            <img 
              src="/images/text/cta_unlock_offer.png" 
              alt="Unlock Offer" 
              className="h-5 w-auto"
            />
          </Button>
        </div>
      </Card>
    );
  }

  // Final CTA Bonus Box
  if (variant === "final") {
    return (
      <Card className="my-12 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-green-500 shadow-2xl overflow-hidden">
        <div className="p-10 text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Final Verdict
            </div>
            <h3 className="text-white font-sans font-bold text-3xl">
              BetOnline Is the Clear Winner
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              After comprehensive testing across speed, odds accuracy, fairness, and customer support, 
              <strong className="text-green-400"> BetOnline consistently outperformed all competitors</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-green-400 font-bold text-3xl">9.8/10</div>
              <div className="text-gray-400 text-sm">Trust Score</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-400 font-bold text-3xl">#1</div>
              <div className="text-gray-400 text-sm">Speed Rank</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-400 font-bold text-3xl">20+</div>
              <div className="text-gray-400 text-sm">Years Trusted</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-400 font-bold text-3xl">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>

          <div className="space-y-4">
            {/* CTA button with PNG text */}
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-bold h-16 px-12 shadow-xl transition-all hover:scale-[1.05] flex items-center justify-center gap-3"
              onClick={handleClick}
            >
              <Shield className="h-6 w-6" />
              <img 
                src="/images/text/cta_join_betonline.png" 
                alt="Join BetOnline" 
                className="h-6 w-auto"
              />
            </Button>
            <p className="text-gray-400 text-sm">
              Exclusive offer for FairPlayGaming readers • No hidden terms
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return null;
}
