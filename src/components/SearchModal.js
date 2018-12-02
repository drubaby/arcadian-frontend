import React, { Component } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";

// rendered on LocationCard
class SearchModal extends Component {

  render() {
    let {location} = this.props
    return (
      <Modal
        trigger={
          <Button size="mini" floated="right">
            Add Machine
          </Button>
        }
      >
        <Modal.Header>{location.name}</Modal.Header>

        <Modal.Content image>
          <Modal.Description>
            <Header>SEARCH RESULTS</Header>
          </Modal.Description>
          <Modal.Description>Search Input here</Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.currentLocation
  }
}


export default connect(
  mapStateToProps,
  null
)(SearchModal);
