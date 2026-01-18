import CaSection from "../sections/CaSection.jsx";
import CoreFeatures from "../sections/CoreFeatures.jsx";
import Hero from "../sections/Hero.jsx";
import LogoCarousel from "../sections/LogoCarousel.jsx";
import OurAdvantage from "../sections/OurAdvantage.jsx";
import ResearchInsights from "../sections/ResearchInsights.jsx";
import TestimonialSection from "../sections/TestimonialSection.jsx";


const Home = () => {
  return (
    <>
      <div className="mx-auto bg-black">
        <Hero />
        {/* <LogoCarousel /> */}
        <CoreFeatures />
        <OurAdvantage />
        <ResearchInsights />
        {/* <TestimonialSection /> */}
        <CaSection />
      </div>
    </>
  );
}

export default Home;
