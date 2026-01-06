import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileSearch, Clock, TrendingUp, AlertTriangle, ChevronRight, Eye } from "lucide-react";

export default function Investigations() {
  const investigations = [
    {
      title: "Why Your Sportsbook Might Be Limiting Your Winnings",
      url: "/articles/why-sportsbooks-limit-winners",
      category: "Account Management",
      description: "Commission investigation reveals how sportsbooks identify and restrict profitable accounts. We analyzed data from 500+ limited accounts to expose the patterns.",
      readTime: "12 min read",
      views: "24.5K",
      featured: true,
      image: "/images/sportsbook.png"
    },
    {
      title: "Payout Speed Investigation: 17 Major Sportsbooks Tested",
      url: "/articles/payout-speed-investigation",
      category: "Banking",
      description: "30x speed difference between fastest and slowest withdrawal processing. We tested crypto and fiat payouts across every major operator.",
      readTime: "8 min read",
      views: "18.2K",
      featured: false
    },
    {
      title: "Hidden Terms in Popular Sports Betting Bonuses — Exposed",
      url: "/articles/bonus-terms-exposed",
      category: "Bonuses",
      description: "Why most sportsbook bonuses are designed to trap, not reward. Our legal team analyzed 50+ bonus terms to find the hidden catches.",
      readTime: "10 min read",
      views: "31.8K",
      featured: false
    }
  ];

  const featuredInvestigation = investigations.find(i => i.featured);
  const otherInvestigations = investigations.filter(i => !i.featured);

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
                  Independent Investigations
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Exposing the Truth About<br />
                <span className="text-red-400">Online Gambling</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                In-depth investigations exposing industry practices that affect your betting experience. 
                No sponsors. No bias. Just facts.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">47+</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Operators Tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Data Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">9</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Months Testing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Active Investigations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12 md:py-16">
          {/* Featured Investigation */}
          {featuredInvestigation && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-red-600" />
                <span className="text-sm font-sans font-bold text-red-600 uppercase tracking-wider">
                  Featured Investigation
                </span>
              </div>
              <Link href={featuredInvestigation.url}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 shadow-lg">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={featuredInvestigation.image} 
                        alt={featuredInvestigation.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-2 text-xs font-sans font-bold text-red-600 uppercase tracking-wider mb-4">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Investigation</span>
                        <span>•</span>
                        <span>{featuredInvestigation.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors leading-tight">
                        {featuredInvestigation.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {featuredInvestigation.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredInvestigation.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {featuredInvestigation.views} views
                        </span>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-red-600 font-bold group-hover:gap-4 transition-all">
                        Read Investigation <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          {/* Other Investigations */}
          <div>
            <h2 className="text-2xl font-bold mb-8">All Investigations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherInvestigations.map((article, idx) => (
                <Link key={idx} href={article.url}>
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full bg-white border-0 shadow-md hover:border-red-200">
                    <div className="flex items-center gap-2 text-xs font-sans font-bold text-red-600 uppercase tracking-wider mb-4">
                      <FileSearch className="h-4 w-4" />
                      <span>Investigation</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.views}
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a Tip?</h3>
            <p className="text-gray-300 max-w-xl mx-auto mb-6">
              Know about shady practices in the gambling industry? Our investigative team 
              protects sources and follows every credible lead.
            </p>
            <a 
              href="mailto:tips@fairplaygaming.co" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Submit Anonymous Tip
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
