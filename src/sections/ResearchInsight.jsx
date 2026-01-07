import { useEffect, useRef, useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// shadcn imports
import { Card, CardContent } from "@/components/ui/card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
gsap.registerPlugin(ScrollTrigger);

export default function ResearchInsight() {
  const chartRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // Track window width for responsive y-axis labels
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chart data
  const data = {
    labels: ["2020", "2025", "2030", "2035", "2040", "2045", "2050"],
    datasets: [
      {
        label: "Projected AMR Cost ($B)",
        data: [300, 400, 550, 700, 850, 950, 1200],
        backgroundColor: "rgba(176, 229, 69, 0.7)", // grad1 color
        borderRadius: 6,
      },
    ],
  };

  // Chart options (memoized to update on window resize)
  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => (windowWidth < 640 ? "" : `$${value}B`),
            color: "#d4d4d8",
            font: { size: windowWidth < 640 ? 10 : 12 },
          },
          grid: { color: "rgba(255,255,255,0.1)" },
        },
        x: {
          ticks: {
            color: "#d4d4d8",
            font: { size: windowWidth < 640 ? 10 : 12 },
          },
          grid: { color: "rgba(255,255,255,0.1)" },
        },
      },
    }),
    [windowWidth]
  );

  // GSAP reveal animation
  useEffect(() => {
    gsap.from(".insight-chart", {
      scrollTrigger: {
        trigger: ".insight-chart",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="prices" className="container mx-auto px-4 py-28">
      {/* ===== Header ===== */}
      <div className="max-w-3xl mx-auto text-center mb-20 insight-reveal">
        <h2 className="text-3xl lg:text-5xl md:text-6xl mb-6 font-medium clash-display">
          Research <span className="clash-display grad1">Insights</span>
        </h2>

        <p className="text-[0.95rem] lg:text-lg text-zinc-300/80">
          HelixMind turns microbial genomes into real-time, predictive intelligence helping researchers and labs stay ahead of antimicrobial resistance.
        </p>
      </div>

      {/* ===== Main Insight Block ===== */}
      <div className="grid lg:grid-cols-2 gap-14 items-center overflow-x-hidden max-w-sm lg:max-w-6xl mx-auto mb-24">
        {/* ===== Left: Chart inside shadcn container ===== */}
        <Card className="insight-chart insight-reveal opacity-100 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6">
            <p className="-mb-10 text-sm uppercase tracking-wider text-zinc-400">
              Global Impact Insight
            </p>

            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Antimicrobial resistance costs the world $300B–$1T every year and rising.
            </h4>

            <p className="text-zinc-300/80 mb-6 text-sm leading-relaxed">
              Drug-resistant infections are accelerating globally, overwhelming healthcare systems and slowing down therapeutic discovery. HelixMind applies genomic machine learning to predict resistance before it spreads.
            </p>

            {/* ===== Chart Container ===== */}
            <div className="overflow-x-scroll">
              <div className="w-full max-w-sm lg:min-w-[300px] md:min-w-[500px] h-[300px]">
                <Bar ref={chartRef} data={data} options={options} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ===== Right: Intelligence Points ===== */}
        <div className="space-y-6 insight-reveal">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h5 className="font-semibold mb-2">Earlier Scientific Decisions</h5>
            <p className="text-sm text-zinc-300/80">
              Identify resistance patterns before they appear clinically, enabling proactive experimental design.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h5 className="font-semibold mb-2">Smarter Experiments</h5>
            <p className="text-sm text-zinc-300/80">
              Prioritize promising mutations, compounds, and microbial targets using predictive genomic intelligence.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h5 className="font-semibold mb-2">Better Outcomes</h5>
            <p className="text-sm text-zinc-300/80">
              Reduce trial-and-error, shorten research cycles, and improve therapeutic success rates.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Metrics / Proof ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Card className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center insight-metric insight-reveal">
          <CardContent>
            <p className="text-3xl font-bold grad1">~1.2M</p>
            <p className="text-sm text-zinc-400 mt-2">Direct deaths annually from AMR</p>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center insight-metric insight-reveal">
          <CardContent>
            <p className="text-3xl font-bold grad1">$300B+</p>
            <p className="text-sm text-zinc-400 mt-2">Healthcare costs every year</p>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center insight-metric insight-reveal">
          <CardContent>
            <p className="text-3xl font-bold grad1">$1–3T</p>
            <p className="text-sm text-zinc-400 mt-2">Projected annual cost by 2050</p>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center insight-metric insight-reveal">
          <CardContent>
            <p className="text-3xl font-bold grad1">90%+</p>
            <p className="text-sm text-zinc-400 mt-2">Genomic ML prediction accuracy</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
