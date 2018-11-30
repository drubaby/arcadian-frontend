import { combineReducers } from "redux";

// reducer receives action objects that have been dispatched in response
// to some event (ie. componentDidMount, onSubmit, onClick etc)

const allLocationsReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_LOCATIONS":
      console.log("[allLocationsReducer] returning all Locations");
      return action.locations;
    case "FETCHED_ISSUE":
      let loc_mac_id = action.issue.location_machine_id;

      let target_location = oldState.find(location => {
        return location.location_machines.find(loc_mac => {
          return loc_mac.id === action.issue.location_machine_id;
        });
      });
      console.log(target_location.location_machines);
      let target_machine = target_location.location_machines.find(loc_mac => {
        if (loc_mac.id === action.issue.location_machine_id) {
          return loc_mac_id;
        }
      });
      let target_machine_issues = target_machine.machine_issues;

      //currently replacting location object with just its machines array
      let newState = oldState.map(location => {
        // map over all locations, find target location
        if (location === target_location) {
          // Issue has been added to array at this point.
          console.log(location);
          location.location_machines = location.location_machines.map(
            loc_mac => {
              if (loc_mac === target_machine) {
                // add new issue to target location machine
                return {
                  ...loc_mac,
                  machine_issues: [...loc_mac.machine_issues, action.issue]
                };
              } else {
                // return all other location machines unchanged
                //WORKS
                console.log("unchanged location machines: ", loc_mac);
                return loc_mac;
              }
            }
          );
          //this needs to return location
          console.log(location);
          debugger;
        } else {
          // WORKS
          // return all other locations unchanged
          console.log("unchanged location");
          return location;
        }
      });
      //This is a big mess, major refactor to break this down in progress.
      debugger;
      return newState;
    default:
      return oldState;
  }
};

const issueReducer = (state = [], action, allLocations) => {
  switch (action.type) {
    case "ADD_ISSUE":
      console.log("Adding issue: ", action.payload);
      return action.payload;
    case "POST_ISSUE":
      console.log("[in issueReducer] dispatch payload: ", action.payload);
      return action.payload;
    // case "FETCHED_ISSUE":
    // console.log("fetched issue: ", action.issue)
    // debugger
    // console.log(state.allLocations.location_machines)
    //find obj that needs to update ie allLocations.loc_macs.issues
    //return [...state.locmacs, ]
    // return action.issue;
    default:
      return state;
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
      return false;
    default:
      return oldState;
  }
};

const locationLoadingReducer = (oldState = true, action) => {
  switch (action.type) {
    case "LOADING_LOCATION":
      return true;
    case "SHOW_LOCATION":
      console.log("[loading reducer] Location has been loaded.");
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

const locMacContainerReducer = (oldState=true, action) => {
  switch (action.type){
    case "LOADING_LOC_MAC_CONTAINER":
    return true
    case "SHOW_LOC_MACS":
    console.log("Loc Mac Container filled.")
    return false
    default:
    return oldState
  }
}

const currentLocMacReducer = (oldState = [], action) => {
  switch (action.type) {
    case "SHOW_LOC_MACS":
    console.log('Showing location machines', action.machines)
    return action.machines
    default:
    return oldState
  }
}

const rootReducer = combineReducers({
  allLocations: allLocationsReducer,
  allLocationsLoading: loadingReducer,
  locationLoading: locationLoadingReducer,
  locMacContainerLoading: locMacContainerReducer,
  currentLocation: currentLocationReducer,
  currentLocMachines: currentLocMacReducer,
  // allMachines: machineReducer,
  issue: issueReducer
});
export default rootReducer;
