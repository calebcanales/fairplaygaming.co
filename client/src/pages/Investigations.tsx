import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function Investigations() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const investigations = [
    {
      title: "Why Your Sportsbook Might Be Limiting Your Winnings",
      url: "/articles/why-sportsbooks-limit-winners",
      category: "Account Management",
      description: "Commission investigation reveals how sportsbooks identify and restrict profitable accounts."
    },
    {
      title: "Payout Speed Investigation: 17 Major Sportsbooks Tested",
      url: "/articles/payout-speed-investigation",
      category: "Banking",
      description: "30x speed difference between fastest and slowest withdrawal processing."
    },
    {
      title: "Hidden Terms in Popular Sports Betting Bonuses — Exposed",
      url: "/articles/bonus-terms-exposed",
      category: "Bonuses",
      description: "Why most sportsbook bonuses are designed to trap, not reward."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img src="/images/logo_dark.png" alt="Fairplay Gaming Commission" className="h-12 w-auto cursor-pointer" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-bold text-gray-800 uppercase tracking-wider">
              <Link href="/investigations" className="hover:text-red-600 transition-colors text-red-600">Investigations</Link>
              <Link href="/sports-analysis" className="hover:text-red-600 transition-colors">Sports Analysis</Link>
              <Link href="/scam-alerts" className="hover:text-red-600 transition-colors">Scam Alerts</Link>
              <Link href="/verified-sites" className="hover:text-red-600 transition-colors">Verified Sites</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex font-sans">Subscribe</Button>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 font-sans">Login</Button>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Investigations</h1>
            <p className="text-xl text-gray-600">
              In-depth investigations exposing industry practices that affect your betting experience.
            </p>
          </div>

          <div className="space-y-8">
            {investigations.map((article, idx) => (
              <Link key={idx} href={article.url}>
                <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-red-600 uppercase tracking-wider mb-3">
                    <span>Investigation</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-3 hover:text-red-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {article.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
