import { ArrowRight, Command } from "lucide-react";
import {Link} from "react-router";


const HeroSection = () => {
  return (
      <>
        <section className="relative flex flex-col justify-center items-center container mx-auto px-4 pt-40 pb-20">
          <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass">
            <span className="text-sm font-medium text-zinc-300">
              <img src="./logo.png" alt="" className="w-4 h-4 inline-block mr-2" />
              {/* <Command className="w-4 h-4 inline-block mr-2" /> */}
              Become one of The GOATs
            </span>
          </div>

          <div className=" max-w-4xl relative z-10">
            <h1 className="text-4xl text-center md:text-7xl mb-4 tracking-tight">
              <span className="clash-display grad1">Unlock access to</span>
              <br />
              <span className="clash-display font-medium text-zinc-50">
                The GOAT Inner Circle
              </span>
            </h1>

            <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 mb-8 max-w-2xl text-center">
              Professional trading community with <span className="text-zinc-200">consistent performance</span>. Where expertise meets opportunity.
            </p>
 
            <div className="col sm:flex-row items-center justify-center gap-4 lg:items-start">
              <button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-[0.9rem] text-base clash-display px-4 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition2 ">
                Join The Circle
              </button>
              <button className="text-zinc-50 text-[0.9rem] text-base clash-display glass px-4 centered-row gap-2 py-3 rounded-full cursor-pointer hover:-translate-y-1 hover:bg-indigo-500/20">
              <Link to="/results" className="flex items-center gap-2">View Results <ArrowRight /></Link>
              </button>
            </div>
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

export default HeroSection
