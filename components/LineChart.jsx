"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const scales = {
  x: {
    stacked: true,
    r: {
      ticks: {
        backdropPadding: {
          x: 10,
          y: 9,
        },
      },
    },
    position: "bottom",
    grid: { color: "white",  },
    ticks: {
      color: "white",
      //   autoSkip: true,
      //   autoSkipPadding: 50,
      //   maxRotation: 0,
      
    },
    border: {
      color: "white",
    },
  },
  y: {
    stacked: true,
    border: {
      color: "white",
    },
    position: "left",
    ticks: {
      color: "white",
      callback: (val, index, ticks) =>
        index === 0 || index === ticks.length - 1 ? null : val,
    },
    grid: {
      borderColor: "white",
      color: "white",
      tickWidth: 2,
    },
    title: {
      display: true,
      color: "white",
      text: (ctx) => ctx.scale.axis + " axis",
    },
  },
};

export const options = {
  responsive: true,
  scales: scales,
  layout: {
    padding: 20,
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: ["01-2024", "02-2024", "03-2024", "04-2024"],
  datasets: [
    {
      backgroundColor: "#d32f2f",
      borderColor: "#d32f2f",
      // cubicInterpolationMode: "monotone",
      data: [30, 35, 17, 6],
      fill: false,
      label: "10000064 | HARSH SOLDER",
      // tension: 0.6,
      stack: "stack 0",
    },
    {
      backgroundColor: "#FFC107",
      borderColor: "#FFC107",
      // cubicInterpolationMode: "monotone",
      data: [427, 438, 340, 87],
      fill: false,
      label: "10000072 | SHREE VYANKATESH ENGG. INDUSTRIES",
      // tension: 0.6,
      stack: "stack 1",
    },
    {
      backgroundColor: "#64b5f6",
      borderColor: "#64b5f6",
      // cubicInterpolationMode: "monotone",
      data: [2, 0, 0, 1],
      fill: false,
      label: "10000223 | ELANTAS Beck India Ltd",
      // tension: 0.6,
      stack: "stack 1",

    },

    {
      backgroundColor: "#f9a825",
      borderColor: "#f9a825",
      // cubicInterpolationMode: "monotone",
      data: [1, 0, 0, 0],
      fill: false,
      label: "10000232 | NAVION ELECTRONICS PVT.LTD.",
      // tension: 0.6,
      stack: "stack 3",
    },

    {
      backgroundColor: "#b2ff59",
      borderColor: "#b2ff59",
      // cubicInterpolationMode: "monotone",
      data: [2, 0, 0, 0],
      fill: false,
      label: "10000322 | POLYNOVA   RESINS",
      // tension: 0.6,
      stack: "stack 3",
    },
    {
      backgroundColor: "#4fb4d1",
      borderColor: "#4fb4d1",
      // cubicInterpolationMode: "monotone",
      data: [63, 58, 52, 17],
      // fill: false,
      label: "12000431 | nikita rubber products",
      // tension: 0.6,
      stack: "stack 1",

    },
  ],
};
export default function LineChart() {
  return (
    <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-[10px] w-[50%]">
      <CardBody>
        <div>
          <Bar options={options} data={data} />
        </div>
      </CardBody>
    </Card>
  );
}
