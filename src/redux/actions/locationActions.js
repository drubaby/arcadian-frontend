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


const URL = "http://localhost:3000/locations";

function fetchingLocations() {
  return dispatch => {
    dispatch(loadingLocations());
    fetch(URL)
      .then(res => res.json())
      .then(locations => {
        console.log("Displaying fetched locations...")

        dispatch(fetchedLocations(locations));
      });
  };
}

export { fetchedLocations, fetchingLocations, loadingLocations, showLocation}

// function fetchingPaintings(){
//   return (dispatch) => {
//     dispatch(loadingPaintings())
//     fetch(URL)
//     .then(res => res.json())
//     .then(paintings => {
//       dispatch(fetchedPaintings(paintings)) //but we don't have access to the dispatch func
//     })
//   }
