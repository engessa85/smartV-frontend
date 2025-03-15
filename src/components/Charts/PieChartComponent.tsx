"use client";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#ef4444"]; // Followed = Blue, Not Followed = Orange

export default function PieChartComponent({ totalCompanies, followedCompanies }:{ totalCompanies:number, followedCompanies:number }) {
  const notFollowed = totalCompanies - followedCompanies;

  const data = [
    { name: "Followed", value: followedCompanies },
    { name: "Not Followed", value: notFollowed },
  ];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width={500} height={500}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label={({ name, percent, x, y, index}) => (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={14}
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fill="#FFFFF"
              >
                {`${name}: ${(percent * 100).toFixed(1)}%`}
              </text>
            )}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
