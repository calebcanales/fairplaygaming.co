import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, Clock } from "lucide-react";

export function LiveOddsWidget() {
  const SPORTS_AFFILIATE_LINK = "https://record.betonlineaffiliates.ag/_xMg1uUiES83ABa8v4kUGqGNd7ZgqdRLk/1/";

  const handleBetClick = () => {
    window.location.href = SPORTS_AFFILIATE_LINK;
  };

  const games = [
    {
      league: "NFL",
      time: "Today, 8:15 PM",
      team1: "Kansas City Chiefs",
      team2: "Buffalo Bills",
      spread1: "-2.5",
      spread2: "+2.5",
      total: "48.5",
      moneyline1: "-135",
      moneyline2: "+115",
      hot: true
    },
    {
      league: "NBA",
      time: "Tonight, 7:30 PM",
      team1: "Boston Celtics",
      team2: "Miami Heat",
      spread1: "-6.5",
      spread2: "+6.5",
      total: "212.5",
      moneyline1: "-240",
      moneyline2: "+195",
      hot: false
    },
    {
      league: "UFC 300",
      time: "Sat, 10:00 PM",
      team1: "Pereira",
      team2: "Hill",
      spread1: "PK",
      spread2: "PK",
      total: "1.5 Rds",
      moneyline1: "-145",
      moneyline2: "+125",
      hot: true
    }
  ];

  return (
    <Card className="bg-[#1a1a1a] border-none text-white overflow-hidden shadow-2xl font-condensed">
      <div className="bg-[#2a2a2a] p-3 flex justify-between items-center border-b border-[#333]">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Live Odds Feed</span>
        </div>
        <span className="text-[10px] text-gray-500">Odds via BetOnline</span>
      </div>
      
      <div className="divide-y divide-[#333]">
        {games.map((game, idx) => (
          <div key={idx} className="p-4 hover:bg-[#222] transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-[#333] px-1.5 py-0.5 rounded text-gray-400">{game.league}</span>
                <span className="text-[10px] text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {game.time}
                </span>
              </div>
              {game.hot && (
                <span className="text-[10px] font-bold text-yellow-500 flex items-center gap-1">
                  <ArrowUp className="h-3 w-3" /> HEAVY ACTION
                </span>
              )}
            </div>

            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-5 space-y-1">
                <div className="font-bold text-sm">{game.team1}</div>
                <div className="font-bold text-sm">{game.team2}</div>
              </div>
              
              <div className="col-span-7 grid grid-cols-3 gap-1">
                <div className="space-y-1">
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs bg-[#2a2a2a] border-[#333] text-gray-300 hover:bg-green-600 hover:text-white hover:border-green-500 p-0"
                    onClick={handleBetClick}
                  >
                    {game.spread1}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs bg-[#2a2a2a] border-[#333] text-gray-300 hover:bg-green-600 hover:text-white hover:border-green-500 p-0"
                    onClick={handleBetClick}
                  >
                    {game.spread2}
                  </Button>
                </div>
                <div className="space-y-1">
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs bg-[#2a2a2a] border-[#333] text-gray-300 hover:bg-green-600 hover:text-white hover:border-green-500 p-0"
                    onClick={handleBetClick}
                  >
                    O {game.total}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs bg-[#2a2a2a] border-[#333] text-gray-300 hover:bg-green-600 hover:text-white hover:border-green-500 p-0"
                    onClick={handleBetClick}
                  >
                    U {game.total}
                  </Button>
                </div>
                <div className="space-y-1">
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs bg-[#2a2a2a] border-[#333] text-green-400 font-bold hover:bg-green-600 hover:text-white hover:border-green-500 p-0"
                    onClick={handleBetClick}
                  >
                    {game.moneyline1}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs bg-[#2a2a2a] border-[#333] text-green-400 font-bold hover:bg-green-600 hover:text-white hover:border-green-500 p-0"
                    onClick={handleBetClick}
                  >
                    {game.moneyline2}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-[#2a2a2a] border-t border-[#333]">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wider text-xs h-9"
          onClick={handleBetClick}
        >
          View All Live Odds
        </Button>
      </div>
    </Card>
  );
}
