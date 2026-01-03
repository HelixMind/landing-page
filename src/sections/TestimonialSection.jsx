import { useRef } from "react";
import { testimonials } from "../../constants";

const TestimonialSection = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty("--marquee-play-state", "paused");
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty("--marquee-play-state", "running");
    }
  };

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-normal mb-4">Trusted By Traders</h2>
          <p className="text-zinc-400 text lg:text-lg">
            Join thousands of Satisfied traders on The GOAT
          </p>
        </div>

        <div className="relative flex flex-col antialiased">
          <div ref={marqueeRef} className="relative flex overflow-hidden py-4">
            <div
              className="min-w-full animate-marquee flex shrink-0 items-stretch gap-8"
              style={{ animationPlayState: "var(--marquee-play-state)" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 overflow-hidden text-xl rounded-full flex items-center justify-center text-center bg-pink-500">
                      {!testimonial.image ? (
                        <span aria-hidden="true">
                          {testimonial.name?.[0] ?? "?"}
                        </span>
                      ) : (
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} avatar`}
                          className="h-full w-full object-cover rounded-full"
                        />
                      )}
                    </div>

                    <div>
                      <h4 className="font-medium text-lg clash-display text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute h-full md:w-50 bg-gradient-to-r from-black to transparent -left-1"></div>
          <div className="absolute h-full md:w-50 bg-gradient-to-l from-black to transparent -right-1"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
