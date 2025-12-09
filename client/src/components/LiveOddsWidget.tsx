import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, Clock, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const ODDS_API_KEY = "160e49302b87cd67b632b47582c6c82e";
const SPORTS_AFFILIATE_LINK = "https://record.betonlineaffiliates.ag/_xMg1uUiES83ABa8v4kUGqGNd7ZgqdRLk/1/";

interface OddsData {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Array<{
    key: string;
    title: string;
    markets: Array<{
      key: string;
      outcomes: Array<{
        name: string;
        price: number;
        point?: number;
      }>;
    }>;
  }>;
}

export function LiveOddsWidget() {
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchOdds = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch NFL and NBA odds
      const sports = ['americanfootball_nfl', 'basketball_nba'];
      const allGames: any[] = [];
      
      for (const sport of sports) {
        const response = await fetch(
          `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${ODDS_API_KEY}&regions=us&markets=h2h,spreads,totals&oddsFormat=american&bookmakers=betonline`
        );
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        
        const data: OddsData[] = await response.json();
        
        // Process first 2 games from each sport
        const processedGames = data.slice(0, 2).map((game) => {
          const betonlineBookmaker = game.bookmakers.find(b => b.key === 'betonline') || game.bookmakers[0];
          
          if (!betonlineBookmaker) return null;
          
          const h2hMarket = betonlineBookmaker.markets.find(m => m.key === 'h2h');
          const spreadsMarket = betonlineBookmaker.markets.find(m => m.key === 'spreads');
          const totalsMarket = betonlineBookmaker.markets.find(m => m.key === 'totals');
          
          const awayOutcome = h2hMarket?.outcomes.find(o => o.name === game.away_team);
          const homeOutcome = h2hMarket?.outcomes.find(o => o.name === game.home_team);
          
          const awaySpread = spreadsMarket?.outcomes.find(o => o.name === game.away_team);
          const homeSpread = spreadsMarket?.outcomes.find(o => o.name === game.home_team);
          
          const totalOver = totalsMarket?.outcomes.find(o => o.name === 'Over');
          const totalUnder = totalsMarket?.outcomes.find(o => o.name === 'Under');
          
          return {
            league: sport.includes('nfl') ? 'NFL' : 'NBA',
            time: new Date(game.commence_time).toLocaleString('en-US', { 
              weekday: 'short', 
              hour: 'numeric', 
              minute: '2-digit' 
            }),
            team1: game.away_team,
            team2: game.home_team,
            spread1: awaySpread?.point ? `${awaySpread.point > 0 ? '+' : ''}${awaySpread.point}` : 'PK',
            spread2: homeSpread?.point ? `${homeSpread.point > 0 ? '+' : ''}${homeSpread.point}` : 'PK',
            total: totalOver?.point || totalUnder?.point || 'N/A',
            moneyline1: awayOutcome?.price ? (awayOutcome.price > 0 ? `+${awayOutcome.price}` : `${awayOutcome.price}`) : 'N/A',
            moneyline2: homeOutcome?.price ? (homeOutcome.price > 0 ? `+${homeOutcome.price}` : `${homeOutcome.price}`) : 'N/A',
            hot: Math.random() > 0.5 // Random hot indicator for demo
          };
        }).filter(Boolean);
        
        allGames.push(...processedGames);
      }
      
      setGames(allGames.slice(0, 3)); // Show max 3 games
      setLastUpdate(new Date());
      setLoading(false);
    } catch (err) {
      console.error('Error fetching odds:', err);
      setError('Failed to load live odds');
      setLoading(false);
      
      // Fallback to demo data
      setGames([
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
        }
      ]);
    }
  };

  useEffect(() => {
    fetchOdds();
    // Refresh every 5 minutes
    const interval = setInterval(fetchOdds, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBetClick = () => {
    window.location.href = SPORTS_AFFILIATE_LINK;
  };

  return (
    <Card className="bg-[#1a1a1a] border-none text-white overflow-hidden shadow-2xl font-condensed">
      <div className="bg-[#2a2a2a] p-3 flex justify-between items-center border-b border-[#333]">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
            {loading ? 'Loading...' : 'Live Odds Feed'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-500">
            {lastUpdate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
          </span>
          <button 
            onClick={fetchOdds} 
            className="text-gray-500 hover:text-white transition-colors"
            disabled={loading}
          >
            <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
      
      {error && (
        <div className="p-4 bg-red-900/20 border-b border-red-800 text-red-400 text-xs">
          {error} - Showing demo data
        </div>
      )}
      
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
