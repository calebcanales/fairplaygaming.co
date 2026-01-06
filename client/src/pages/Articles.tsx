import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, TrendingUp, Shield, Zap, FileSearch, ChevronRight } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      title: "Top 10 Fastest Crypto Payout Sportsbooks 2025",
      url: "/articles/top-crypto-payout-sportsbooks",
      description: "Independent testing ranks cryptocurrency withdrawal speeds across 24 platforms. See which sportsbooks deliver sub-15 minute payouts.",
      category: "RANKINGS",
      publishDate: "Dec 08, 2025",
      icon: Zap,
      featured: true
    },
    {
      title: "Top 10 Best Live Betting Platforms 2025",
      url: "/articles/top-live-betting-platforms",
      description: "Commission testing reveals which platforms offer fastest line updates, best odds, and most reliable execution for live betting.",
      category: "RANKINGS",
      publishDate: "Dec 08, 2025",
      icon: TrendingUp,
      featured: true
    },
    {
      title: "BetOnline vs DraftKings: Which Sportsbook Performs Best?",
      url: "/articles/betonline-vs-draftkings",
      description: "Comprehensive commission analysis reveals key differences in odds quality, payout speed, and account restrictions.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: Shield,
      featured: true
    },
    {
      title: "BetOnline vs BetMGM: Complete FairPlayGaming Audit",
      url: "/articles/betonline-vs-betmgm",
      description: "Six-month investigation compares BetOnline and BetMGM across payout speed, odds quality, and winner restrictions.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: Shield,
      featured: false
    },
    {
      title: "BetOnline vs Caesars: The Payout Speed Showdown",
      url: "/articles/betonline-vs-caesars",
      description: "Testing reveals dramatic differences in withdrawal processing between BetOnline and Caesars Sportsbook.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: Zap,
      featured: false
    },
    {
      title: "BetOnline vs FanDuel: Odds, Payouts, and Bonuses",
      url: "/articles/betonline-vs-fanduel",
      description: "Independent testing compares odds quality, withdrawal speed, and account restrictions.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: TrendingUp,
      featured: false
    },
    {
      title: "BetOnline vs Bovada: Why Bettors Are Switching",
      url: "/articles/betonline-vs-bovada",
      description: "Analysis reveals significant differences in withdrawal speed and odds quality between offshore platforms.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: Shield,
      featured: false
    },
    {
      title: "BetOnline vs Stake: Crypto Bettor's Comparison",
      url: "/articles/betonline-vs-stake",
      description: "Crypto-focused analysis compares withdrawal speeds, odds quality, and cryptocurrency support.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: Zap,
      featured: false
    },
    {
      title: "BetOnline vs PointsBet: Which Platform Delivers Better Value?",
      url: "/articles/betonline-vs-pointsbet",
      description: "Investigation reveals critical differences in pricing models, risk exposure, and payout processing.",
      category: "INVESTIGATION",
      publishDate: "Dec 08, 2025",
      icon: Shield,
      featured: false
    },
    {
      title: "Top 10 Sportsbooks for High Rollers 2025",
      url: "/articles/top-high-roller-sportsbooks",
      description: "Commission ranks platforms by betting limits, winner restrictions, and large withdrawal processing.",
      category: "RANKINGS",
      publishDate: "Dec 08, 2025",
      icon: TrendingUp,
      featured: false
    }
  ];

  const featuredArticles = articles.filter(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-gray-50 font-serif text-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-16 md:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <FileSearch className="h-4 w-4 text-red-400" />
                <span className="text-sm font-sans font-bold text-red-300 uppercase tracking-wider">
                  Commission Reports
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Platform Analysis &<br />
                <span className="text-red-400">Comparative Testing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                In-depth analysis and comparative testing of major sportsbooks. Our commission conducts 
                systematic evaluations to help players make informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Platforms Tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">147</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">9</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Months Testing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">{articles.length}</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Reports Published</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12 md:py-16">
          {/* Featured Articles */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-5 w-5 text-red-600" />
              <span className="text-sm font-sans font-bold text-red-600 uppercase tracking-wider">
                Featured Reports
              </span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <Link key={index} href={article.url}>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full bg-white border-0 shadow-md hover:border-red-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-600 transition-colors">
                          <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider">
                          <span className="text-red-600">{article.category}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">{article.publishDate}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.description}
                      </p>

                      <div className="flex items-center gap-2 text-red-600 font-bold mt-auto group-hover:gap-4 transition-all">
                        Read Report <ChevronRight className="h-5 w-5" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-8">All Reports</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <Link key={index} href={article.url}>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full bg-white border-0 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-red-100 transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider mb-2">
                            <span className="text-red-600">{article.category}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500">{article.publishDate}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {article.description}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h3>
            <p className="text-red-100 max-w-xl mx-auto mb-6">
              Subscribe to receive our latest investigations and platform analysis directly to your inbox.
            </p>
            <Button size="lg" variant="secondary" className="font-bold">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
