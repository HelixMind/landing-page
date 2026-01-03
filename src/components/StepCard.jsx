import { motion } from "framer-motion";
import { CardSpotlight } from "../components/CardSpotlight.jsx";

const StepCard = ({ stepNumber, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <CardSpotlight>
        <div className="p-6 flex flex-col h-full">
          {/* Step Badge */}
          <div className="w-10 h-10 mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
            {stepNumber}
          </div>

          {/* Title */}
          <h3 className="text-xl clash-display mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

export default StepCard;
