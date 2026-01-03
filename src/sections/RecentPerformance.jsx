
// constants
import { recentPerformance } from "../../constants"

// comp
import TopTradeCard from "../components/TopTradeCard"

const RecentPerformance = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
       
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
                Recent <span className='grad-1 clash-display'>Performnace</span>
            </h2>

            <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
                A snapshot of the most recent results, showing current momentum and short-term performance.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recentPerformance.map((item) => (
          <TopTradeCard key={item.symbol} {...item} heading="Recent Performance" />
        ))}
        </div>
    </section>
  )
}

export default RecentPerformance
