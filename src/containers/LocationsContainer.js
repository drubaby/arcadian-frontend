import React from "react";
import { List } from "semantic-ui-react";
import LocationListItem from "../components/LocationListItem";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
  //conditionally render list by this.props.loading

  render() {
    if (this.props.loadingStatus) {
      console.log(this.props.loadingStatus, "null");
      return <div>Loading...</div>;
    }
    console.log(this.props.loadingstatus, "else if");
    return (

      <List className="ui relaxed items">
        {this.props.allLocations.map(location => {
          return (
            <div className="item" key={location.id}>
              <LocationListItem location={location} onClick={this.showLocation}/>
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
