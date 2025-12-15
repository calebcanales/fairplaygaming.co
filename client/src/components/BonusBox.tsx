import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface BonusBoxProps {
  variant: "hero" | "mid" | "final";
}

export function BonusBox({ variant }: BonusBoxProps) {
  // No affiliate link in props - will be injected via JavaScript

  if (variant === "hero") {
    return (
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
          
          {/* Real BetOnline Promotional Image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <button className="affiliate-cta w-full p-0 border-0 bg-transparent cursor-pointer">
              <img 
                src="/promo-no-strings.png" 
                alt="BetOnline Welcome Offer" 
                className="w-full h-auto hover:opacity-90 transition-opacity"
              />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === "mid") {
    return (
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
          
          {/* Real BetOnline Promotional Image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <button className="affiliate-cta w-full p-0 border-0 bg-transparent cursor-pointer">
              <img 
                src="/promo-free-spins.png" 
                alt="BetOnline Free Spins Offer" 
                className="w-full h-auto hover:opacity-90 transition-opacity"
              />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  // variant === "final"
  return (
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
        
        {/* Real BetOnline Promotional Image */}
        <div className="bg-white rounded-lg overflow-hidden">
            <button className="affiliate-cta w-full p-0 border-0 bg-transparent cursor-pointer">
              <img 
                src="/promo-poker-bonus.png" 
                alt="BetOnline Poker Bonus" 
                className="w-full h-auto hover:opacity-90 transition-opacity"
              />
            </button>
        </div>
      </div>
    </Card>
  );
}
