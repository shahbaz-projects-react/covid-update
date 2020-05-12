import React from "react";
import Select from "react-select";
// import Dropdown from "react-dropdown"; //Inspired by react-select
import "react-dropdown/style.css";
import { connect } from "react-redux";

const Dropdown = ({ onSelect, countries }) => {
  return (
    <div className="drop-down-container">
      {countries.length > 0 ? (
        <div className="drop-down">
          <Select
            options={countries}
            onChange={onSelect}
            defaultValue={countries[0]}
            placeholder="Select a Country"
          />
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  countries: state.countries,
});

export default connect(mapStateToProps)(Dropdown);
