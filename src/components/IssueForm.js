import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postIssue } from "../redux/actions/locationActions";

// Rendered by MachineModal
class IssueForm extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      machine_id: 0
    };
  }

  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleSubmit = event => {
    if (this.state.description !== "")
    {
    event.preventDefault();
    this.props.postIssue(this.state)
    // reset form after dispatch
    event.currentTarget.reset()
}
  };

  componentDidMount() {
    this.setState({ machine_id: this.props.MacId });
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
  // Payload looks like {issueDescription: "some text", MacId: #"}
  return {
    postIssue: formData => dispatch(postIssue(formData)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(IssueForm);
