import React from "react";
import Card from "../card-item/card-item.component";
import { connect } from "react-redux";

const Cards = ({ data, country }) => {
  const [infected, recovered, deaths, lastUpdate] = data[country];
  const updateDate = new Date(lastUpdate).toDateString();
  return (
    <div className="cards">
      <Card
        type="infected"
        title="Infected"
        updateDate={updateDate}
        numbers={infected}
        border={{ borderColor: "rgba(2, 2, 255, 0.6)" }}
      />
      <Card
        type="recovered"
        title="Recovered"
        updateDate={updateDate}
        numbers={recovered}
        border={{ borderColor: "rgba(2, 255, 2, 0.6)" }}
      />
      <Card
        type="deaths"
        title="Deaths"
        updateDate={updateDate}
        numbers={deaths}
        border={{ borderColor: "rgba(250, 2, 2, 0.6)" }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  country: state.country,
});

export default connect(mapStateToProps)(Cards);
