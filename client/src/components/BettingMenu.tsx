import { Button } from "@/components/ui/button";
import { Zap, Trophy, ShoppingBag, Rocket, Layers, Crown, Home } from "lucide-react";

export function BettingMenu() {
  const SPORTS_AFFILIATE_LINK = "https://record.betonlineaffiliates.ag/_xMg1uUiES83ABa8v4kUGqGNd7ZgqdRLk/1/";

  const handleClick = () => {
    window.location.href = SPORTS_AFFILIATE_LINK;
  };

  const menuItems = [
    { icon: Zap, label: "LIVE BETTING", color: "text-white" },
    { icon: Trophy, label: "RACEBOOK", color: "text-yellow-500" },
    { icon: ShoppingBag, label: "PROP SHOP", color: "text-blue-400" },
    { icon: Rocket, label: "ODDS BOOSTERS", color: "text-red-500" },
    { icon: Layers, label: "LIVE PARLAYS", color: "text-orange-500" },
    { icon: Crown, label: "MEGA PARLAYS", color: "text-yellow-400" },
  ];

  return (
    <div className="space-y-2 font-condensed">
      <Button 
        className="w-full justify-start gap-3 h-12 text-lg font-bold bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide rounded-md shadow-sm"
        onClick={handleClick}
      >
        <Home className="h-6 w-6" />
        HOME
      </Button>
      
      {menuItems.map((item, idx) => (
        <Button
          key={idx}
          variant="outline"
          className="w-full justify-start gap-3 h-12 text-lg font-bold bg-[#1a1a1a] border-gray-700 text-white hover:bg-[#2a2a2a] hover:text-white hover:border-gray-600 uppercase tracking-wide rounded-md shadow-sm transition-all"
          onClick={handleClick}
        >
          <item.icon className={`h-5 w-5 ${item.color}`} />
          {item.label}
        </Button>
      ))}
    </div>
  );
}
