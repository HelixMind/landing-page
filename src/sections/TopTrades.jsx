import { topTrades } from "../../constants";

// comp
import TopTradeCard from "../components/TopTradeCard";

const TopTrades = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
          Top Performing <span className="grad1 clash-display">Trades</span>
        </h2>

        <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
          A transparent record of high-conviction trades, precise timing, and
          consistently outsized returns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {topTrades.map((trade) => (
          <TopTradeCard key={trade.id} {...trade} />
        ))}
      </div>
    </section>
  );
};

export default TopTrades;
