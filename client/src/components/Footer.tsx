import { Link } from "wouter";
import { Shield, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl text-white">FairPlay Gaming</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Independent investigative journalism exposing the truth about online gambling. 
              We test, verify, and report so you can make informed decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/investigations" className="hover:text-white transition-colors">
                  Investigations
                </Link>
              </li>
              <li>
                <Link href="/sports-analysis" className="hover:text-white transition-colors">
                  Sports Analysis
                </Link>
              </li>
              <li>
                <Link href="/scam-alerts" className="hover:text-white transition-colors">
                  Scam Alerts
                </Link>
              </li>
              <li>
                <Link href="/verified-sites" className="hover:text-white transition-colors">
                  Verified Sites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>tips@fairplaygaming.co</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>1-800-522-4700 (NCPG)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:1-800-522-4700" className="hover:text-gray-300 transition-colors">
                1-800-522-4700
              </a>
              <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                NCPG
              </a>
              <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                Gamblers Anonymous
              </a>
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                BeGambleAware
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} FairPlay Gaming Commission. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
