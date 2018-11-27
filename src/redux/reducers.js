import { combineReducers } from "redux";

// reducer receives action objects that have been dispatched in response
// to some event (ie. componentDidMount, onSubmit, onClick etc)

const locationReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_LOCATIONS":
      console.log("in location reducer");
      return action.locations;
    default:
      return oldState;
  }
};

const machineReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_MACHINES":
      console.log("fetching all machines");
      return action.machines;
    case "FETCHED_MACHINES":
      return action.machines;
    default:
      return state;
  }
};

// handles conditional rendering for displaying locations
const loadingReducer = (oldState = false, action) => {
  switch (action.type) {
    case "LOADING_LOCATIONS":
      return true;
    case "FETCHED_LOCATIONS":
      console.log("in loading reducer........");
      return false;
    default:
      return oldState;
  }
};

const locationMachineReducer = (state = [], action) => {
  switch (action.type) {
    case "LOADING_LOCATION_MACHINES":
      console.log("Loading location machines");
      return state;
    case "FETCHED_LOCATION_MACHINES":
      return action.machines;
    case "FIND_MACHINE_NAME":
      debugger;
      return action.machines;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allLocations: locationReducer,
  allMachines: machineReducer,
  loading: loadingReducer,
  locationMachines: locationMachineReducer
});
export default rootReducer;
