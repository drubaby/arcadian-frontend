import React from "react";
import { List } from "semantic-ui-react";
import LocationListItem from "../components/LocationListItem";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Location from './Location'
import { connect } from "react-redux";
import {
  fetchingLocations,
  loadingLocations,
  testingComponent
} from "../redux/actions/locationActions";

class LocationsContainer extends React.Component {
  componentDidMount() {
    console.log("LocationsContainer mounted");
    this.props.fetchingLocations();
  }



  showLocation = () => {
    console.log('clicked it')
    debugger
  }


  //wrap each location in a Link to that location's show page


  render() {
    // shows 'Loading' while async call is made
    if (this.props.loadingStatus) {
      // log to console
      console.log("Loading status: ", this.props.loadingStatus, "display 'Loading'");
      return <div>Loading...</div>;
    }

    return (
      <Router>
      <List className="ui relaxed items">
        {this.props.allLocations.map(location => {
          return (
            <div className="item" key={location.id}>

            <Route exact path="/location/:id" component={() => (<Location />)} />
              <LocationListItem location={location} onClick={console.log('flcicsklsk')} as={Link}/>

            </div>
          );
        })}
      </List>
      </Router>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchingLocations: () => {
      dispatch(fetchingLocations());
    }
  };
};

function mapStateToProps(state) {
  return {
    loadingStatus: state.loading,
    allLocations: state.allLocations
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsContainer);
