import RequirementCard from "../components/RequirementsCard";
import { requirements } from "../../constants";

const RequirementsSection = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
       
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
                Membership <span className='grad-1 clash-display'>Requirements</span>
            </h2>

            <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
                This circle is selective by design. Membership is reserved for traders who meet clearly defined standards.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {requirements.map((item, index) => (
          <RequirementCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
        </div>
    </section>
  )
}

export default RequirementsSection;
