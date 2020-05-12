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
                callback: function (label, index, labels) {
                  return label / 1000 + "k";
                },
              },
              scaleLabel: {
                display: true,
                labelString: "1k = 1000",
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
