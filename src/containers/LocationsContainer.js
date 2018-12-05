import React from "react";
import {
  List,
  Header,
  Grid,
  Segment
} from "semantic-ui-react";
import LocationListItem from "../components/LocationListItem";
import { BrowserRouter as Link } from "react-router-dom";
import SearchOrCreate from '../components/SearchOrCreate'
import { connect } from "react-redux";
import {
  fetchingLocations,
  showLocation
} from "../redux/actions/locationActions";

// Rendered by App
class LocationsContainer extends React.Component {
  componentDidMount() {}

  render() {
    // shows 'Loading' while async call is made
    if (this.props.loadingStatus) {
      console.log(
        "Loading status: ",
        this.props.loadingStatus,
        "display 'Loading'"
      );
      return <div>Loading...</div>;
    }

    // wrap each location in a Link to that location's show page
    return (
      <Grid columns={2}>
        <Grid.Column>
          <List scrollable="true" className="ui relaxed items">
            <Header>Arcade Locations</Header>
            {this.props.locationSearchResults.map(location => {
              return (
                <Segment className="item" key={location.id}>
                  <LocationListItem location={location} as={Link} />
                </Segment>
              );
            })}
          </List>
        </Grid.Column>
        <Grid.Column>
        <SearchOrCreate />
        </Grid.Column>
      </Grid>
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
    allLocations: state.allLocations,
    locationSearchResults: state.locationSearchResults
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsContainer);
