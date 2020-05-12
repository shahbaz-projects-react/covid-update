import { createStore, applyMiddleware } from "redux";
import mainReducer from "./reducers/reducer.main";
import thunk from "redux-thunk";
import logger from "redux-logger";

let middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
middlewares.push(thunk);

const store = createStore(mainReducer, applyMiddleware(...middlewares));

export default store;
