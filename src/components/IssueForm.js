import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class IssueForm extends Component {
  constructor() {
    super();
    this.state = {
      issueDescription: ""
    };
  }

  handleChange = event => {
    this.setState({
      issueDescription: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addIssue(this.state);
  };

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
  return {
    addIssue: formData => dispatch({ type: "ADD_ISSUE", payload: formData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(IssueForm);
