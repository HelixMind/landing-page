import { Check } from "lucide-react";
import { CardSpotlight } from "../components/CardSpotlight.jsx";
import { motion } from "framer-motion";

const RequirementCard = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <CardSpotlight>
        <div className="p-6 h-full flex flex-col">
          {/* Icon */}
          <div className="w-10 h-10 mb-4 rounded-full bg-indigo-500/10 flex items-center justify-center">
            <Check className="w-5 h-5 text-indigo-400" />
          </div>

          {/* Content */}
          <h3 className="text-xl clash-display mb-2">{title}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

export default RequirementCard;
