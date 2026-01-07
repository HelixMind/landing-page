import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DNAHelix({
  width = 1200,
  height = 450,
  color = "#b0e545",
}) {
  const svgRef = useRef(null);
  const phase = useRef({ v: 0 });

  const COUNT = 70;
  const GAP = 17;
  const AMP = 95;

  useGSAP(() => {
    gsap.to(phase.current, {
      v: Math.PI * 2,
      duration: 18, // slower & smoother
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        const a = svgRef.current.querySelectorAll(".a");
        const b = svgRef.current.querySelectorAll(".b");
        const links = svgRef.current.querySelectorAll(".bp");
        const pathA = svgRef.current.querySelector("#pathA");
        const pathB = svgRef.current.querySelector("#pathB");

        let dA = "";
        let dB = "";

        a.forEach((el, i) => {
          const p = i * 0.32 + phase.current.v;
          const y = height / 2 + Math.sin(p) * AMP;
          el.setAttribute("cy", y);
          dA += `${i === 0 ? "M" : "L"} ${i * GAP} ${y} `;
        });

        b.forEach((el, i) => {
          const p = i * 0.32 + phase.current.v + Math.PI;
          const y = height / 2 + Math.sin(p) * AMP;
          el.setAttribute("cy", y);
          dB += `${i === 0 ? "M" : "L"} ${i * GAP} ${y} `;
        });

        links.forEach((el, i) => {
          const p = i * 0.32 + phase.current.v;
          const y1 = height / 2 + Math.sin(p) * AMP;
          const y2 = height / 2 + Math.sin(p + Math.PI) * AMP;
          el.setAttribute("y1", y1);
          el.setAttribute("y2", y2);
        });

        pathA.setAttribute("d", dA);
        pathB.setAttribute("d", dB);
      },
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className="rotate-[-12deg]"
    >
      {/* backbones */}
      <path
        id="pathA"
        stroke="rgba(176,229,69,0.85)"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        id="pathB"
        stroke="rgba(176,229,69,0.25)"
        strokeWidth="2"
        fill="none"
      />

      {/* nodes + base pairs */}
      {Array.from({ length: COUNT }).map((_, i) => {
        const x = i * GAP;
        const p = i * 0.32;

        const y1 = height / 2 + Math.sin(p) * AMP;
        const y2 = height / 2 + Math.sin(p + Math.PI) * AMP;

        return (
          <g key={i}>
            {/* base pair */}
            <line
              className="bp"
              x1={x}
              y1={y1}
              x2={x}
              y2={y2}
              stroke="rgba(176,229,69,0.6)"
              strokeWidth="1.6"
            />

            {/* front backbone node */}
            <circle
              className="a"
              cx={x}
              cy={y1}
              r="4.8"
              fill={color}
            />

            {/* back backbone node */}
            <circle
              className="b"
              cx={x}
              cy={y2}
              r="3.8"
              fill={color}
              opacity="0.35"
            />
          </g>
        );
      })}
    </svg>
  );
}
