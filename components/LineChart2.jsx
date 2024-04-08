import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function LineChart2() {
  const scales = {
    x: {
      position: "bottom",
      grid: { color: "black" },
      ticks: {
        color: "black",
      },
      border: {
        color: "black",
      },
    },
    y: {
      type: "linear",
      border: {
        color: "black",
      },
      position: "left",
      ticks: {
        color: "black",
        stepSize: 100,
        callback: (val, index, ticks) =>
          index === 0 || index === ticks.length - 1 ? null : val,
      },
      grid: {
        borderColor: "black",
        color: "black",
      },
      title: {
        display: true,
        color: "black",
        text: (ctx) => ctx.scale.axis + " axis",
      },
      max: 900,
      suggestedMin: -10,
    },
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false,
      },
      //   title: {
      //     display: true,
      //     text: "Chart.js Line Chart - Multi Axis",
      //   },
    },
    scales,
  };
  const data = {
    labels: ["01-2024", "02-2024", "03-2024", "04-2024"],
    datasets: [
      {
        backgroundColor: "#d32f2f",
        borderColor: "#d32f2f",
        cubicInterpolationMode: "monotone",
        data: [30, 35, 17, 6],
        fill: false,
        label: "10000064 | HARSH SOLDER",
        tension: 0.6,
      },
      {
        backgroundColor: "#FFC107",
        borderColor: "#FFC107",
        cubicInterpolationMode: "monotone",
        data: [427, 438, 340, 87],
        fill: false,
        label: "10000072 | SHREE VYANKATESH ENGG. INDUSTRIES",
        tension: 0.6,
      },
      {
        backgroundColor: "#64b5f6",
        borderColor: "#64b5f6",
        cubicInterpolationMode: "monotone",
        data: [2, 0, 0, 1],
        fill: false,
        label: "10000223 | ELANTAS Beck India Ltd",
        tension: 0.6,
      },

      {
        backgroundColor: "#f9a825",
        borderColor: "#f9a825",
        cubicInterpolationMode: "monotone",
        data: [1, 0, 0, 0],
        fill: false,
        label: "10000232 | NAVION ELECTRONICS PVT.LTD.",
        tension: 0.6,
      },

      {
        backgroundColor: "#b2ff59",
        borderColor: "#b2ff59",
        cubicInterpolationMode: "monotone",
        data: [2, 0, 0, 0],
        fill: false,
        label: "10000322 | POLYNOVA   RESINS",
        tension: 0.6,
      },
      {
        backgroundColor: "#4fb4d1",
        borderColor: "#4fb4d1",
        cubicInterpolationMode: "monotone",
        data: [63, 58, 52, 17],
        fill: false,
        label: "12000431 | nikita rubber products",
        tension: 0.6,
      },
    ],
  };
  return (
    <div className="w-[50%] h-[50%] bg-gradient-to-r from-[#EFFDEE] to-[#E4FDE1] rounded-lg p-5 m-5 border-transparent ">
      <Line data={data} options={options} />
    </div>
  );
}
