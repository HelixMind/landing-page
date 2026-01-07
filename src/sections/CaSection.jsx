import {Button} from "../components/ui/button.jsx"

const CaSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 relative bg-black">
      <div
        className="absolute inset-0 opacity-40 scale-80"
        style={{
          backgroundImage: "url(/helix-metal.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="bg-[#0a0a0a]/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium clash-display mb-4">
          Advance Your Research with AI
        </h2>

        <p className="text-[0.9rem] lg:text-lg mb-8 max-w-2xl mx-auto text-zinc-300/80">
          {" "}
          Discover why researches trust HelixMind for AI-driven research.
        </p>

        <Button className="py-6">
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default CaSection
