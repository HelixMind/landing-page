import { ourStory } from "../../constants";

export default function OurStory() {
  return (
    <>
      <section id="prices" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
            Our <span className="grad-1 clash-display">Story</span>
          </h2>
        </div>

        <div className="md:col-span-5 space-y-3">
          <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto p-0 space-y-3">
            {ourStory.map((story, index) => (
              <div
                key={index}
                className={`rounded-xl centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-4 transition-all duration-300 ease-out`}
              >
                <div>{story.icon}</div>
                <div className="col gap-1">
                  <h3 className="font-semibold text-lg lg:text-3xl clash-display grad1">
                    {story.title}
                  </h3>
                  <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
