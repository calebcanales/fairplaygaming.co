import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function ScamAlerts() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const alerts = [
    {
      title: "Is Stake.com Rigged? The 'RTP Scandal' Explained",
      url: "/",
      severity: "high",
      description: "Reports flooding in about massive irregularities in Stake's 'original' games."
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
              <Link href="/investigations" className="hover:text-red-600 transition-colors">Investigations</Link>
              <Link href="/sports-analysis" className="hover:text-red-600 transition-colors">Sports Analysis</Link>
              <Link href="/scam-alerts" className="hover:text-red-600 transition-colors text-red-600">Scam Alerts</Link>
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
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
              <h1 className="text-5xl font-bold">Scam Alerts</h1>
            </div>
            <p className="text-xl text-gray-600">
              Active warnings about fraudulent operators, rigged platforms, and industry scams.
            </p>
          </div>

          <div className="space-y-6">
            {alerts.map((alert, idx) => (
              <Link key={idx} href={alert.url}>
                <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-red-600 bg-red-50">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-red-600 uppercase tracking-wider mb-3">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Active Alert</span>
                    <span>•</span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded">HIGH SEVERITY</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-3 hover:text-red-700 transition-colors">
                    {alert.title}
                  </h2>
                  <p className="text-gray-700 text-lg">
                    {alert.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-green-50 border-2 border-green-600">
            <h3 className="text-2xl font-bold mb-4">Verified Safe Alternative</h3>
            <p className="text-gray-700 mb-4">
              Looking for a trustworthy platform? BetOnline has operated since 2001 with zero rigging scandals, 
              provably fair games, and 12-minute crypto payouts.
            </p>
            <Link href="/verified-sites">
              <Button className="bg-green-600 hover:bg-green-700">
                View Verified Operators
              </Button>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  );
}
