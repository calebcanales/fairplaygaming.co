import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { SvgBonusAmount, SvgMatchBonus, SvgVisitSite, SvgStartBetting, SvgViewOperator, SvgExclusiveOffer, SvgOurRecommendation, SvgClearWinner } from "./SvgText";

interface BonusBoxProps {
  variant: "hero" | "mid" | "final";
  affiliateLink?: string;
}

export function BonusBox({ variant, affiliateLink = "https://record.betonlineaffiliates.ag/_xMg1uUiES83vwJ4sD1FKlGNd7ZgqdRLk/1/" }: BonusBoxProps) {
  
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
                <div className="text-xs text-gray-400 uppercase tracking-wide">PANAMA GAMING</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">AUTHORITY</div>
                <span className="text-gray-900 font-bold text-xs">Licensed</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-4">
              <span className="text-gray-500 font-serif">Payout Speed</span>
              <span className="text-gray-900 font-bold">~12 Mins</span>
            </div>
          </div>

          {/* Offer Section - Clean & Professional */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 space-y-3">
            <div className="text-gray-400"><SvgExclusiveOffer /></div>
            <div className="text-center space-y-2">
              <div className="text-gray-900"><SvgMatchBonus /></div>
              <div className="text-red-600"><SvgBonusAmount /></div>
            </div>

          </div>

          {/* CTA Button */}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-base shadow-md transition-all hover:scale-[1.02]"
            onClick={handleClick}
          >
            <SvgVisitSite />
          </Button>

          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Established 2001 • Instant crypto withdrawals
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
                Editor's Choice
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                <strong className="text-gray-900">BetOnline</strong> offers competitive odds, fast crypto payouts, and 24/7 customer support.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <span>Licensed Since 2001</span>
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
            <SvgViewOperator />
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
              <SvgOurRecommendation />
            </div>
            <div className="text-white">
              <SvgClearWinner />
            </div>
            <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              With over 20 years in the industry, competitive odds, and fast crypto payouts, 
              <strong className="text-green-400"> BetOnline remains a top choice for serious bettors</strong>.
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
              <SvgStartBetting />
            </Button>
            <p className="text-gray-400 text-xs text-center">
              Established operator • Licensed and regulated
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return null;
}
