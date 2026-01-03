import { Check } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";

const BadgeCard = ({ badge, title, description,}) => {
  return (
    <CardSpotlight>
      <div className="relative h-full p-6 flex flex-col">

        {/* Name */}
        <h3 className="clash-display text-xl">{badge}</h3>

        {/* Price */}
        <div className="mb-4 mt-2">
          <span className="text-4xl font-bold clash-display text-indigo-300">
            {title}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base mb-6">{description}</p>

        {/* Options */}
        {/* <ul className="space-y-3 mb-6 flex-grow ">
          {features.map((feature, index) => (
            <li key={index} className="centered-row gap-2">
              <Check className="w-5 h-5 text-indigo-300" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul> */}

        {/* Button */}

        {/* <button className="bg-indigo-500 py-4 w-full text-zinc-50 rounded-full text-lg clash-display cursor-pointer hover:bg-indigo-400/10 hover:text-indigo-300 transition2 ">
          Join The Circle
        </button> */}
      </div>
    </CardSpotlight>
  );
};

export default BadgeCard;
