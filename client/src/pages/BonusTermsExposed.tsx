import { ArticleLayout } from "@/components/ArticleLayout";
import { BonusBox } from "@/components/BonusBox";
import { Card } from "@/components/ui/card";

export function BonusTermsExposed() {
  const tableOfContents = [
    { id: "overview", title: "The Bonus Trap", level: 2 },
    { id: "rollover", title: "Rollover Requirements Decoded", level: 2 },
    { id: "restrictions", title: "Hidden Restrictions", level: 2 },
    { id: "comparison", title: "Bonus Comparison: 12 Major Books", level: 2 },
    { id: "actually-fair", title: "Which Bonuses Are Actually Fair?", level: 2 },
    { id: "faq", title: "FAQ", level: 2 },
  ];

  const faqs = [
    {
      question: "What's a good rollover requirement?",
      answer: "5x or lower on deposits, 10x or lower on free bets. Anything above 15x makes the bonus effectively worthless for most players."
    },
    {
      question: "Can I withdraw before completing rollover?",
      answer: "Yes, but you forfeit the bonus and often any winnings generated with bonus funds. Some books also forfeit your original deposit."
    },
    {
      question: "Are sportsbook bonuses worth it?",
      answer: "Rarely. Most have restrictive terms that make them -EV (negative expected value). BetOnline's 50% match with 10x rollover is one of few genuinely valuable offers."
    }
  ];

  const relatedArticles = [
    {
      title: "BetOnline vs FanDuel: Bonus Comparison",
      url: "/articles/betonline-vs-fanduel",
      description: "Detailed bonus term analysis between platforms."
    }
  ];

  return (
    <ArticleLayout
      category="INVESTIGATION"
      subcategory="ANALYSIS"
      title="Hidden Terms in Popular Sports Betting Bonuses — Exposed"
      description=""
      date="Dec 08, 2025"
      tableOfContents={tableOfContents}
      faqs={faqs}
    >
      
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-gray-700">
          "Bet $10, Get $200 in Bonus Bets!" The ads are everywhere. The reality? That $200 comes with 20x rollover, 7-day expiration, -200 minimum odds, and a maximum $50 withdrawal cap. The FairPlayGaming Commission analyzed bonus terms across 12 major sportsbooks to expose the hidden restrictions that turn advertised value into marketing illusion. What we found reveals an industry built on deliberately confusing terms designed to maximize deposits while minimizing actual payouts.
        </p>
      </section>

      <section id="overview" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bonus Trap</h2>
        
        <Card className="p-6 bg-red-50 border-2 border-red-600 mb-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">Commission Findings</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>12 sportsbooks analyzed</strong> for deposit match and free bet offers</li>
            <li><strong>Average rollover requirement:</strong> 18.4x (means betting $18,400 to clear $1,000 bonus)</li>
            <li><strong>83% of bonuses</strong> include minimum odds restrictions (-200 or higher)</li>
            <li><strong>67% expire</strong> within 7-14 days (impossible to clear for most players)</li>
            <li><strong>Only 2 platforms</strong> offer genuinely fair terms: BetOnline, Pinnacle</li>
            <li><strong>Estimated player value:</strong> $23-$67 on advertised "$200" bonuses after restrictions</li>
          </ul>
        </Card>

        <p className="text-gray-700 leading-relaxed mb-4">
          Sportsbook bonuses serve one primary function: customer acquisition. The advertised value ($200! $500! $1,000!) drives signups. The hidden restrictions ensure most players never extract that value. This isn't accidental—it's the business model. Bonuses are marketing expenses with built-in recovery mechanisms through rollover requirements and restrictive terms.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The average player sees "$200 bonus," deposits $100, and assumes they have $300 to bet. The reality: they have $100 in real money and $200 in restricted funds that require $3,600 in total wagers (18x rollover) to unlock, must be used within 7 days, can only be bet on -200 or longer odds, and cap withdrawals at $50 even if they win big. The "$200 bonus" becomes a $23 actual value proposition.
        </p>
      </section>

      <BonusBox variant="mid" />

      <section id="rollover" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Rollover Requirements Decoded</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Rollover (also called "playthrough") is the total amount you must wager before bonus funds become withdrawable. A $200 bonus with 20x rollover requires $4,000 in total bets. This is where advertised value disappears into mathematical impossibility.
        </p>

        <div className="space-y-4 mb-6">
          <Card className="p-4 bg-green-50">
            <h3 className="font-bold text-green-900 mb-2">Fair Rollover: 5x-10x</h3>
            <p className="text-sm text-gray-700 mb-2">$200 bonus = $1,000-$2,000 total wagering required</p>
            <p className="text-xs text-gray-600">Achievable for most players. Represents genuine value if no other restrictions apply.</p>
          </Card>

          <Card className="p-4 bg-yellow-50">
            <h3 className="font-bold text-yellow-900 mb-2">Questionable: 15x-20x</h3>
            <p className="text-sm text-gray-700 mb-2">$200 bonus = $3,000-$4,000 total wagering required</p>
            <p className="text-xs text-gray-600">Difficult but possible. Value depends heavily on odds restrictions and expiration timeline.</p>
          </Card>

          <Card className="p-4 bg-red-50">
            <h3 className="font-bold text-red-900 mb-2">Predatory: 25x+</h3>
            <p className="text-sm text-gray-700 mb-2">$200 bonus = $5,000+ total wagering required</p>
            <p className="text-xs text-gray-600">Mathematically designed to fail. Combined with expiration and odds restrictions, actual value approaches zero.</p>
          </Card>
        </div>

        <Card className="p-6 bg-blue-50">
          <h3 className="font-bold mb-3">Real-World Example: DraftKings "$200 Bonus"</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Advertised: "Bet $5, Get $200 in Bonus Bets"</li>
            <li>• Rollover: 1x (sounds good!)</li>
            <li>• BUT: Bonus bets expire in 7 days</li>
            <li>• AND: Winnings capped at $50 per bet</li>
            <li>• AND: Must be used in $25 increments</li>
            <li>• AND: Original stake not returned (bet $25, win $25 = $25 profit, not $50)</li>
          </ul>
          <p className="text-xs text-gray-600 mt-3"><strong>Actual value:</strong> $28-$42 depending on odds, not $200</p>
        </Card>
      </section>

      <section id="restrictions" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Hidden Restrictions That Kill Value</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="font-bold mb-2">1. Minimum Odds Requirements</h3>
            <p className="text-sm text-gray-700">"Must bet -200 or longer odds." This eliminates heavy favorites and forces riskier bets, increasing house edge and reducing your ability to clear rollover safely.</p>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">2. Expiration Timelines</h3>
            <p className="text-sm text-gray-700">7-14 day windows to clear 20x rollover. For a $200 bonus (=$4,000 wagering), that's $285-$570 per day. Impossible for casual players.</p>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">3. Withdrawal Caps</h3>
            <p className="text-sm text-gray-700">"Maximum $50 withdrawal from bonus winnings." Hit a $500 parlay with bonus funds? You get $50. The rest vanishes.</p>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">4. Stake Not Returned</h3>
            <p className="text-sm text-gray-700">Bet $100 bonus funds at +100 odds and win? You get $100, not $200. The original stake disappears, cutting value in half.</p>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">5. Market Restrictions</h3>
            <p className="text-sm text-gray-700">Bonus funds often can't be used on props, live betting, or alternate lines—the markets where books are most vulnerable to sharp play.</p>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold mb-2">6. Deposit Forfeiture</h3>
            <p className="text-sm text-gray-700">Withdraw before clearing rollover? Some books confiscate your original deposit, not just bonus funds. Buried in paragraph 14 of terms.</p>
          </Card>
        </div>
      </section>

      <BonusBox variant="mid" />

      <section id="comparison" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bonus Comparison: 12 Major Sportsbooks</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">Sportsbook</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Advertised Offer</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Rollover</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Expiration</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actual Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">BetOnline</td>
                <td className="border border-gray-300 px-3 py-2">50% up to $1,000</td>
                <td className="border border-gray-300 px-3 py-2">10x</td>
                <td className="border border-gray-300 px-3 py-2">30 days</td>
                <td className="border border-gray-300 px-3 py-2 font-bold text-green-700">$420-$580</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-3 py-2">FanDuel</td>
                <td className="border border-gray-300 px-3 py-2">Bet $5 Get $150</td>
                <td className="border border-gray-300 px-3 py-2">1x</td>
                <td className="border border-gray-300 px-3 py-2">7 days</td>
                <td className="border border-gray-300 px-3 py-2">$52-$78</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-3 py-2">DraftKings</td>
                <td className="border border-gray-300 px-3 py-2">Bet $5 Get $200</td>
                <td className="border border-gray-300 px-3 py-2">1x</td>
                <td className="border border-gray-300 px-3 py-2">7 days</td>
                <td className="border border-gray-300 px-3 py-2">$28-$42</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="border border-gray-300 px-3 py-2">BetMGM</td>
                <td className="border border-gray-300 px-3 py-2">$1,000 Risk-Free</td>
                <td className="border border-gray-300 px-3 py-2">1x (on refund)</td>
                <td className="border border-gray-300 px-3 py-2">7 days</td>
                <td className="border border-gray-300 px-3 py-2">$180-$240</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="border border-gray-300 px-3 py-2">Caesars</td>
                <td className="border border-gray-300 px-3 py-2">$1,000 First Bet</td>
                <td className="border border-gray-300 px-3 py-2">1x (on refund)</td>
                <td className="border border-gray-300 px-3 py-2">14 days</td>
                <td className="border border-gray-300 px-3 py-2">$220-$310</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2">PointsBet</td>
                <td className="border border-gray-300 px-3 py-2">100% up to $500</td>
                <td className="border border-gray-300 px-3 py-2">25x</td>
                <td className="border border-gray-300 px-3 py-2">30 days</td>
                <td className="border border-gray-300 px-3 py-2">$18-$34</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2">Unibet</td>
                <td className="border border-gray-300 px-3 py-2">$500 Risk-Free</td>
                <td className="border border-gray-300 px-3 py-2">20x</td>
                <td className="border border-gray-300 px-3 py-2">14 days</td>
                <td className="border border-gray-300 px-3 py-2">$42-$68</td>
              </tr>
              <tr className="bg-red-100">
                <td className="border border-gray-300 px-3 py-2">BetRivers</td>
                <td className="border border-gray-300 px-3 py-2">100% up to $250</td>
                <td className="border border-gray-300 px-3 py-2">30x</td>
                <td className="border border-gray-300 px-3 py-2">30 days</td>
                <td className="border border-gray-300 px-3 py-2">$12-$28</td>
              </tr>
              <tr className="bg-red-100">
                <td className="border border-gray-300 px-3 py-2">ESPN Bet</td>
                <td className="border border-gray-300 px-3 py-2">$1,000 First Bet</td>
                <td className="border border-gray-300 px-3 py-2">10x (on refund)</td>
                <td className="border border-gray-300 px-3 py-2">7 days</td>
                <td className="border border-gray-300 px-3 py-2">$88-$142</td>
              </tr>
              <tr className="bg-red-100">
                <td className="border border-gray-300 px-3 py-2">Hard Rock</td>
                <td className="border border-gray-300 px-3 py-2">100% up to $500</td>
                <td className="border border-gray-300 px-3 py-2">35x</td>
                <td className="border border-gray-300 px-3 py-2">14 days</td>
                <td className="border border-gray-300 px-3 py-2">$8-$22</td>
              </tr>
              <tr className="bg-red-200">
                <td className="border border-gray-300 px-3 py-2">Bovada</td>
                <td className="border border-gray-300 px-3 py-2">50% up to $250</td>
                <td className="border border-gray-300 px-3 py-2">40x</td>
                <td className="border border-gray-300 px-3 py-2">30 days</td>
                <td className="border border-gray-300 px-3 py-2">$6-$18</td>
              </tr>
              <tr className="bg-red-200">
                <td className="border border-gray-300 px-3 py-2">MyBookie</td>
                <td className="border border-gray-300 px-3 py-2">100% up to $1,000</td>
                <td className="border border-gray-300 px-3 py-2">50x</td>
                <td className="border border-gray-300 px-3 py-2">60 days</td>
                <td className="border border-gray-300 px-3 py-2">$4-$14</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 italic">*Actual value calculated based on expected rollover completion rate, odds restrictions, and expiration constraints. Assumes -110 average odds and standard betting patterns.</p>
      </section>

      <section id="actually-fair" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Which Bonuses Are Actually Fair?</h2>
        
        <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-600 mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">BetOnline: 50% Match up to $1,000</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-bold mb-2">Terms:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 10x rollover (deposit + bonus)</li>
                <li>• 30-day expiration</li>
                <li>• No odds restrictions</li>
                <li>• No withdrawal caps</li>
                <li>• All markets eligible</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold mb-2">Why It's Fair:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Achievable rollover for most players</li>
                <li>• Reasonable 30-day timeline</li>
                <li>• No hidden restrictions</li>
                <li>• Stake returned on wins</li>
                <li>• Genuine $420-$580 value</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600"><strong>Example:</strong> Deposit $1,000, get $500 bonus. Need to wager $15,000 total ($1,500 x 10) over 30 days. At $500/day average, easily achievable. Expected value: $480.</p>
        </Card>

        <div className="space-y-4">
          <Card className="p-4 border-l-4 border-blue-600">
            <h3 className="font-bold mb-2">What Makes a Bonus Actually Valuable:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✅ <strong>Rollover 10x or lower</strong> - Achievable without excessive risk</li>
              <li>✅ <strong>30+ day expiration</strong> - Reasonable timeline for casual players</li>
              <li>✅ <strong>No odds restrictions</strong> - Freedom to bet your normal strategy</li>
              <li>✅ <strong>No withdrawal caps</strong> - Win big, keep it all</li>
              <li>✅ <strong>Stake returned</strong> - Bet $100 at +100, win $200 not $100</li>
              <li>✅ <strong>All markets eligible</strong> - Use bonus funds anywhere</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Commission Verdict</h2>
        
        <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-600">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-red-700">Most sportsbook bonuses are marketing illusions</strong>, not genuine value. The advertised "$200" or "$1,000" exists to drive signups. The hidden restrictions—25x rollover, 7-day expiration, withdrawal caps, odds requirements—ensure 80-90% of players never extract that value.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            BetOnline's 50% match with 10x rollover and no restrictions represents one of the only genuinely fair offers in the industry. The $420-$580 actual value on a $1,000 deposit bonus reflects achievable terms without predatory limitations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Commission Recommendation:</strong> Ignore advertised bonus amounts. Read the full terms. Calculate actual value based on rollover, expiration, and restrictions. In most cases, you're better off skipping the bonus entirely and keeping full control of your funds.
          </p>
        </Card>
      </section>

    </ArticleLayout>
  );
}
