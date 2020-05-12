import React from "react";

import "./App.css";

import { connect } from "react-redux";
import getCountryDataAction, {
  setCurrentCountry,
  getAllCountries,
  getDailyUpdate,
  getOverallData,
} from "./redux/actions/action";

import {
  ArrowToTop,
  Header,
  Cards,
  Dropdown,
  Chart,
  Footer,
} from "./components";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllCountries();
    this.props.getOverallData();
    this.props.getDailyUpdate();
  }

  _onSelect = (e) => {
    if (e.value !== "Global" && !this.props.data[e.value]) {
      this.props.getCountryData(e.value);
    } else {
      this.props.setCurrentCountry(e.value);
    }
  };

  render() {
    return (
      <div className="container">
        <ArrowToTop />
        <Header />
        <Cards />
        <Dropdown onSelect={this._onSelect} />
        <Chart />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => dispatch(getAllCountries()),
  getDailyUpdate: () => dispatch(getDailyUpdate()),
  getOverallData: () => dispatch(getOverallData()),
  getCountryData: (country) => dispatch(getCountryDataAction(country)),
  setCurrentCountry: (country) => dispatch(setCurrentCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
