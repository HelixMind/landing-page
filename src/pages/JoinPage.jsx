// lib
import { cn } from "../lib/utils.js";

// sections
import JoinHeroSection from "../sections/JoinHeroSection.jsx";
import JoinForm from "../sections/JoinForm.jsx";
import RequirementsSection from "../sections/RequirementsSection.jsx";
import ApplicationProcess from "../sections/ApplicationProcessSection.jsx";
import WaitlistLeaderboard from "../components/WaitlistLeaderboard.jsx";

export default function JoinPage({ className }) {
  return (
    <>
      <div className={cn("bg-black mx-auto", className)}>
        <JoinHeroSection />
        <JoinForm />
        <WaitlistLeaderboard />
        <RequirementsSection />
        <ApplicationProcess />
      </div>
    </>
  );
}
