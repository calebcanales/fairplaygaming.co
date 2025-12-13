import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import { BetOnlineVsStake } from "./pages/BetOnlineVsStake";
import { BetOnlineVsDraftKings } from "./pages/BetOnlineVsDraftKings";
import { BetOnlineVsFanDuel } from "./pages/BetOnlineVsFanDuel";
import { BetOnlineVsBovada } from "./pages/BetOnlineVsBovada";
import { BetOnlineVsCaesars } from "./pages/BetOnlineVsCaesars";
import { BetOnlineVsBetMGM } from "./pages/BetOnlineVsBetMGM";
import { BetOnlineVsPointsBet } from "./pages/BetOnlineVsPointsBet";
import { BetOnlineVsESPNBet } from "./pages/BetOnlineVsESPNBet";
import { BonusTermsExposed } from "./pages/BonusTermsExposed";
import { PayoutSpeedInvestigation } from "./pages/PayoutSpeedInvestigation";
import { WhySportsbooksLimitWinners } from "./pages/WhySportsbooksLimitWinners";
import { TopCryptoPayoutSportsbooks } from "./pages/TopCryptoPayoutSportsbooks";
import { TopHighRollerSportsbooks } from "./pages/TopHighRollerSportsbooks";
import { TopLiveBettingPlatforms } from "./pages/TopLiveBettingPlatforms";
import Investigations from "./pages/Investigations";
import Sports from "@/pages/Sports";
import NFLWeek15Picks from "@/pages/NFLWeek15Picks";
import ScamAlerts from "./pages/ScamAlerts";
import VerifiedSites from "./pages/VerifiedSites";
import { ResponsibleGamblingFooter } from "./components/ResponsibleGamblingFooter";

function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Comparison articles */}
      <Route path="/articles/betonline-vs-stake" component={BetOnlineVsStake} />
      <Route path="/articles/betonline-vs-draftkings" component={BetOnlineVsDraftKings} />
      <Route path="/articles/betonline-vs-fanduel" component={BetOnlineVsFanDuel} />
      <Route path="/articles/betonline-vs-bovada" component={BetOnlineVsBovada} />
      <Route path="/articles/betonline-vs-caesars" component={BetOnlineVsCaesars} />
      <Route path="/articles/betonline-vs-mgm" component={BetOnlineVsBetMGM} />
      <Route path="/articles/betonline-vs-pointsbet" component={BetOnlineVsPointsBet} />
      <Route path="/articles/betonline-vs-espn-bet" component={BetOnlineVsESPNBet} />
      
      {/* Investigative articles */}
      <Route path="/articles/bonus-terms-exposed" component={BonusTermsExposed} />
      <Route path="/articles/payout-speed-investigation" component={PayoutSpeedInvestigation} />
      <Route path="/articles/why-sportsbooks-limit-winners" component={WhySportsbooksLimitWinners} />
      
      {/* Top lists */}
      <Route path="/articles/top-crypto-payout-sportsbooks" component={TopCryptoPayoutSportsbooks} />
      <Route path="/articles/top-high-roller-sportsbooks" component={TopHighRollerSportsbooks} />
      <Route path="/articles/top-live-betting-platforms" component={TopLiveBettingPlatforms} />
      
      {/* Navigation pages */}
      <Route path="/investigations" component={Investigations} />
      <Route path="/sports-analysis" component={Sports} />
      <Route path="/sports-analysis/nfl-week-15-picks" component={NFLWeek15Picks} />
      <Route path="/scam-alerts" component={ScamAlerts} />
      <Route path="/verified-sites" component={VerifiedSites} />
      
      <Route>404 - Page Not Found</Route>
    </Switch>
    <ResponsibleGamblingFooter />
    </>
  );
}

export default App;
