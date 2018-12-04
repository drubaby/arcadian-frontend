import { combineReducers } from "redux";

// reducer receives action objects that have been dispatched in response
// to some event (ie. componentDidMount, onSubmit, onClick etc)

const allLocationsReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_LOCATIONS":
      console.log("[allLocationsReducer] returning all Locations");
      // Sort by name :)
      action.locations.sort((a, b) =>
        a.name < b.name ? 1 : b.name < a.name ? -1 : 0
      );
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

// handles conditional rendering for loading all locations
const loadingReducer = (oldState = false, action) => {
  switch (action.type) {
    case "LOADING_LOCATIONS":
      return true;
    case "FETCHED_LOCATIONS":
      return false;
    default:
      return oldState;
  }
};

// handles loading for a single location
const locationLoadingReducer = (oldState = true, action) => {
  switch (action.type) {
    case "LOADING_LOCATION":
      return true;
    case "SHOW_LOCATION":
      return false;
    default:
      return oldState;
  }
};

const currentLocationReducer = (oldState = [], action) => {
  switch (action.type) {
    case "SHOW_LOCATION":
      console.log("[current location reducer] showing: ", action.location);
      return action.location;
    default:
      return oldState;
  }
};

const locMacContainerReducer = (oldState = true, action) => {
  switch (action.type) {
    case "LOADING_LOC_MAC_CONTAINER":
      return true;
    case "SHOW_LOC_MACS":
      console.log("Loc Mac Container filled.");
      return false;
    default:
      return oldState;
  }
};

// Changes search text in state for both search functions
const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.input;
    case "CHANGE_LOC_SEARCH_TEXT":
      return action.input;
    case "CHANGE_MACHINE_FINDER_TEXT":
      return action.input;
    default:
      return state;
  }
};
// MACHINE SEARCH
const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case "REFRESH_SEARCH_OPTIONS":
      return action.machines;
    case "CHANGE_MAC_SEARCH_TEXT":
      // state does not refresh if you hit backspace.
      return state.filter(function(machine) {
        return machine.name.toLowerCase().includes(action.input.toLowerCase());
      });
    case "FETCHED_MACHINES":
      return action.machines;
    default:
      return state;
  }
};

// LOCATION SEARCH
const locationSearchReducer = (state = [], action) => {
  switch (action.type) {
    //default result is all locations
    case "FETCHED_LOCATIONS":
      return action.locations;
    case "REFRESH_LOC_SEARCH_OPTIONS":
      return action.locations;
    case "CHANGE_LOC_SEARCH_TEXT":
      //filter function
      return state.filter(function(location) {
        return location.name.toLowerCase().includes(action.input.toLowerCase());
      });
      return action.locations;
    default:
      return state;
  }
};
const allLocationMachineReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_LOC_MACS":
      return action.machines;
    default:
      return state;
  }
};

// MACHINE FINDER
const machineFinderReducer = (state = [], action) => {
  switch (action.type) {
    case "REFRESH_MACHINE_FINDER_OPTIONS":
      return action.machines;
    case "CHANGE_MACHINE_FINDER_TEXT":
      //filter function
      return state.filter(function(loc_mac) {
        return loc_mac.machine.name
          .toLowerCase()
          .includes(action.input.toLowerCase());
      });
      return action.machines;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allLocations: allLocationsReducer,
  allLocationMachines: allLocationMachineReducer,
  allMachines: machineReducer,
  allLocationsLoading: loadingReducer,
  locationLoading: locationLoadingReducer,
  locMacContainerLoading: locMacContainerReducer,
  locationSearchResults: locationSearchReducer,
  machineFinderResults: machineFinderReducer,
  currentLocation: currentLocationReducer,
  searchText: searchTextReducer,
  //Machine Search Results
  searchResults: searchResultsReducer
});
export default rootReducer;
