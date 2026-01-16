import { ArrowRight, Command } from "lucide-react";
import { cn } from "../lib/utils.js";
import { Link } from "react-router";

export default function AboutHeroSection({ className }) {
  return (
    <>
      <section
        className={cn(
          "relative flex flex-col justify-center items-center container mx-auto px-4 pt-40 pb-20",
          className
        )}
      >
        <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass">
          <span className="text-sm font-medium text-zinc-300">
            <img
              src="./logo.png"
              alt=""
              className="w-4 h-4 inline-block mr-2"
            />
            {/* <Command className="w-4 h-4 inline-block mr-2" /> */}
            The Inside Scoop
          </span>
        </div>

        <div className=" max-w-4xl relative z-10">
          <h1 className="text-4xl text-center md:text-7xl mb-4 tracking-tight font-medium">
            <span className="clash-display grad1">About</span>
            <br />
            <span className="clash-display text-zinc-50">HelixMind</span>
          </h1>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 mb-8 max-w-3xl text-center">
            HelixMind is an intelligent biotechnology platform built to simulate
            microbial systems, analyze genomic data, and predict biological
            outcomes before they happen.
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
