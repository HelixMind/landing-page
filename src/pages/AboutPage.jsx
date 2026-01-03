// lib
import { cn } from "../lib/utils.js";

// sections
import AboutHeroSection from "../sections/AboutHeroSection.jsx";
import CaSection from "../sections/CaSection.jsx";
import TeamSection from "../sections/TeamSection.jsx"
import CorePrinciples from "../sections/CorePrinciples.jsx";
import OurStory from "../sections/OurStory.jsx";

export default function AboutPage({ className }) {
  return (
    <>
      <div className={cn("bg-black mx-auto", className)}>
        <AboutHeroSection />
        <OurStory />
        <CorePrinciples />
        <TeamSection />
        <CaSection />
      </div>
    </>
  );
}
