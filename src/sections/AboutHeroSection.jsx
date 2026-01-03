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
          <h1 className="text-4xl text-center md:text-7xl mb-4 tracking-tight">
            <span className="clash-display grad1">The Insider</span>
            <br />
            <span className="clash-display font-medium text-zinc-50">
              Network
            </span>
          </h1>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 mb-8 max-w-2xl text-center">
            Where elite traders share high-level intelligence, sharpen
            strategies, and celebrate legendary wins together.
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
