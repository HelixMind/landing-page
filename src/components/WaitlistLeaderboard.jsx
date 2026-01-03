import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "../components/CardSpotlight.jsx";

// Sample waitlist data
const waitlistData = [
  { id: 1, name: "Eric Mendez.", joined: "Dec 12, 2025" },
  { id: 2, name: "Sophia A.", joined: "Dec 14, 2025" },
  { id: 3, name: "Michael T.", joined: "Dec 15, 2025" },
  { id: 4, name: "Olivia R.", joined: "Dec 16, 2025" },
  { id: 5, name: "James K.", joined: "Dec 17, 2025" },
];

const WaitlistLeaderboard = () => {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <CardSpotlight>
        <div className="p-8 space-y-6 text-zinc-100">
          <h2 className="text-3xl md:text-4xl clash-display text-center mb-4">
            Waitlist Leaderboard
          </h2>
          <p className="text-center text-zinc-400 mb-6">
            Track the top members who joined our waitlist.
          </p>

          <div className="space-y-3">
            <AnimatePresence>
              {waitlistData.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                    index === 0
                      ? "bg-emerald-600/30"
                      : index === 1
                      ? "bg-indigo-500/20"
                      : "bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold">{index + 1}.</span>
                    <span className="text-md font-medium">{user.name}</span>
                  </div>
                  <span className="text-sm text-zinc-400">{user.joined}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
};

export default WaitlistLeaderboard;
