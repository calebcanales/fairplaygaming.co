import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import Sports from "@/pages/Sports";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sports" component={Sports} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
