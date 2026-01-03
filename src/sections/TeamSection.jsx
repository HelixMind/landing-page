import AvatarCard from "../components/AvatarCard";
import { teamMembers } from "../../constants"

export default function TeamSection() {
  return (
    <>
      <section id="prices" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 clash-display">
            The <span className="grad-1 clash-display">Team</span>
          </h2>

          <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
            Unlock exclusive insights, tools, and strategies only available to
            our Insider Members, designed to give you an edge in every trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map(({ _id, name, role, content, avatar }) => (
            <AvatarCard key={_id} avatar={avatar} title={name} description={content} subTitle={role} />
          ))}
        </div>
      </section>
    </>
  );
}
