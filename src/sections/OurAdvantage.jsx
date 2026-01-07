// components
import BadgeCard from "../components/BadgeCard.jsx";

// constants
import { advantagePoints } from "../../constants";

const OurAdvantage = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl md:text-6xl font-medium mb-6 clash-display">
          Our <span className="clash-display grad1">Advantages</span>
        </h2>

        <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
          Powerful AI-driven research tools, accurate biological modeling, and
          streamlined workflows designed to help researchers move faster and
          uncover deeper insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {advantagePoints.map(({ _id, title, description, badge }) => (
          <BadgeCard
            key={_id}
            title={title}
            description={description}
            badge={badge}
          />
        ))}
      </div>
    </section>
  );
};

export default OurAdvantage;
