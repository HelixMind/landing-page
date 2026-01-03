import BadgeCard from "../components/BadgeCard"
import { advantagePoints } from "../../constants"

const OurAdvantage = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
       
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
                Our <span className='grad-1 clash-display'>Advantage</span>
            </h2>

            <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
                Unlock exclusive insights, tools, and strategies only available to our Insider Members, designed to give you an edge in every trade.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
{
    advantagePoints.map(({_id,title,description,badge})=>(
        <BadgeCard key={_id}  title={title} description={description} badge={badge} />
    ))
}
        </div>
    </section>
  )
}

export default OurAdvantage
