import actionTypes from "../constants/actions.types";

const INITIAL_STATE = {
  countries: [{ value: "Global", label: "Global" }],
  daily_data: [],
  overall_data: [],
  data: { Global: [1, 2, 3, ""] },
  country: "Global",
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_COUNTRIES:
      return {
        ...state,
        countries: [
          ...state.countries,
          ...action.countries.map((country) => ({
            value: country.name,
            label: country.name,
          })),
        ],
      };
    case actionTypes.SET_DAILY_DATA:
      return {
        ...state,
        daily_data: action.data.map((data) => ({
          reportDate: data.reportDate,
          confirmed: data.confirmed,
          deaths: data.deaths,
        })),
      };
    case actionTypes.SET_CURRENT_COUNTRY:
      return { ...state, country: action.country };
    case actionTypes.SET_COUNTRY_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.country]: [
            action.confirmed.value,
            action.recovered.value,
            action.deaths.value,
            action.last_update,
          ],
        },
      };
    case actionTypes.SET_OVERALL_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.country]: [
            action.confirmed.value,
            action.recovered.value,
            action.deaths.value,
            action.last_update,
          ],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
