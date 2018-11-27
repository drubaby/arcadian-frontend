import React from "react";
import { List } from "semantic-ui-react";
import LocationListItem from "../components/LocationListItem";
import { BrowserRouter as Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchingLocations,
  showLocation
} from "../redux/actions/locationActions";

class LocationsContainer extends React.Component {
  componentDidMount() {
    // console.log("Locations Container mounted");
  }

  render() {
    // shows 'Loading' while async call is made
    if (this.props.loadingStatus) {
      // log to console
      console.log(
        "Loading status: ",
        this.props.loadingStatus,
        "display 'Loading'"
      );
      return <div>Loading...</div>;
    }

    // wrap each location in a Link to that location's show page
    return (
      <List className="ui relaxed items">
        {this.props.allLocations.map(location => {
          return (
            <div className="item" key={location.id}>
              <LocationListItem location={location} as={Link} />
            </div>
          );
        })}
      </List>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchingLocations: () => {
      dispatch(fetchingLocations());
    },
    showLocation: () => {
      dispatch(showLocation());
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
