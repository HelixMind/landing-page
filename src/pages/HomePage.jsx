import CaSection from "../sections/CaSection";
import PerformanceMetrics from "../sections/PerformanceMetrics";
import HeroSection from "../sections/HeroSection";
import LogoCarousel from "../sections/LogoCarousel";
import OurAdvantage from "../sections/OurAdvantage";
import TestimonialSection from "../sections/TestimonialSection";


const HomePage = () => {
  return (
    <>
      <div className="bg-black mx-auto">
        <HeroSection />
        <LogoCarousel />
        <PerformanceMetrics />
        <OurAdvantage />
        <TestimonialSection />
        <CaSection />
      </div>
    </>
  );
}

export default HomePage;
