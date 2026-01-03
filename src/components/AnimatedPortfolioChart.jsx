import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const AnimatedPortfolioChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: "Average Return (%)",
        data: data.map(item => item.avgReturn),
        fill: true,
        backgroundColor: "rgba(0, 103, 172, 0.2)",
        borderColor: "#0067ac",
        tension: 0.4,
        pointBackgroundColor: "#0067ac",
        pointRadius: 5,
        pointHoverRadius: 10, // bigger hover radius
        pointHoverBackgroundColor: "#00bfff", // change point color on hover
        pointHoverBorderColor: "#fff", // border for hover
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const idx = tooltipItem.dataIndex;
            const item = data[idx];
            return [
              `Avg Return: +${item.avgReturn}%`,
              `Calls Made: ${item.callsMade}`,
              `Winners: ${item.winners}`,
            ];
          },
        },
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
    hover: {
      mode: "nearest",
      intersect: true, // ensures hover only triggers on nearest point
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `+${value}%`;
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AnimatedPortfolioChart;
