import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle, Trophy, Target, Calendar, Users, Activity, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { BonusBox } from "@/components/BonusBox";
import { Link } from "wouter";

export default function NFLWeek15Picks() {
  const AFFILIATE_LINK = "https://record.betonlineaffiliates.ag/_xMg1uUiES83ABa8v4kUGqGNd7ZgqdRLk/1/";

  const handleBetClick = () => {
    window.location.href = AFFILIATE_LINK;
  };

  const games = [
    {
      away: "Kansas City Chiefs",
      home: "New England Patriots",
      spread: "Chiefs -7",
      total: "47.5",
      pick: "Under 47.5",
      confidence: 9,
      analysis: "Belichick's defensive scheme has historically given Mahomes trouble. Expect a low-scoring grind.",
      injuries: ["Patriots: Mac Jones (Questionable)", "Chiefs: Travis Kelce (Probable)"],
      trend: "Sharp money on Under",
      edge: "+4.2%"
    },
    {
      away: "Baltimore Ravens",
      home: "San Francisco 49ers",
      spread: "49ers -3",
      total: "51.5",
      pick: "Ravens +3",
      confidence: 8,
      analysis: "Lamar Jackson's dual-threat ability creates matchup nightmares for SF's defense. Ravens keep it close.",
      injuries: ["49ers: Deebo Samuel (Questionable)", "Ravens: Mark Andrews (Probable)"],
      trend: "Public on 49ers, Sharp on Ravens",
      edge: "+3.8%"
    },
    {
      away: "Dallas Cowboys",
      home: "Philadelphia Eagles",
      spread: "Eagles -7",
      total: "49.5",
      pick: "Cowboys +7",
      confidence: 7,
      analysis: "Division rivalry games are always close. Cowboys defense can slow down Hurts' rushing attack.",
      injuries: ["Eagles: Lane Johnson (Out)", "Cowboys: Micah Parsons (Probable)"],
      trend: "Line moved from -9 to -7",
      edge: "+2.9%"
    },
    {
      away: "Green Bay Packers",
      home: "Minnesota Vikings",
      spread: "Vikings -3",
      total: "45.5",
      pick: "Over 45.5",
      confidence: 6,
      analysis: "Both offenses clicking. Jordan Love vs Kirk Cousins shootout expected in dome environment.",
      injuries: ["Vikings: Justin Jefferson (Probable)", "Packers: Aaron Jones (Questionable)"],
      trend: "Public and Sharp agree on Over",
      edge: "+1.5%"
    },
    {
      away: "Miami Dolphins",
      home: "New York Jets",
      spread: "Dolphins -4.5",
      total: "43.5",
      pick: "Dolphins -4.5",
      confidence: 8,
      analysis: "Tua's hot hand vs struggling Jets defense. Miami covers easily in MetLife.",
      injuries: ["Jets: Zach Wilson (Out)", "Dolphins: Tyreek Hill (Probable)"],
      trend: "Sharp money on Dolphins",
      edge: "+3.2%"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <span>/</span>
            <Link href="/sports-analysis" className="hover:text-red-600">Sports Analysis</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">NFL Week 15 Picks</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMjAyYyIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full">
                <Trophy className="h-4 w-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Week 15</span>
              </div>
              <span className="text-gray-300 text-sm">Updated Dec 13, 2025 • 10:00 AM EST</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              NFL Week 15 Expert Picks & Predictions
            </h1>
            
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Complete game-by-game analysis with expert picks, injury reports, and betting trends. Our analysts are 67-45 (59.8%) this season.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                size="lg" 
                className="bg-white text-green-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
                onClick={handleBetClick}
              >
                <Target className="mr-2 h-5 w-5" />
                View Live Odds
              </Button>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-black">67-45</div>
                  <div className="text-xs text-gray-300">Season Record</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400">59.8%</div>
                  <div className="text-xs text-gray-300">Win Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Featured Game */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl font-black text-gray-900">Game of the Week</h2>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5" />
                      <span className="font-bold">Sunday, Dec 15 • 4:25 PM EST</span>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">CBS</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="text-center">
                      <div className="text-2xl font-black mb-1">KC</div>
                      <div className="text-sm text-red-100">11-2</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-red-100 mb-1">@</div>
                      <div className="text-3xl font-black">VS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black mb-1">NE</div>
                      <div className="text-sm text-red-100">3-10</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Spread</div>
                      <div className="text-xl font-black text-gray-900">Chiefs -7</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Total</div>
                      <div className="text-xl font-black text-gray-900">O/U 47.5</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Moneyline</div>
                      <div className="text-xl font-black text-gray-900">KC -320</div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="font-black text-green-900 text-lg">EXPERT PICK: Under 47.5</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`h-2 w-2 rounded-full ${i < 9 ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Belichick's defensive scheme has historically given Mahomes trouble, forcing him into quick decisions. New England's secondary will bracket Kelce and force other receivers to beat them. Combined with cold December weather in Foxborough, this game stays under the total. Our model projects 44 combined points.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Confidence</div>
                        <div className="text-lg font-black text-gray-900">9/10</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Edge</div>
                        <div className="text-lg font-black text-green-700">+4.2%</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500" />
                        Injury Report
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-gray-700">Travis Kelce (KC)</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">PROBABLE</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-gray-700">Mac Jones (NE)</span>
                          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">QUESTIONABLE</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        Betting Trends
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-1 text-sm">
                            <span className="text-gray-600">Public Money (Spread)</span>
                            <span className="font-bold text-gray-900">72% on Chiefs</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1 text-sm">
                            <span className="text-gray-600">Sharp Money (Total)</span>
                            <span className="font-bold text-gray-900">65% on Under</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-6" onClick={handleBetClick}>
                    Place Bet on BetOnline
                  </Button>
                </div>
              </Card>
            </section>

            {/* All Games */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
                  <Target className="h-8 w-8 text-red-600" />
                  All Week 15 Picks
                </h2>
                <div className="bg-green-50 px-4 py-2 rounded-full border border-green-200">
                  <span className="text-sm font-bold text-green-900">12-5 Last Week</span>
                </div>
              </div>

              <div className="space-y-4">
                {games.slice(1).map((game, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleBetClick}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">Sunday • 1:00 PM EST</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {game.away} @ {game.home}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">Spread: <span className="font-bold text-gray-900">{game.spread}</span></span>
                          <span className="text-gray-600">Total: <span className="font-bold text-gray-900">{game.total}</span></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-2">
                          {game.pick}
                        </div>
                        <div className="flex gap-1 justify-end">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className={`h-1.5 w-1.5 rounded-full ${i < game.confidence ? 'bg-red-600' : 'bg-gray-200'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{game.analysis}</p>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-gray-50 rounded p-2">
                        <div className="text-gray-600 mb-1">Trend</div>
                        <div className="font-bold text-gray-900">{game.trend}</div>
                      </div>
                      <div className="bg-green-50 rounded p-2">
                        <div className="text-green-700 mb-1">Edge</div>
                        <div className="font-bold text-green-900">{game.edge}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Playoff Implications */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl font-black text-gray-900">Playoff Implications</h2>
              </div>

              <Card className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">Chiefs (11-2)</h4>
                    <p className="text-sm text-gray-700">Win + Bills loss = Clinch AFC #1 seed and home-field advantage</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">49ers (10-3)</h4>
                    <p className="text-sm text-gray-700">Win = Clinch NFC West division title</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">Eagles (11-2)</h4>
                    <p className="text-sm text-gray-700">Win = Maintain 1-game lead in NFC East over Cowboys</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">Patriots (3-10)</h4>
                    <p className="text-sm text-gray-700">Eliminated from playoff contention</p>
                  </div>
                </div>
              </Card>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Bonus Box */}
            <BonusBox variant="hero" />

            {/* Quick Picks */}
            <Card className="p-5">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Best Bets
              </h3>
              <div className="space-y-3">
                {games.slice(0, 3).map((game, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={handleBetClick}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-sm text-gray-900">{game.away.split(' ').pop()} @ {game.home.split(' ').pop()}</div>
                      <div className="flex gap-0.5">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`h-1 w-1 rounded-full ${i < game.confidence ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-green-700">{game.pick}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Expert Stats */}
            <Card className="p-5">
              <h3 className="font-black text-lg mb-4">Season Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Overall Record</span>
                  <span className="font-bold text-gray-900">67-45</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-green-700">Win Rate</span>
                  <span className="font-bold text-green-900">59.8%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-700">ROI</span>
                  <span className="font-bold text-blue-900">+12.4%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm text-purple-700">Best Sport</span>
                  <span className="font-bold text-purple-900">NFL</span>
                </div>
              </div>
            </Card>

            {/* Newsletter CTA */}
            <Card className="p-6 bg-gradient-to-br from-red-600 to-red-700 text-white">
              <h3 className="font-black text-xl mb-2">Get Daily Picks</h3>
              <p className="text-sm text-red-100 mb-4">
                Expert NFL picks delivered to your inbox every morning during football season.
              </p>
              <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold" onClick={handleBetClick}>
                Subscribe Free
              </Button>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
