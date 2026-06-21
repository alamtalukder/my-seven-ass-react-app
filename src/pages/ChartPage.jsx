import React, { useContext } from "react";
import { TimelineContext } from "../context/Context";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const { timeline } = useContext(TimelineContext);

  const data = [
    {
      name: "Call",
      value: timeline.filter((item) => item.type === "call").length,
    },
    {
      name: "Text",
      value: timeline.filter((item) => item.type === "text").length,
    },
    {
      name: "Video",
      value: timeline.filter((item) => item.type === "video").length,
    },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Activity Overview</h1>

      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={140}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
