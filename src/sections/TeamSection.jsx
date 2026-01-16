import AvatarCard from "../components/AvatarCard";
import { teamMembers } from "../../constants";

export default function TeamSection() {
  return (
    <>
      <section id="prices" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display font-medium">
            The <span className="grad1 clash-display">Team</span>
          </h2>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80 max-w-3xl">
            Our team brings together diverse skills and perspectives, united by
            a focus on rigorous thinking, thoughtful decisions, and creating
            tools that help our product grow smarter every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map(({ _id, name, role, content, avatar }) => (
            <AvatarCard
              key={_id}
              avatar={avatar}
              title={name}
              description={content}
              subTitle={role}
            />
          ))}
        </div>
      </section>
    </>
  );
}
