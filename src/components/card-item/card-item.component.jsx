import React from "react";
import CountUp from "react-countup";

const Card = ({ title, updateDate, numbers, border }) => {
  return (
    <div className="card" style={border}>
      <h2>{title}</h2>
      <h4>Date Updated</h4>
      <h5>{updateDate}</h5>
      <h3>Number of active cases</h3>
      <h1>
        <CountUp start={0} end={numbers} duration={2.5} separator="," />
      </h1>
    </div>
  );
};

export default Card;
