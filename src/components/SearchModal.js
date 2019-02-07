import React, { Component, Fragment } from "react";
import { Button, Modal, Header, List } from "semantic-ui-react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { addLocationMachine } from "../redux/actions/locationActions";

// rendered on LocationCard || Search All Machines to add to location
class SearchModal extends Component {
  state = { open: false };
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    let { location, searchResults } = this.props;
    // const { closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <Fragment>
        <Button floated="right" size="mini" onClick={this.open}>
          Add Machine
        </Button>
        <Modal open={this.state.open} onClose={this.close} >
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
      </Fragment>
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
