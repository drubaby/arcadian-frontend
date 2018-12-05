import React, { Component, Fragment } from "react";
import { Input, Segment, Loader, Message } from "semantic-ui-react";
// import { BrowserRouter } from "react-router-dom";
import MachineFinderResults from "./MachineFinderResults";
import { connect } from "react-redux";
import {
  fetchingAllLocationMachines,
  refreshMachineFinderOptions,
  changeMachineFinderText
} from "../redux/actions/locationActions";

class MachineFinder extends Component {
  componentDidMount() {
    this.resetComponent();
    console.log("Machine finder will mount, fetching loc macs");
    this.props.fetchingAllLocationMachines();
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
    if (this.props.loadingStatus) {
      console.log(
        "Loading status: ",
        this.props.loadingStatus,
        "display 'Loading'"
      );
    }
    return (
      <Fragment>
        <Message
          header="Looking to play something in particular?"
          content="The machine finder searches for machines currently in our arcades."
        />
        <Segment>
          <Input
            fluid
            placeholder="Start typing to search for machines currently in our arcades"
            value={this.props.searchText}
            onChange={e => {
              this.props.refreshMachineFinderOptions(this.props.allLocMacs);
              this.props.changeMachineFinderText(e.target.value);
            }}
          />
        </Segment>
        <MachineFinderResults />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allLocMacs: state.allLocationMachines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllLocationMachines: () => {
      dispatch(fetchingAllLocationMachines());
    },
    refreshMachineFinderOptions: machines => {
      dispatch(refreshMachineFinderOptions(machines));
    },
    changeMachineFinderText: input => {
      dispatch(changeMachineFinderText(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineFinder);
