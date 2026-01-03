// constants
import { monthlyAnalyticsData } from "../../constants"

// comp
import AnimatedPortfolioChart from "../components/AnimatedPortfolioChart"


const MonthlyAnalytics = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
       
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
                Monthly <span className='grad-1 clash-display'>Analytics</span>
            </h2>

            <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
                A detailed monthly overview highlighting performance trends, growth metrics, and overall trading consistency.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto overflow-hidden">
          <AnimatedPortfolioChart data={monthlyAnalyticsData} />
        </div>
    </section>
  )
}

export default MonthlyAnalytics