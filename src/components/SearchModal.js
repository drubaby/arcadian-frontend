import React, { Component } from "react";
import { Button, Modal, Header, List } from "semantic-ui-react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { addLocationMachine } from "../redux/actions/locationActions";

// rendered on LocationCard
class SearchModal extends Component {
  state = { open: false };
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  // Modal does not dismiss on click of item
  // state not currently wired to component

  render() {
    let { location, searchResults } = this.props;

    return (
      <Modal
        trigger={
          <Button size="mini" floated="right">
            Add Machine
          </Button>
        }
      >
        <Modal.Header>Add Machine to {location.name}</Modal.Header>

        <Modal.Content image>
          <Modal.Description>
            <Header>SEARCH RESULTS</Header>
            <List selection divided relaxed>
              {searchResults.length < 1000
                ? searchResults.map(machine => {
                    return (
                      <List.Item
                        key={machine.id}
                        onClick={() => {
                          this.close();
                          let payload = {
                            location_id: location.id,
                            machine_id: machine.id
                          };
                          this.props.addLocationMachine(payload);
                        }}
                      >
                        {machine.name}
                      </List.Item>
                    );
                  })
                : null}
            </List>
          </Modal.Description>
          <Modal.Description>
            <SearchBar />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.currentLocation,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLocationMachine: payload => {
      dispatch(addLocationMachine(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModal);
