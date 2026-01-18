import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// shadcn imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { CardSpotlight } from "../components/CardSpotlight";

const chartData = [
  { year: "2020", cost: 300 },
  { year: "2025", cost: 400 },
  { year: "2030", cost: 550 },
  { year: "2035", cost: 700 },
  { year: "2040", cost: 850 },
  { year: "2045", cost: 950 },
  { year: "2050", cost: 1200 },
];

const ResearchInsights = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
      {/* ===== Header ===== */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl md:text-6xl font-medium mb-6 clash-display">
          Research <span className="clash-display grad1">Insights</span>
        </h2>

        <p className="text-[0.9rem] lg:text-lg text-zinc-300/80">
          HelixMind turns microbial genomes into real-time, predictive
          intelligence helping researchers and labs stay ahead of antimicrobial
          resistance.
        </p>
      </div>

      {/* ===== Content ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ===== Chart Card ===== */}
        <CardSpotlight className="py-8 pb-6 h-fit">
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-wider text-white font-medium">
              Global Impact Insight
            </CardTitle>
            <CardDescription className="text-zinc-300/80 mb-6 text-sm leading-relaxed">
              Drug-resistant infections are accelerating globally, overwhelming
              healthcare systems and slowing down therapeutic discovery.
              HelixMind applies genomic machine learning to predict resistance
              before it spreads.
            </CardDescription>
          </CardHeader>

          <CardContent className="h-[200px] lg:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart className="text-xs" data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="year" stroke="#d4d4d8" />
                <YAxis
                  stroke="#d4d4d8"
                  tickFormatter={(value) => `$${value}B`}
                />
                <Tooltip
                  formatter={(value) => [`$${value}B`, "Projected cost"]}
                  contentStyle={{
                    background: "#09090b",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="cost" radius={[5, 5, 0, 0]} fill="#b0e545" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </CardSpotlight>

        {/* ===== Data Summary Card ===== */}
        <CardSpotlight className=" p-8 flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
              ~1.2 Million Deaths Every Year
            </h3>
            <p className="text-sm lg:text-base text-zinc-300/80 leading-relaxed">
              Antimicrobial resistance is now responsible for approximately 1.2
              million direct deaths globally each year, with millions more cases
              linked to complications from drug-resistant infections. This
              growing health burden is rapidly becoming one of the most serious
              threats to modern medicine.
            </p>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
              Over $300 Billion in Annual Healthcare Costs
            </h3>
            <p className="text-sm lg:text-base text-zinc-300/80 leading-relaxed">
              Healthcare systems worldwide are already spending more than $300
              billion every year treating drug-resistant infections. These
              rising costs place enormous strain on hospitals, research
              institutions, and national health budgets.
            </p>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
              Trillions in Global Economic Impact by 2050
            </h3>
            <p className="text-sm lg:text-base text-zinc-300/80 leading-relaxed">
              If left unchecked, antimicrobial resistance is projected to cost
              the global economy between $1 and $3 trillion annually by 2050,
              disrupting healthcare, reducing productivity, and threatening
              global economic stability.
            </p>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
              90%+ Predictive Accuracy with Genomic AI
            </h3>
            <p className="text-sm lg:text-base text-zinc-300/80 leading-relaxed">
              Advanced genomic machine-learning models can now predict
              antimicrobial resistance patterns with over 90% accuracy, enabling
              researchers to detect emerging threats earlier and design more
              targeted, effective interventions.
            </p>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default ResearchInsights;
