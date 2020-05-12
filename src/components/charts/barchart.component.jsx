import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, country }) => {
  return (
    <Bar
      data={data}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio: 1,
      }}
    />
  );
};

export default BarChart;
