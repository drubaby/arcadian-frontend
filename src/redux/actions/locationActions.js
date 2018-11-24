
function fetchedLocations(locations){
  return { type: "FETCHED_LOCATIONS", locations}
  }


const URL = 'http://localhost:3000/locations'
function fetchingLocations() {
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(locations => dispatch(fetchedLocations(locations)))
  }
}

export { fetchedLocations, fetchingLocations}
