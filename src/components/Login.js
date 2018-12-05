import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
// import { postUser } from "../redux/actions/locationActions";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
      // ,
      // initials: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted form")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(r => r.json())
      .then(json => {
        console.log(json)
        window.sessionStorage.setItem("jwt", json["jwt"]);
        window.sessionStorage.setItem('username', json.user.username)
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username </label>
          <Form.Input
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
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
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
// Dont need to log in with initials
// <Form.Field>
//   <label>3-letter Initials</label>
//   <Form.Input placeholder="ex. INI" name="initials" onChange={this.handleChange} />
// </Form.Field>
//
// const mapDispatchToProps = dispatch => {
//   // Payload looks like {issueDescription: "some text", LocMacId: #"}
//   return {
//     postUser: formData => dispatch(postUser(formData)),
//   };
// };

export default withRouter(
  connect(
    null,
    null
  )(Login)
);
