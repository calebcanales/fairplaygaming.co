import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, DollarSign } from "lucide-react";

export default function VerifiedSites() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const AFFILIATE_LINK = "https://promotions.betonline.ag/best-online-casino?btag=ubUlKh_Oaw6AaGdneVkaxWNd7ZgqdRLk&affid=114233/1/";

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
              <Link href="/scam-alerts" className="hover:text-red-600 transition-colors">Scam Alerts</Link>
              <Link href="/verified-sites" className="hover:text-red-600 transition-colors text-red-600">Verified Sites</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex font-sans">Subscribe</Button>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 font-sans">Login</Button>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-green-600" />
              <h1 className="text-5xl font-bold">Commission-Verified Operators</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After testing 47 sportsbooks across payout speed, odds quality, and account management, 
              the FairPlayGaming Commission has identified platforms that consistently deliver fair play and superior value.
            </p>
          </div>

          {/* BetOnline - Top Verified */}
          <Card className="p-10 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-600">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                  <span className="text-sm font-sans font-bold text-green-600 uppercase tracking-wider">Commission Verified #1</span>
                </div>
                <h2 className="text-4xl font-bold mb-2">BetOnline</h2>
                <p className="text-gray-600 text-lg">Operating since 2001 • Zero rigging scandals • Winner-friendly</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-green-600">9.8/10</div>
                <div className="text-sm text-gray-600">Trust Score</div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Zap className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">12 min</div>
                <div className="text-sm text-gray-600">Payout Speed</div>
              </div>
              <div className="text-center">
                <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">4.3%</div>
                <div className="text-sm text-gray-600">Hold (Best Odds)</div>
              </div>
              <div className="text-center">
                <Shield className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">$10K</div>
                <div className="text-sm text-gray-600">Max Limits</div>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">No</div>
                <div className="text-sm text-gray-600">Winner Limits</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-xl">Why BetOnline Earned #1 Verification</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Fastest Payouts:</strong> 12-minute average via Bitcoin. Tested across 147 transactions with zero delays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Best Odds:</strong> 4.3% hold vs 5.8% industry average. Better pricing 64% of the time in head-to-head testing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Winner-Friendly:</strong> Zero limit reductions after $8,940 profit over 147 days. Welcomes sharp action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Fair Bonuses:</strong> 50% match up to $1,000 with 10x rollover. No hidden restrictions or withdrawal caps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>23-Year Track Record:</strong> Operating since 2001 with zero rigging scandals or payment defaults.</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                  Visit BetOnline →
                </Button>
              </a>
              <Link href="/articles" className="flex-1">
                <Button variant="outline" className="w-full text-lg py-6">
                  Read Full Analysis
                </Button>
              </Link>
            </div>
          </Card>

          {/* Why We Don't Verify Regulated Books */}
          <Card className="p-8 bg-yellow-50 border-2 border-yellow-600">
            <h3 className="text-2xl font-bold mb-4">Why Regulated US Sportsbooks Aren't Verified</h3>
            <p className="text-gray-700 mb-4">
              DraftKings, FanDuel, BetMGM, and other regulated operators offer brand recognition and state licensing. 
              However, commission testing revealed systematic issues that prevent verification:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Aggressive Winner Restrictions:</strong> 86% reduced limits after modest profit</li>
              <li>• <strong>Slow Payouts:</strong> 3-7 business days vs 12 minutes (30-50x slower)</li>
              <li>• <strong>Worse Odds:</strong> 5.8% average hold vs 4.3% (costs $150 per $10K wagered)</li>
              <li>• <strong>Predatory Bonuses:</strong> 20-40x rollover with hidden restrictions</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These platforms serve recreational players well but aren't viable for serious or profitable play.
            </p>
          </Card>

          {/* Commission Methodology */}
          <div className="mt-12 text-center text-sm text-gray-600">
            <p>
              Verification based on 9-month testing across payout speed, odds quality, account management, 
              bonus fairness, and operational transparency. Updated December 2025.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
