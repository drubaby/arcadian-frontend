import { combineReducers } from "redux";


const locationReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_LOCATIONS":
      return action.locations;
    default:
      return oldState;
  }
};

const loadingReducer = (oldState = false, action) => {
  switch (action.type) {
    case "LOADING_LOCATIONS":
    return true;
    case "FETCHED_LOCATIONS":
    return false
    default:
    return oldState;
  }
};


const rootReducer = combineReducers({
  allLocations: locationReducer,
  loading: loadingReducer,
});
export default rootReducer;
