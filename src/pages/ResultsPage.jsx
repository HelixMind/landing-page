// lib
import { cn } from "../lib/utils.js";

// sections
import ResultsHeroSection from "../sections/ResultsHeroSection.jsx";
import StatsChart from "../sections/StatsCharts.jsx";
import TestimonailSection from '../sections/TestimonialSection.jsx';
import CaSection from '../sections/CaSection.jsx';
import TopTrades from "../sections/TopTrades.jsx";
import MonthlyAnalytics from "../sections/MonthlyAnalytics.jsx";
import RecentPerformance from "../sections/RecentPerformance.jsx";

export default function ResultsPage({ className }) {
  return (
    <>
      <div className={cn("bg-black mx-auto", className)}>
        <ResultsHeroSection />
        <StatsChart />
        <TopTrades />
        <RecentPerformance />
        <MonthlyAnalytics />
        <TestimonailSection />
        <CaSection />
      </div>
    </>
  );
}