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
    position: "bottom",
    grid: { color: "white" },
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
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      backgroundColor: "blue",
      borderColor: "white",
      color: "blue"
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
