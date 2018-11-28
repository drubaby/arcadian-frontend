import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postIssue } from "../redux/actions/locationActions";
// Rendered by LocationMachineCard
class IssueForm extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      location_machine_id: 0
    };
  }

  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postIssue(this.state);
  };

  componentDidMount() {
    this.setState({ location_machine_id: this.props.locMacId });
  }
  render() {
    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <Form.Field>
          <Form.Input
            fluid
            label="Submit new mechanical issue"
            placeholder="Describe issue here"
            onChange={event => this.handleChange(event)}
            value={this.state.issueDescription}
          />
          <Button type="submit">Submit</Button>
        </Form.Field>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // Payload looks like {issueDescription: "some text, LocMacId: #"}
  return {
    postIssue: formData => dispatch(postIssue(formData))
    // dispatch action only, do not specify TYPE: WHATEVER here
  };
};

export default connect(
  null,
  mapDispatchToProps
)(IssueForm);
