import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function (label) {
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
      }}
    />
  );
};

export default LineChart;
