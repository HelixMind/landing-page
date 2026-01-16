import { useEffect, useState, useRef } from "react";
import { features } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const CoreFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 2500);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleHover = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };
  const handleLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl lg:text-5xl md:text-6xl font-medium! mb-6 tracking-tight clash-display text-left">
            Core
            <br />
            <span className="clash-display grad1">
              Features
            </span>
          </h2>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 text-left">
            Our core features are designed to streamline research, enhance accuracy, and unlock deeper insights using advanced AI technology.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left */}
            <div className="md:col-span-5 space-y-3">
              <div className="col w-full h-auto p-0 space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}
                    onClick={() => setActiveIndex(index)}
                    className={`centered-row gap-4 cursor-pointer hover:bg-gray-500/10 p-2 transition-all duration-300 ease-out border rounded-xl ${
                      activeIndex === index
                        ? "border-primary/40 bg-gray-500/10"
                        : "border-transparent"
                    }`}
                  >
                    <div>{feature.icon}</div>
                    <div className="col gap-1">
                      <h3 className="text-base clash-display grad1 font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-300/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-7 min-h-[320px] centered-row">
              <AnimatePresence mode="wait">
                <motion.div
                  key={features[activeIndex].title}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -60,
                  }}
                  transition={{
                    duration: 0.5,ease:"easeOut"
                  }}
                  className="glass rounded-xl overflow-hidden w-full relative"
                >
                  <div className="inset-0 bg-gradient-to-r from-indigo-500 to-transparent">
                    <img
                      src={features[activeIndex].image}
                      className="w-full h-full object-contain relative z-10"
                      alt="Feature illustration"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreFeatures;
