import { AlertTriangle, Phone, ExternalLink } from "lucide-react";

export function ResponsibleGamblingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Responsible Gambling Header */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <h3 className="text-lg font-bold text-white">Responsible Gambling</h3>
          </div>
          
          {/* Main Content - Condensed */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400 max-w-3xl mx-auto">
              Gambling should be entertaining. If you or someone you know has a gambling problem, help is available 24/7.
            </p>
            
            {/* Helpline & Resources - Single Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <a 
                href="tel:1-800-522-4700" 
                className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors font-semibold"
              >
                <Phone className="h-4 w-4" />
                1-800-522-4700
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://www.ncpgambling.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors flex items-center gap-1"
              >
                NCPG <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://www.gamblersanonymous.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors flex items-center gap-1"
              >
                Gamblers Anonymous <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://www.begambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors flex items-center gap-1"
              >
                BeGambleAware <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">•</span>
              <div className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1 rounded">
                <span className="text-white font-bold">21+</span>
              </div>
            </div>

            {/* Disclaimer - Condensed */}
            <p className="text-xs text-gray-500 max-w-3xl mx-auto pt-3 border-t border-gray-800">
              This website provides information for entertainment purposes only. We are not responsible for gambling losses. 
              Please gamble responsibly and seek help if needed.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-3 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Fairplay Gaming Commission. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
