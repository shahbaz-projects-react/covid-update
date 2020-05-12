import React from "react";
import LineChart from "./linechart.components";
import BarChart from "./barchart.component";
import { connect } from "react-redux";
const Chart = ({ country, dailyData, data }) => {
  const [infected, recovered, deaths] = data[country];

  const global_data = {
    labels: dailyData.map(({ reportDate }) => reportDate),
    datasets: [
      {
        data: dailyData.map(({ confirmed: { total } }) => total),
        label: "Infected",
        borderColor: "#283593",
        backgroundColor: "rgba(2, 2, 255, 0.6)",
        fill: true,
      },
      {
        data: dailyData.map(({ deaths: { total } }) => total),
        label: "Deaths",
        borderColor: "#B71C1C",
        backgroundColor: "rgba(247, 2, 2, 0.6)",
        fill: true,
      },
    ],
  };

  const country_data = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "People",
        backgroundColor: [
          "rgba(2, 2, 255, 0.6)",
          "rgba(2, 255, 2, 0.6)",
          "rgba(247, 2, 2, 0.6)",
        ],
        data: [infected, recovered, deaths],
        borderColor: "#282c34",
        borderWidth: 2,
        hoverBackgroundColor: "#282c34",
        hoverBorderColor: "#dfe4ee",
      },
    ],
  };

  return (
    <div className="chart-container">
      {country === "Global" ? (
        <LineChart data={global_data} />
      ) : (
        <BarChart data={country_data} country={country} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  dailyData: state.daily_data,
  country: state.country,
});

export default connect(mapStateToProps)(Chart);
