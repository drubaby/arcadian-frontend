import React, { Component } from "react";
import { Route, withRouter }  from 'react-router-dom'

import { Link } from "react-router-dom";
import { Button, Form, Header } from "semantic-ui-react";
import {connect} from 'react-redux'

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
    this.setState({ [event.target.placeholder]: event.target.value });
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username </label>
          <input placeholder="username" onChange={this.setChange} />
        </Form.Field>
        <Form.Field>
          <label>Password </label>
          <input
            placeholder="password"
            type="password"
            onChange={this.setChange}
          />
        </Form.Field>
        <Button type="submit" onClick={this.submitForm}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default withRouter(connect(null, null)(Login))
