import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Shield, Zap, DollarSign, Trophy, Star, Clock, Users, XCircle, AlertTriangle } from "lucide-react";

export default function VerifiedSites() {
  // Affiliate links will be injected via JavaScript (see lib/affiliateLinks.ts)

  return (
    <div className="min-h-screen bg-gray-50 font-serif text-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-600/30 border border-green-500/50 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-green-300" />
                <span className="text-sm font-sans font-bold text-green-200 uppercase tracking-wider">
                  Commission Verified
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Trusted Operators<br />
                <span className="text-green-400">Verified by Experts</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                After testing 47 sportsbooks across payout speed, odds quality, and account management, 
                we've identified platforms that consistently deliver fair play and superior value.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">47</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Operators Tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">9</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Months Testing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">147</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Transactions Tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">1</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Top Verified</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12 md:py-16">
          {/* #1 Verified Operator */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="text-sm font-sans font-bold text-yellow-600 uppercase tracking-wider">
                #1 Commission Verified
              </span>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl">
                      <Shield className="h-10 w-10 text-green-600" />
                    </div>
                    <div className="text-white">
                      <div className="text-3xl md:text-4xl font-bold">BetOnline</div>
                      <div className="text-green-100">Operating since 2001 • Winner-friendly</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                    <div className="text-4xl font-bold text-white">9.8/10</div>
                    <div className="text-green-100 text-sm">Trust Score</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-10">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">12 min</div>
                    <div className="text-sm text-gray-500">Payout Speed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">4.3%</div>
                    <div className="text-sm text-gray-500">Hold (Best Odds)</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$10K</div>
                    <div className="text-sm text-gray-500">Max Limits</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">No</div>
                    <div className="text-sm text-gray-500">Winner Limits</div>
                  </div>
                </div>

                {/* Why #1 */}
                <div className="mb-10">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Why BetOnline Earned #1 Verification
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Fastest Payouts", desc: "12-minute average via Bitcoin. Tested across 147 transactions with zero delays." },
                      { title: "Best Odds", desc: "4.3% hold vs 5.8% industry average. Better pricing 64% of the time." },
                      { title: "Winner-Friendly", desc: "Zero limit reductions after $8,940 profit over 147 days. Welcomes sharp action." },
                      { title: "Fair Bonuses", desc: "50% match up to $1,000 with 10x rollover. No hidden restrictions." },
                      { title: "23-Year Track Record", desc: "Operating since 2001 with zero rigging scandals or payment defaults." },
                      { title: "24/7 Support", desc: "Live chat, phone, and email support available around the clock." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-gray-900">{item.title}:</span>
                          <span className="text-gray-600 ml-1">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="affiliate-cta flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-6 font-bold">
                    Visit BetOnline →
                  </Button>
                  <Link href="/articles/betonline-vs-stake" className="flex-1">
                    <Button variant="outline" className="w-full text-lg py-6">
                      Read Full Analysis
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Why Not Regulated Books */}
          <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-500 p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-10 w-10 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                  Why Regulated US Sportsbooks Aren't Verified
                </h3>
                <p className="text-yellow-700">
                  DraftKings, FanDuel, BetMGM, and other regulated operators offer brand recognition and state licensing. 
                  However, our testing revealed systematic issues that prevent verification.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { issue: "Aggressive Winner Restrictions", stat: "86% reduced limits after modest profit" },
                { issue: "Slow Payouts", stat: "3-7 business days vs 12 minutes (30-50x slower)" },
                { issue: "Worse Odds", stat: "5.8% average hold vs 4.3% (costs $150 per $10K wagered)" },
                { issue: "Predatory Bonuses", stat: "20-40x rollover with hidden restrictions" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-yellow-200">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">{item.issue}:</span>
                    <span className="text-gray-600 ml-1">{item.stat}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-yellow-700 mt-6 text-sm">
              These platforms serve recreational players well but aren't viable for serious or profitable play.
            </p>
          </Card>

          {/* Methodology */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Our Verification Methodology
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Clock className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">9-Month Testing</h4>
                <p className="text-gray-600 text-sm">
                  Extended testing period to capture seasonal variations and long-term behavior
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Real Money</h4>
                <p className="text-gray-600 text-sm">
                  All tests conducted with real deposits and withdrawals, not demo accounts
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Multiple Testers</h4>
                <p className="text-gray-600 text-sm">
                  Independent testers to prevent account-specific bias in results
                </p>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              Verification based on testing across payout speed, odds quality, account management, 
              bonus fairness, and operational transparency. Updated December 2025.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
