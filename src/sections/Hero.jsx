// ui
import { Button } from "../components/ui/button.jsx";
import DNAHelix from "../components/DNAHelix.jsx";

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center container mx-auto px-4 pt-40 pb-20 overflow-hidden">
        
        {/* 🧬 Helix background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <DNAHelix />
        </div>

        {/* Content */}
        <div className="max-w-4xl relative z-10">
          <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass mx-auto">
            <span className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-300">
              <i className="bx bx-network-chart text-xl"></i>
              AI-Driven Insights for Modern Biology
            </span>
          </div>

          <h1 className="text-4xl text-center font-medium md:text-7xl mb-4 tracking-tight">
            <span className="clash-display grad1">Unlock AI Driven</span>
            <br />
            <span className="clash-display text-zinc-50">
              Biological Discovery
            </span>
          </h1>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 mb-8 max-w-2xl text-center mx-auto">
            A research-grade AI platform that turns biological data into
            actionable insight for researchers and biotech teams.
          </p>

          {/* cta */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://helix-mind.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full lg:w-fit"
            >
              <Button className="w-full lg:w-fit py-6 capitalize">
                Get Started
              </Button>
            </a>

            <a
              href="https://github.com/orgs/HelixMind/"
              rel="noreferrer noopener"
              target="_blank"
              className="w-full lg:w-fit"
            >
              <Button variant="ghost" className="w-full lg:w-fit py-6">
                <i className="bx bxl-github text-xl"></i>
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
