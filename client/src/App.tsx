import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Articles from "./pages/Articles";
import { BetOnlineVsDraftKings } from "./pages/BetOnlineVsDraftKings";
import { BetOnlineVsFanDuel } from "./pages/BetOnlineVsFanDuel";
import { BetOnlineVsBovada } from "./pages/BetOnlineVsBovada";
import { BetOnlineVsStake } from "./pages/BetOnlineVsStake";
import { BetOnlineVsBetMGM } from "./pages/BetOnlineVsBetMGM";
import { BetOnlineVsCaesars } from "./pages/BetOnlineVsCaesars";
import { BetOnlineVsPointsBet } from "./pages/BetOnlineVsPointsBet";
import { TopCryptoPayoutSportsbooks } from "./pages/TopCryptoPayoutSportsbooks";
import { TopLiveBettingPlatforms } from "./pages/TopLiveBettingPlatforms";
import { TopHighRollerSportsbooks } from "./pages/TopHighRollerSportsbooks";
import Investigations from "./pages/Investigations";
import ScamAlerts from "./pages/ScamAlerts";
import VerifiedSites from "./pages/VerifiedSites";
import { WhySportsbooksLimitWinners } from "./pages/WhySportsbooksLimitWinners";
import { PayoutSpeedInvestigation } from "./pages/PayoutSpeedInvestigation";
import { BonusTermsExposed } from "./pages/BonusTermsExposed";
import { BetOnlineVsESPNBet } from "./pages/BetOnlineVsESPNBet";

export default function App() {
  return (
    <div className="min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sports-analysis" component={Sports} />
        <Route path="/investigations" component={Investigations} />
        <Route path="/scam-alerts" component={ScamAlerts} />
        <Route path="/verified-sites" component={VerifiedSites} />
        <Route path="/articles" component={Articles} />
        <Route path="/articles/betonline-vs-draftkings" component={BetOnlineVsDraftKings} />
        <Route path="/articles/betonline-vs-fanduel" component={BetOnlineVsFanDuel} />
        <Route path="/articles/betonline-vs-bovada" component={BetOnlineVsBovada} />
        <Route path="/articles/betonline-vs-stake" component={BetOnlineVsStake} />
        <Route path="/articles/betonline-vs-betmgm" component={BetOnlineVsBetMGM} />
        <Route path="/articles/betonline-vs-caesars" component={BetOnlineVsCaesars} />
        <Route path="/articles/betonline-vs-pointsbet" component={BetOnlineVsPointsBet} />
        <Route path="/articles/top-crypto-payout-sportsbooks" component={TopCryptoPayoutSportsbooks} />
        <Route path="/articles/top-live-betting-platforms" component={TopLiveBettingPlatforms} />
        <Route path="/articles/top-high-roller-sportsbooks" component={TopHighRollerSportsbooks} />
        <Route path="/articles/why-sportsbooks-limit-winners" component={WhySportsbooksLimitWinners} />
        <Route path="/articles/payout-speed-investigation" component={PayoutSpeedInvestigation} />
        <Route path="/articles/bonus-terms-exposed" component={BonusTermsExposed} />
        <Route path="/articles/betonline-vs-espnbet" component={BetOnlineVsESPNBet} />
        <Route>
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
              <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
              <a href="/" className="text-blue-600 hover:underline">Return to Homepage</a>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
