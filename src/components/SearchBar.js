import React, { Component } from "react";
import { connect } from "react-redux";
import { Search, Grid, Segment, Header, Label, Item, Input, Popup } from "semantic-ui-react";
import { changeSearchText } from "../redux/actions/locationActions";

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }
  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: [],
      value: "",
      selectedMachine: []
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
      <div className="ui container">
        <div className="ui very large fluid input">
          <Input
            type="text"
            placeholder="Search"
            value={this.props.searchText}
            onChange={e => this.props.changeSearchText(e.target.value)}
          />
        </div>
        <div className="ui clearing section divider" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // allMachines: state.allMachines,
    // searchText: state.searchText,
    // works! returns array of machines that match search text
    results: state.allMachines.filter(function(machine) {
      return machine.name
        .toLowerCase()
        .includes(state.searchText.toLowerCase());
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchText: input => {
      dispatch(changeSearchText(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
