import { ArrowRight, Command } from "lucide-react";
import { cn } from "../lib/utils.js";
import { Link } from "react-router";

export default function ResultsHeroSection({ className }) {
  return (
    <>
      <section
        className={cn(
          "relative flex flex-col justify-center items-center container mx-auto px-4 pt-40 pb-20",
          className
        )}
      >

        <div className=" max-w-4xl relative z-10">
          <h1 className="text-4xl text-center md:text-7xl mb-4 tracking-tight">
            <span className="clash-display grad1">Performance</span>
            <br />
            <span className="clash-display font-medium text-zinc-50">
              Results
            </span>
          </h1>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 mb-8 max-w-2xl text-center">
            Verified, data-driven trading performance backed by audited execution, risk-adjusted returns, and comprehensive portfolio analytics across multiple market cycles.
          </p>
        </div>

        {/*           <div className="relative mx-auto max-w-5xl mt-20">
            <div className="glass rounded-xl overflow-hidden">
              <img src="/chart2.png" alt="" className="w-full h-auto" />
            </div>
          </div> */}
      </section>
    </>
  );
}
