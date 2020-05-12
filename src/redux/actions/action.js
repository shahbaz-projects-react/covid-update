import actionTypes from "../constants/actions.types";
import Axios from "axios";
import constants from "../constants/constants";

export const getAllCountries = () => {
  return (dispatch) => {
    Axios.get(`${constants.base_url}countries`)
      .then((res) => dispatch(setAllCountries(res.data.countries)))
      .catch((err) => console.log("Error Fetching Countries"));
  };
};

const setAllCountries = (countries) => ({
  type: actionTypes.SET_ALL_COUNTRIES,
  countries,
});

const getCountryDataAction = (country) => {
  return (dispatch) => {
    Axios.get(`${constants.base_url}countries/${country}`)
      .then((res) => {
        const { confirmed, recovered, deaths, lastUpdate } = res.data;
        return dispatch(
          insertCountryDataAction(
            country,
            confirmed,
            recovered,
            deaths,
            lastUpdate
          )
        );
      })
      .then(() => dispatch(setCurrentCountry(country)))
      .catch((err) =>
        console.log("Error Fetching Country Data for : ", country)
      );
  };
};

const insertCountryDataAction = (
  country,
  confirmed,
  recovered,
  deaths,
  lastUpdate
) => ({
  type: actionTypes.SET_COUNTRY_DATA,
  country,
  confirmed,
  recovered,
  deaths,
  last_update: lastUpdate,
});

export const setCurrentCountry = (country = "Global") => ({
  type: actionTypes.SET_CURRENT_COUNTRY,
  country,
});

export const getDailyUpdate = () => {
  return (dispatch) => {
    Axios.get(`${constants.base_url}daily`)
      .then((res) => dispatch(setDailyUpdate(res.data)))
      .catch((err) => console.log("Error Fetching Daily Data"));
  };
};

const setDailyUpdate = (data) => ({
  type: actionTypes.SET_DAILY_DATA,
  data,
});

export const getOverallData = () => {
  return (dispatch) => {
    Axios.get(constants.base_url).then((res) => {
      dispatch(setOverallData(res.data, "Global"));
    });
  };
};

const setOverallData = (
  { confirmed, recovered, deaths, lastUpdate },
  country
) => ({
  type: actionTypes.SET_OVERALL_DATA,
  country,
  confirmed,
  recovered,
  deaths,
  last_update: lastUpdate,
});
export default getCountryDataAction;
