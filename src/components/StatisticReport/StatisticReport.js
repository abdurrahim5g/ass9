import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StatisticReport = ({ data }) => {
  const finalData = data.data;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={finalData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={60}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <Tooltip />
        <CartesianGrid strokeDasharray="0 0" />
        <Bar dataKey="total" fill="#2197FF" background={{ fill: "#DFE6F7" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticReport;
