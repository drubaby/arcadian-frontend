import { combineReducers } from "redux";

// reducer receives action objects that have been dispatched in response
// to some event (ie. componentDidMount, onSubmit, onClick etc)

const allLocationsReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_LOCATIONS":
      console.log("[allLocationsReducer] returning all Locations");
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
      console.log("[loading reducer] loading state now false");
      return false;
    default:
      return oldState;
  }
};

const currentLocationReducer = (oldState = [], action) => {
  switch (action.type) {
    case "SHOW_LOCATION":
      // make DB call to load a specific location show page
      //Sets currentLocation: [this location]
      return action.location;
    default:
      return oldState;
  }
};

const issueReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ISSUE":
      console.log("Adding issue: ", action.payload);
      return action.payload;
    case "POST_ISSUE":
      console.log("[in issueReducer] dispatch payload: ", action.payload);
      return action.payload;
    case "FETCHED_ISSUE":
    console.log("fetched issue: ", action.issue)
      return action.issue;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allLocations: allLocationsReducer,
  allMachines: machineReducer,
  loading: loadingReducer,
  issue: issueReducer,
  currentLocation: currentLocationReducer
});
export default rootReducer;
