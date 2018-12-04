import React, { Component } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { postLocation } from "../redux/actions/locationActions";

class NewLocationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      street: "",
      city: "",
      state: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // no empty fields
  checkFields = () => {
    if (this.state.name === "") {
      alert("Please enter a name");
      return false;
    } else if (this.state.street === "") {
      alert("Please enter a street address");
      return false;
    } else if (this.state.city === "") {
      alert("Please enter a city");
      return false;
    } else if (this.state.street === "") {
      alert("Please enter a state");
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.checkFields()) {
      this.props.postLocation(this.state);
      event.currentTarget.reset();
      alert("Location successfully created!");
      // return <Redirect to='/locations' />
      window.location.href = "http://localhost:3001/locations";
    } else {
      return;
    }
  };

  componentDidMount() {
    this.setState({ location_machine_id: this.props.locMacId });
  }
  render() {
    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <Header>Create New Location</Header>
        <Form.Field required>
          <label>Arcade Name</label>
          <Form.Input
            placeholder="Full location name"
            name="name"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Street Adress </label>
          <Form.Input
            placeholder="e.g. 555 Multiball Lane"
            name="street"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>City </label>
          <Form.Input
            placeholder="e.g. Glen Burnie"
            name="city"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>State </label>
          <Form.Input
            placeholder="MD/DC/VA"
            name="state"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postLocation: formData => {
      dispatch(postLocation(formData));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewLocationForm);
