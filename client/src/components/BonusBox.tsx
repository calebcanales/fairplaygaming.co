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

  // Hero Bonus Box (Subtle Editorial Sidebar)
  if (variant === "hero") {
    return (
      <Card className="sticky top-24 bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Verified Operator
            </h3>
            <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              VERIFIED
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-center py-2">
            <img 
              src="/images/logo_dark.png" 
              alt="BetOnline" 
              className="h-10 w-auto"
            />
          </div>

          <div className="space-y-3 border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Trust Score</span>
              <span className="font-bold text-green-600 text-lg">9.8/10</span>
            </div>
            <div className="flex items-center justify-between text-sm border-t border-gray-50 pt-3">
              <span className="text-gray-600">License</span>
              <span className="text-xs text-gray-500 uppercase">FAIRPLAY GAMING COMMISSION</span>
            </div>
            <div className="flex items-center justify-between text-sm border-t border-gray-50 pt-3">
              <span className="text-gray-600">Payout Speed</span>
              <span className="font-semibold text-gray-900">~12 Mins</span>
            </div>
          </div>

          {/* Subtle offer section */}
          <div className="bg-gray-50 p-4 rounded border border-gray-100 space-y-3">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">Exclusive Offer</div>
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/images/text/bonus_50_welcome.png" 
                alt="Welcome Offer" 
                className="h-7 w-auto"
              />
              <img 
                src="/images/text/bonus_up_to_1000.png" 
                alt="Bonus Amount" 
                className="h-6 w-auto"
              />
            </div>
            <div className="text-center">
              <img 
                src="/images/text/promo_code.png" 
                alt="Promo Code" 
                className="h-4 w-auto mx-auto opacity-80"
              />
            </div>
          </div>

          {/* Subtle CTA */}
          <Button 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium h-12 shadow-sm transition-all hover:shadow-md flex items-center justify-center"
            onClick={handleClick}
          >
            <img 
              src="/images/text/cta_play_now_verified.png" 
              alt="Visit Site" 
              className="h-4 w-auto"
            />
          </Button>

          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Commission-verified speed • Instant crypto withdrawals
          </p>
        </div>
      </Card>
    );
  }

  // Mid-Article Bonus Box (Minimal Callout)
  if (variant === "mid") {
    return (
      <Card className="my-12 bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 bg-gray-900 text-white p-3 rounded">
              <Shield className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-2">
              <h4 className="font-serif font-bold text-xl text-gray-900">
                Recommended by FairPlayGaming Analysts
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                After testing major sportsbooks, <strong className="text-gray-900">BetOnline ranked #1</strong> in speed and odds reliability.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span>98.4% Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span>~12 Min Average</span>
            </div>
          </div>

          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium h-11 px-8 shadow-sm transition-all hover:shadow-md"
            onClick={handleClick}
          >
            <img 
              src="/images/text/cta_unlock_offer.png" 
              alt="View Details" 
              className="h-4 w-auto"
            />
          </Button>
        </div>
      </Card>
    );
  }

  // Final CTA Bonus Box (Professional Summary)
  if (variant === "final") {
    return (
      <Card className="my-12 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-xl">
        <div className="p-10 space-y-8">
          <div className="space-y-4 text-center">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded uppercase tracking-wider">
              Commission Verdict
            </div>
            <h3 className="text-white font-serif font-bold text-3xl">
              BetOnline Is the Clear Winner
            </h3>
            <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              After comprehensive testing across speed, odds accuracy, fairness, and customer support, 
              <strong className="text-green-400"> BetOnline consistently outperformed all competitors</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-gray-700 pt-8">
            <div className="text-center space-y-2">
              <div className="text-green-400 font-bold text-2xl">9.8/10</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">Trust Score</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-green-400 font-bold text-2xl">#1</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">Speed Rank</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-green-400 font-bold text-2xl">20+</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">Years Trusted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-green-400 font-bold text-2xl">24/7</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">Support</div>
            </div>
          </div>

          <div className="space-y-4 border-t border-gray-700 pt-8">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-14 shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-3"
              onClick={handleClick}
            >
              <Shield className="h-5 w-5" />
              <img 
                src="/images/text/cta_join_betonline.png" 
                alt="Join BetOnline" 
                className="h-5 w-auto"
              />
            </Button>
            <p className="text-gray-400 text-xs text-center">
              Exclusive offer for FairPlayGaming readers • No hidden terms
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return null;
}
