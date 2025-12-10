import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img src="/images/shield-logo.png" alt="FairPlay Gaming Commission" className="h-10" />
              <div>
                <div className="font-bold text-lg">FAIRPLAY</div>
                <div className="text-xs text-gray-600">GAMING COMMISSION</div>
              </div>
            </a>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-red-600 font-medium">INVESTIGATIONS</a>
            </Link>
            <Link href="/sports-analysis">
              <a className="text-red-600 font-bold">SPORTS ANALYSIS</a>
            </Link>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">SCAM ALERTS</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">VERIFIED SITES</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">Subscribe</Button>
            <Button size="sm">Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Commission Investigations</h1>
            <p className="text-xl text-gray-300">
              In-depth analysis and comparative testing of major sportsbooks. Our commission conducts systematic evaluations to help players make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Investigations</h2>
            <p className="text-gray-600">Comprehensive platform comparisons based on real testing and analysis</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-red-600">{article.category}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{article.publishDate}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {article.description}
                  </p>

                  <Link href={article.url}>
                    <a>
                      <Button className="w-full group">
                        Read Full Investigation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 text-red-100">
            Subscribe to receive our latest investigations and platform analysis directly to your inbox.
          </p>
          <Button size="lg" variant="secondary">
            Subscribe to Updates
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/shield-logo.png" alt="FairPlay" className="h-8" />
                <div className="text-white font-bold">FAIRPLAY</div>
              </div>
              <p className="text-sm">
                Independent gaming commission dedicated to transparent platform analysis and player protection.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Investigations</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Platform Comparisons</a></li>
                <li><a href="#" className="hover:text-white">Payout Speed Tests</a></li>
                <li><a href="#" className="hover:text-white">Odds Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Testing Methodology</a></li>
                <li><a href="#" className="hover:text-white">About the Commission</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 FairPlay Gaming Commission. All rights reserved.</p>
            <p className="mt-2 text-gray-500">
              This site provides independent analysis for informational purposes. Players should verify local regulations before participating in online wagering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
