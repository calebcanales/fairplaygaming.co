import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle, Shield, Clock, ChevronRight, Bell, CheckCircle2, XCircle } from "lucide-react";

export default function ScamAlerts() {
  const alerts = [
    {
      title: "Is Stake.com Rigged? The 'RTP Scandal' Explained",
      url: "/",
      severity: "high",
      status: "Active",
      description: "Reports flooding in about massive irregularities in Stake's 'original' games. Players reporting impossible losing streaks and suspicious RTP patterns.",
      date: "Dec 2025",
      reports: "2,847"
    },
    {
      title: "Roobet Withdrawal Delays Affecting Thousands",
      url: "#",
      severity: "medium",
      status: "Monitoring",
      description: "Multiple reports of withdrawal delays extending beyond 7 days. Customer support reportedly unresponsive to affected users.",
      date: "Nov 2025",
      reports: "1,234"
    },
    {
      title: "Fake 'Guaranteed Wins' Telegram Groups",
      url: "#",
      severity: "high",
      status: "Active",
      description: "Scammers posing as professional handicappers charging $500+ for 'VIP picks' with fabricated track records.",
      date: "Dec 2025",
      reports: "892"
    }
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-red-50",
          border: "border-red-500",
          badge: "bg-red-600",
          text: "text-red-600"
        };
      case "medium":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-500",
          badge: "bg-yellow-600",
          text: "text-yellow-600"
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-500",
          badge: "bg-gray-600",
          text: "text-gray-600"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-serif text-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white py-16 md:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-red-600/30 border border-red-500/50 rounded-full px-4 py-2 mb-6 animate-pulse">
                <AlertTriangle className="h-4 w-4 text-red-300" />
                <span className="text-sm font-sans font-bold text-red-200 uppercase tracking-wider">
                  Active Alerts
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Scam Alerts &<br />
                <span className="text-red-400">Fraud Warnings</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Real-time warnings about fraudulent operators, rigged platforms, and industry scams. 
                Protect yourself before it's too late.
              </p>
            </div>
          </div>
        </div>

        {/* Alert Stats */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Active Alerts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4,973</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Reports Filed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-500 font-sans uppercase tracking-wider">Scams Exposed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12 md:py-16">
          {/* Subscribe Alert */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">Get Instant Alerts</h3>
                <p className="text-gray-400 text-sm">Be the first to know about new scams and fraud warnings</p>
              </div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8">
              Subscribe to Alerts
            </Button>
          </div>

          {/* Active Alerts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
              Active Scam Alerts
            </h2>
            <div className="space-y-6">
              {alerts.map((alert, idx) => {
                const styles = getSeverityStyles(alert.severity);
                return (
                  <Link key={idx} href={alert.url}>
                    <Card className={`${styles.bg} border-l-4 ${styles.border} hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden`}>
                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <AlertTriangle className={`h-5 w-5 ${styles.text}`} />
                          <span className={`${styles.badge} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
                            {alert.severity} Severity
                          </span>
                          <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                            {alert.status}
                          </span>
                          <span className="text-gray-500 text-sm ml-auto">{alert.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-red-700 transition-colors">
                          {alert.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {alert.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {alert.reports} reports filed
                          </span>
                          <span className={`flex items-center gap-2 ${styles.text} font-bold group-hover:gap-4 transition-all`}>
                            Read Full Alert <ChevronRight className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Safe Alternative */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-600 p-3 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Verified Safe Alternative</h3>
                <p className="text-green-700">
                  Looking for a trustworthy platform? BetOnline has operated since 2001 with zero rigging scandals 
                  and fast crypto payouts.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">23+ Years</div>
                <div className="text-sm text-gray-500">Operating History</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Zero</div>
                <div className="text-sm text-gray-500">Rigging Scandals</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">12 Min</div>
                <div className="text-sm text-gray-500">Crypto Payouts</div>
              </div>
            </div>

            <Link href="/verified-sites">
              <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-lg">
                View Verified Operators →
              </Button>
            </Link>
          </Card>

          {/* How to Spot Scams */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">How to Spot a Gambling Scam</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-red-600 flex items-center gap-2">
                  <XCircle className="h-5 w-5" /> Red Flags
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    No verifiable licensing or regulation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Withdrawal delays beyond 48 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    Hidden or changing bonus terms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    No live customer support
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Green Flags
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    Long operating history (5+ years)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    Fast, reliable payouts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    Transparent terms and conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    Responsive customer service
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Report Section */}
          <div className="mt-12 bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Been Scammed?</h3>
            <p className="text-gray-300 max-w-xl mx-auto mb-6">
              Report fraudulent operators to help protect other players. 
              Your report could prevent someone else from losing their money.
            </p>
            <a 
              href="mailto:reports@fairplaygaming.co" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Report a Scam
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
