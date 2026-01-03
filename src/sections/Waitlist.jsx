// JoinPage.jsx
import { cn } from "../lib/utils.js";
import { useState } from "react";

// sections
import JoinHeroSection from "../sections/JoinHeroSection.jsx";
import JoinForm from "../sections/JoinForm.jsx";
import RequirementsSection from "../sections/RequirementsSection.jsx";
import ApplicationProcess from "../sections/ApplicationProcessSection.jsx";
import Waitlist from "../sections/WaitList.jsx";

export default function JoinPage({ className }) {
  const [submitted, setSubmitted] = useState(false); // track if form submitted

  return (
    <div className={cn("bg-black mx-auto", className)}>
      <JoinHeroSection />

      {/* Show form or waitlist based on submission */}
      {!submitted ? (
        <JoinForm onSubmitSuccess={() => setSubmitted(true)} />
      ) : (
        <Waitlist />
      )}

      <RequirementsSection />
      <ApplicationProcess />
    </div>
  );
}
