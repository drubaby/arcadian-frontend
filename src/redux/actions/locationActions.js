const LOCATIONS_URL = "http://localhost:3000/locations";
const LOC_MAC_URL = "http://localhost:3000/location_machines"

function loadingLocations() {
  return { type: "LOADING_LOCATIONS" };
}

function fetchedLocations(locations) {
  return { type: "FETCHED_LOCATIONS", locations };
}

//Make show location action
function showLocation(location) {
  return { type: "SHOW_LOCATION", location}
}

function fetchingLocations() {
  return dispatch => {
    dispatch(loadingLocations());
    fetch(LOCATIONS_URL)
      .then(res => res.json())
      .then(locations => {
        console.log("Displaying fetched locations...")
        dispatch(fetchedLocations(locations));
      });
  };
}

function loadingLocationMachines() {
  return {type: "LOADING_LOCATION_MACHINES"}
}

function fetchedLocationMachines(machines) {
  return { type: "FETCHED_LOCATION_MACHINES", machines}
}

function fetchingLocationMachines(locationID) {
  return dispatch => {
    dispatch(loadingLocationMachines())
    fetch(LOC_MAC_URL)
    .then( res => res.json())
    .then( allMachines => {
      //filter machines for this location
      let locMacs = allMachines.filter(mac => mac.location_id === locationID)
      dispatch(fetchedLocationMachines(locMacs))
    })
  }
}





export { fetchedLocations, fetchingLocations, loadingLocations, showLocation, fetchingLocationMachines}

// function fetchingPaintings(){
//   return (dispatch) => {
//     dispatch(loadingPaintings())
//     fetch(URL)
//     .then(res => res.json())
//     .then(paintings => {
//       dispatch(fetchedPaintings(paintings)) //but we don't have access to the dispatch func
//     })
//   }
