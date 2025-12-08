import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Articles from "./pages/Articles";
import { BetOnlineVsDraftKings } from "./pages/BetOnlineVsDraftKings";
import { BetOnlineVsFanDuel } from "./pages/BetOnlineVsFanDuel";
import { BetOnlineVsBovada } from "./pages/BetOnlineVsBovada";
import { BetOnlineVsStake } from "./pages/BetOnlineVsStake";

export default function App() {
  return (
    <div className="min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sports-analysis" component={Sports} />
        <Route path="/articles" component={Articles} />
        <Route path="/articles/betonline-vs-draftkings" component={BetOnlineVsDraftKings} />
        <Route path="/articles/betonline-vs-fanduel" component={BetOnlineVsFanDuel} />
        <Route path="/articles/betonline-vs-bovada" component={BetOnlineVsBovada} />
        <Route path="/articles/betonline-vs-stake" component={BetOnlineVsStake} />
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
