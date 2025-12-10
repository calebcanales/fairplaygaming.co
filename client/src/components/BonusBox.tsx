import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

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
        <div className="bg-[#1a1a1a] p-4 text-center">
          <h3 className="text-white font-sans font-bold text-base tracking-wide">
            Verified Operator
          </h3>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Trust Metrics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-4">
              <span className="text-gray-500 font-serif">Trust Score</span>
              <span className="text-green-600 font-bold text-xl flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div> 9.8/10
              </span>
            </div>
            <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-4">
              <span className="text-gray-500 font-serif">License</span>
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wide">FAIRPLAY GAMING</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">COMMISSION</div>
                <span className="text-gray-900 font-bold text-xs">Verified</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-4">
              <span className="text-gray-500 font-serif">Payout Speed</span>
              <span className="text-gray-900 font-bold">~12 Mins</span>
            </div>
          </div>

          {/* Offer Section - Clean & Professional */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 space-y-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Exclusive Offer</div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-gray-900">50% Match Bonus</div>
              <div className="text-lg font-semibold text-red-600">Up to $1,000</div>
            </div>
            <div className="text-center pt-2">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Use Promo Code:</div>
              <div className="text-sm font-mono font-bold text-gray-700 mt-1">BOL1000</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-base shadow-md transition-all hover:scale-[1.02]"
            onClick={handleClick}
          >
            Visit Official Site →
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
            View Verified Operator →
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
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-14 text-lg shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-3"
              onClick={handleClick}
            >
              <Shield className="h-5 w-5" />
              Start Betting Smarter →
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
