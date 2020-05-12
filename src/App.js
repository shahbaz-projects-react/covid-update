import React from "react";
import logo from "./assets/virus.svg";
import arrowToTop from "./assets/arrow.svg";
import linkedIn from "./assets/LinkedIn.svg";
import "./App.css";
// import Dropdown from "react-dropdown"; //Inspired by react-select
import "react-dropdown/style.css";
import { Bar, Line } from "react-chartjs-2";
import CountUp from "react-countup";
import { connect } from "react-redux";
import getCountryDataAction, {
  setCurrentCountry,
  getAllCountries,
  getDailyUpdate,
  getOverallData,
} from "./redux/actions/action";
import Select from "react-select";

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
    const { countries, dailyData, data, country } = this.props;

    const [infected, recovered, deaths, lastUpdate] = data[country];

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

    const updateDate = new Date(lastUpdate).toDateString();

    return (
      <div className="container">
        <span
          className="arrow-up-container"
          onClick={() => window.scroll(0, 0)}
        >
          <img src={arrowToTop} className="arrow-up" alt="arrow" />
        </span>
        <header className="header">
          <span className="item">
            C
            <img src={logo} className="App-logo" alt="logo" />
            vid-19 Update
          </span>
        </header>
        <div className="cards">
          <div className="card" style={{ borderColor: "rgba(2, 2, 255, 0.6)" }}>
            <h2>Infected</h2>
            <h4>Date Updated</h4>
            <h5>{updateDate}</h5>
            <h3>Number of active cases</h3>
            <h1>
              <CountUp start={0} end={infected} duration={2.5} separator="," />
            </h1>
          </div>
          <div className="card" style={{ borderColor: "rgba(2, 255, 2, 0.6)" }}>
            <h2>Recovered</h2>
            <h4>Date Updated</h4>
            <h5>{updateDate}</h5>
            <h3>Number of recovered cases</h3>
            <h1>
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </h1>
          </div>
          <div className="card" style={{ borderColor: "rgba(250, 2, 2, 0.6)" }}>
            <h2>Deaths</h2>
            <h4>Date Updated</h4>
            <h5>{updateDate}</h5>
            <h3>Number of deaths</h3>
            <h1>
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </h1>
          </div>
        </div>
        <div className="drop-down-container">
          {countries.length > 0 ? (
            <div className="drop-down">
              <Select
                options={countries}
                onChange={this._onSelect}
                defaultValue={countries[0]}
                placeholder="Select a Country"
              />
            </div>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className="chart-container">
          {country === "Global" ? (
            <Line data={global_data} />
          ) : (
            <Bar
              data={country_data}
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
          )}
        </div>
        <footer>
          <span className="content">Created by Shahbaz Gul Khan</span>
          <span className="linked-in">
            Connect
            <a
              href={process.env.REACT_APP_LINKEDIN_URL}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={linkedIn} className="footer-logo" alt="linkedIn" />
            </a>
          </span>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  dailyData: state.daily_data,
  country: state.country,
  countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => dispatch(getAllCountries()),
  getDailyUpdate: () => dispatch(getDailyUpdate()),
  getOverallData: () => dispatch(getOverallData()),
  getCountryData: (country) => dispatch(getCountryDataAction(country)),
  setCurrentCountry: (country) => dispatch(setCurrentCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
