import React, { Component } from "react";
import { withRouter }  from 'react-router-dom'
import { Button, Form } from "semantic-ui-react";
import {connect} from 'react-redux'
// import { postUser } from "../redux/actions/locationActions";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      initials: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postUser(this.state)
    // reset form after dispatch
    event.currentTarget.reset()

  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username </label>
          <Form.Input placeholder="Username" name="username" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>3-letter Initials</label>
          <Form.Input placeholder="ex. INI" name="initials" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password </label>
          <Form.Input
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
//
// const mapDispatchToProps = dispatch => {
//   // Payload looks like {issueDescription: "some text", LocMacId: #"}
//   return {
//     postUser: formData => dispatch(postUser(formData)),
//   };
// };

export default withRouter(connect(null, null)(Login))
