import { useEffect, useState } from 'react';

interface Game {
  home_team: string;
  away_team: string;
  sport_key: string;
  commence_time: string;
}

export function LiveGameBanner() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const API_KEY = '160e49302b87cd67b632b47582c6c82e';
        const sports = ['americanfootball_nfl', 'basketball_nba', 'baseball_mlb', 'icehockey_nhl'];
        
        const allGames: Game[] = [];
        for (const sport of sports) {
          const response = await fetch(
            `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${API_KEY}&regions=us&markets=h2h&oddsFormat=american`
          );
          if (response.ok) {
            const data = await response.json();
            allGames.push(...data.slice(0, 3)); // Get 3 games per sport
          }
        }
        
        if (allGames.length > 0) {
          setGames(allGames);
        } else {
          // Fallback demo games
          setGames([
            { home_team: 'Kansas City Chiefs', away_team: 'Buffalo Bills', sport_key: 'americanfootball_nfl', commence_time: new Date().toISOString() },
            { home_team: 'Los Angeles Lakers', away_team: 'Boston Celtics', sport_key: 'basketball_nba', commence_time: new Date().toISOString() },
            { home_team: 'New York Yankees', away_team: 'Boston Red Sox', sport_key: 'baseball_mlb', commence_time: new Date().toISOString() },
            { home_team: 'Toronto Maple Leafs', away_team: 'Montreal Canadiens', sport_key: 'icehockey_nhl', commence_time: new Date().toISOString() },
          ]);
        }
      } catch (error) {
        console.error('Error fetching games:', error);
        // Fallback demo games
        setGames([
          { home_team: 'Kansas City Chiefs', away_team: 'Buffalo Bills', sport_key: 'americanfootball_nfl', commence_time: new Date().toISOString() },
          { home_team: 'Los Angeles Lakers', away_team: 'Boston Celtics', sport_key: 'basketball_nba', commence_time: new Date().toISOString() },
          { home_team: 'New York Yankees', away_team: 'Boston Red Sox', sport_key: 'baseball_mlb', commence_time: new Date().toISOString() },
          { home_team: 'Toronto Maple Leafs', away_team: 'Montreal Canadiens', sport_key: 'icehockey_nhl', commence_time: new Date().toISOString() },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  const getSportLabel = (sportKey: string) => {
    if (sportKey.includes('nfl')) return 'NFL';
    if (sportKey.includes('nba')) return 'NBA';
    if (sportKey.includes('mlb')) return 'MLB';
    if (sportKey.includes('nhl')) return 'NHL';
    return 'LIVE';
  };

  if (isLoading || games.length === 0) {
    return (
      <div className="bg-[#121212] text-white py-2 text-xs font-condensed tracking-wider border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-green-500 font-bold flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> LIVE MARKETS OPEN
            </span>
            <span className="text-gray-400">LOADING GAMES...</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-400">ODDS FORMAT: AMERICAN</span>
            <span className="text-gray-400">TIMEZONE: ET</span>
          </div>
        </div>
      </div>
    );
  }

  // Duplicate games for infinite scroll effect
  const duplicatedGames = [...games, ...games, ...games];

  return (
    <div className="bg-[#121212] text-white py-2 text-xs font-condensed tracking-wider border-b border-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-6 animate-scroll">
            <span className="text-green-500 font-bold flex items-center gap-1 flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> LIVE MARKETS OPEN
            </span>
            {duplicatedGames.map((game, index) => (
              <span key={index} className="text-gray-300 flex items-center gap-2 flex-shrink-0">
                <span className="text-yellow-500 font-bold">{getSportLabel(game.sport_key)}</span>
                <span>{game.away_team} @ {game.home_team}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 flex-shrink-0 ml-4">
          <span className="text-gray-400">ODDS FORMAT: AMERICAN</span>
          <span className="text-gray-400">TIMEZONE: ET</span>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
