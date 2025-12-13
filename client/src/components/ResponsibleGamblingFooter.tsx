import { AlertTriangle, Phone, ExternalLink } from "lucide-react";

export function ResponsibleGamblingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Responsible Gambling Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <h3 className="text-xl font-bold text-white">Responsible Gambling</h3>
          </div>
          
          <div className="text-center space-y-4 mb-8">
            <p className="text-sm leading-relaxed">
              Gambling should be entertaining. If you or someone you know has a gambling problem, 
              please seek help. The following organizations provide free, confidential support 24/7.
            </p>
            
            {/* Helpline Numbers */}
            <div className="flex flex-wrap justify-center gap-6 py-4">
              <a 
                href="tel:1-800-522-4700" 
                className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">1-800-522-4700</span>
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://www.ncpgambling.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                NCPG
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://www.gamblingtherapy.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                Gambling Therapy
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Age Restriction */}
            <div className="bg-gray-800 rounded-lg p-4 inline-block">
              <p className="text-white font-bold text-lg">21+</p>
              <p className="text-xs text-gray-400">Must be 21 or older to gamble</p>
            </div>
          </div>

          {/* Support Organizations */}
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">National Council on Problem Gambling</h4>
              <p className="text-gray-400 mb-2">24/7 confidential helpline and resources</p>
              <a 
                href="https://www.ncpgambling.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline flex items-center gap-1"
              >
                Visit Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Gamblers Anonymous</h4>
              <p className="text-gray-400 mb-2">Peer support meetings and recovery program</p>
              <a 
                href="https://www.gamblersanonymous.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline flex items-center gap-1"
              >
                Visit Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">BeGambleAware</h4>
              <p className="text-gray-400 mb-2">Free information and support services</p>
              <a 
                href="https://www.begambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline flex items-center gap-1"
              >
                Visit Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>
              This website provides information and reviews for entertainment purposes only. 
              We are not responsible for losses incurred through gambling. Please gamble responsibly 
              and within your means. If you believe you have a gambling problem, seek help immediately.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Fairplay Gaming Commission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
