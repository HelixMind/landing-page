import { TrendingUp } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";
import { motion } from "framer-motion";

const TopTradeCard = ({
  symbol,
  date,
  sector,
  description,
  entry,
  peak,
  returnPercent,
  positionSize,
  pnl,
  heading = 'Top Trade',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="relative"
    >
      <CardSpotlight>
        <div className="relative h-full p-6 flex flex-col">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 clash-display">
              {heading}
            </span>
          </div>

          {/* Asset */}
          <h2 className="text-4xl clash-display text-indigo-300 mb-1">{symbol}</h2>
          <p className="text-sm text-gray-400">{date} • {sector}</p>

          {description && (
            <p className="text-sm text-zinc-400 mt-3 mb-6">{description}</p>
          )}

          {/* Metrics */}
          <div className="space-y-4 text-sm flex-grow">
            {entry && <Metric label="Entry" value={entry} />}
            {peak && peak !== "—" && <Metric label="Peak / Exit" value={peak} />}
            {returnPercent && (
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Return</span>
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="text-emerald-400 font-semibold"
                >
                  {returnPercent}
                </motion.span>
              </div>
            )}
            {positionSize && positionSize !== "—" && (
              <Metric label="Position Size" value={positionSize} />
            )}
          </div>

          {/* P&L */}
          {pnl && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-1">Realized P&L</p>
              <p className="text-2xl clash-display text-emerald-400">{pnl}</p>
            </div>
          )}
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

const Metric = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-400">{label}</span>
    <span className="text-gray-200">{value}</span>
  </div>
);

export default TopTradeCard;
