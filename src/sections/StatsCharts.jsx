import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { name: "Success Rate", value: 97.3, type: "percentage" },
  { name: "Total Returns", value: 24.7, type: "million" },
  { name: "Successful Trades", value: 1247, type: "number" },
  { name: "Unsuccessful Trades", value: 34, type: "number" },
];

// ⬇️ Truncate helper
const truncate = (text, maxLength = 10) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;

// ⬇️ Custom X-axis tick
const CustomTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y + 16}
      textAnchor="middle"
      fill="#fff"
      fontSize={14}
    >
      {truncate(payload.value, 12)}
    </text>
  );
};

const StatsChart = () => {
  return (
    <div className="bg-black/70 p-6 rounded-2xl text-zinc-100 shadow-lg max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center focus:outline-none">
      <div>
        <h2 className="text-3xl lg:text-5xl text-center lg:text-left mb-6 clash-display">
          Trading Stats <br />
          <span className="grad1 clash-display">Overview</span>
        </h2>
        <p className="lg:w-[80%] text-zinc-300 text-center lg:text-left mb-6">
          Key performance indicators showing your trading efficiency and results
        </p>
      </div>

      <div className="focus:outline-none overflow-hidden">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={stats}
            tabIndex={-1}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            maxBarSize={80}
          >
            <XAxis
              dataKey="name"
              tick={<CustomTick />}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1b1b1b",
                border: "1px solid #444",
                borderRadius: "0.5rem",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
              cursor={{ fill: "rgba(99,102,241,0.15)" }}
            />

            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
              barSize={50}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="p-3 bg-black/50 rounded-lg focus:outline-none"
            >
              <p className="text-2xl md:text-3xl font-bold">
                {stat.type === "percentage"
                  ? `${stat.value}%`
                  : stat.type === "million"
                  ? `$${stat.value}M`
                  : stat.value}
              </p>
              <p className="text-sm mt-1 text-zinc-300">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsChart;
