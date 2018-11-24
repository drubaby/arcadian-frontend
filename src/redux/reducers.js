import { combineReducers } from "redux";

//placeholders
const rootReducer = combineReducers({
  machines: machineReducer,
  locations: locationReducer
});

export default rootReducer;

function machineReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

function locationReducer(state = [], action) {
  switch (action.type) {
    case "FETCHED_LOCATIONS":
    return action.locations
    default:
    return state
  }
}
