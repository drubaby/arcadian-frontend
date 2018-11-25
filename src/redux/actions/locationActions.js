function loadingLocations() {
  return { type: "LOADING_LOCATIONS" };
}

function fetchedLocations(locations) {
  return { type: "FETCHED_LOCATIONS", locations };
}

const URL = "http://localhost:3000/locations";

function fetchingLocations() {
  return dispatch => {
    dispatch(loadingLocations());
    fetch(URL)
      .then(res => res.json())
      .then(locations => {
        console.log("inside fetching locations async call");
        dispatch(fetchedLocations(locations));
      });
  };
}

export { fetchedLocations, fetchingLocations, loadingLocations}

// function fetchingPaintings(){
//   return (dispatch) => {
//     dispatch(loadingPaintings())
//     fetch(URL)
//     .then(res => res.json())
//     .then(paintings => {
//       dispatch(fetchedPaintings(paintings)) //but we don't have access to the dispatch func
//     })
//   }
