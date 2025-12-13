import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface BonusBoxProps {
  variant: "hero" | "mid" | "final";
  affiliateLink?: string;
}

export function BonusBox({ variant, affiliateLink = "https://record.betonlineaffiliates.ag/_xMg1uUiES83vwJ4sD1FKlGNd7ZgqdRLk/1/" }: BonusBoxProps) {
  const handleClick = () => {
    window.open(affiliateLink, "_blank", "noopener,noreferrer");
  };

  if (variant === "hero") {
    return (
      <Card className="bg-white p-6 shadow-lg border-gray-200 space-y-5">
        <div className="flex items-center justify-center gap-2 pb-4 border-b border-gray-100">
          <Shield className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Verified Operator</h3>
        </div>

        <div className="space-y-4">
          {/* Trust Metrics */}
          <div className="flex justify-between items-center py-3 border-b border-gray-50">
            <span className="text-sm text-gray-600">Trust Score</span>
            <span className="text-2xl font-bold text-green-600">• 9.8/10</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-50">
            <span className="text-sm text-gray-600">License</span>
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wide">Panama Gaming</div>
              <div className="text-sm font-semibold text-gray-900">Authority</div>
            </div>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="text-sm text-gray-600">Payout Speed</span>
            <span className="text-lg font-bold text-gray-900">~12 Mins</span>
          </div>

          {/* Real BetOnline Promotional Image - NO TEXT */}
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              src="/promo-no-strings.png" 
              alt="BetOnline Welcome Offer" 
              className="w-full h-auto"
            />
          </div>

          {/* CTA Button */}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-base shadow-md transition-all hover:scale-[1.02]"
            onClick={handleClick}
          >
            Visit Official Site →
          </Button>

          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Established 2001 • Instant crypto withdrawals
          </p>
        </div>
      </Card>
    );
  }

  if (variant === "mid") {
    return (
      <Card className="bg-gradient-to-br from-gray-50 to-white p-6 shadow-md border-gray-200 space-y-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-green-700">Verified Operator</span>
          </div>
          <h4 className="text-base font-semibold text-gray-900">BetOnline.ag</h4>
        </div>

        {/* Real BetOnline Promotional Image - NO TEXT */}
        <div className="bg-white rounded-lg overflow-hidden">
          <img 
            src="/promo-free-spins.png" 
            alt="BetOnline Free Spins Offer" 
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-2 text-center text-xs text-gray-500">
          <p>• 9.8/10 Trust Score</p>
          <p>• ~12 Min Crypto Payouts</p>
          <p>• Panama Gaming Authority Licensed</p>
        </div>

        <Button 
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium h-11 shadow-sm transition-all hover:shadow-md"
          onClick={handleClick}
        >
          View Verified Operator →
        </Button>
      </Card>
    );
  }

  // variant === "final"
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 shadow-xl border-0">
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Our Recommendation</span>
          </div>
          
          <h3 className="text-2xl font-bold">BetOnline Is the Clear Winner</h3>
          
          <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
            After extensive analysis, BetOnline consistently outperforms competitors in payout speed, odds quality, and customer service.
          </p>
        </div>

        {/* Real BetOnline Promotional Image - NO TEXT */}
        <div className="bg-white rounded-lg overflow-hidden">
          <img 
            src="/promo-poker-bonus.png" 
            alt="BetOnline Poker Bonus" 
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">9.8</div>
            <div className="text-xs text-gray-400">Trust Score</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl font-bold text-green-400">~12m</div>
            <div className="text-xs text-gray-400">Payout Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">24/7</div>
            <div className="text-xs text-gray-400">Support</div>
          </div>
        </div>

        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-14 text-lg shadow-lg transition-all hover:scale-[1.02]"
          onClick={handleClick}
        >
          Start Betting Smarter →
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Established 2001 • Panama Gaming Authority Licensed
        </p>
      </div>
    </Card>
  );
}
