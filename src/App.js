import React from "react";

import "./App.css";

import { connect } from "react-redux";
import getCountryDataAction, {
  setCurrentCountry,
  getAllCountries,
  getDailyUpdate,
  getOverallData,
} from "./redux/actions/action";

import ArrowToTop from "./components/arrow/arrow-to-top.component";
import Header from "./components/header/header.component";
import Cards from "./components/cards/cards.component";
import Dropdown from "./components/dropdown/dropdown.component";
import Chart from "./components/charts/chart.component";
import Footer from "./components/footer/footer.component";

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
