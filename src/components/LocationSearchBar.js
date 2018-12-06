import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import {
  changeLocSearchText,
  refreshLocSearchOptions
} from "../redux/actions/locationActions";

class LocationSearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
    // this.fetchingLocations()
  }
  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: [],
      value: ""
    });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();
      this.setState({
        isLoading: false
      });
    }, 300);
  };

  render() {
    return (
      <Input
        type="text"
        placeholder="Search Locations"
        value={this.props.searchText}
        // action={{ icon: 'search' }}
        onChange={e => {
          this.props.refreshSearchOptions(this.props.locations);
          this.props.changeLocSearchText(e.target.value);
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.allLocations,
    locationSearchResults: state.locationSearchResults
    // ,
    // searchText: state.searchText,
    // works! returns array of machines that match search text
    // results: state.allMachines.filter(function(machine) {
    //   return machine.name
    //     .toLowerCase()
    //     .includes(state.searchText.toLowerCase());
    // })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLocSearchText: input => {
      dispatch(changeLocSearchText(input));
    }
    ,
    refreshSearchOptions: locations => {
      dispatch(refreshLocSearchOptions(locations));
    }

    // ,
    // searchResults: input => {
    //   const results = this.props.allMachines.filter(function(machine) {
    //     return machine.name.toLowerCase().includes(input).toLowercase()
    //   })
    //   debugger
    //   dispatch(updateSearchResults(results))
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSearchBar);
