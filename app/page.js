"use client";
import Image from "next/image";
import LineChart from "@/components/LineChart";
import PieChartG from "@/components/PieChart";
import LineChart2 from "@/components/LineChart2";

export default function Home() {
  const handleClick = async () => {
    // await sendMail();
  };

  return (
    <>
      <LineChart />
      <button
        onClick={() => handleClick()}
        className="bg-green-500 text-white px-3 py-2 capitalize cursor-pointer hover:bg-gray-300 hover:text-green-500 border-transparent rounded-md m-10"
      >
        send mail
      </button>
      <PieChartG />
      <LineChart2 />
    </>
  );
}
