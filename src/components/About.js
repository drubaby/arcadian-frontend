import React from "react";
import { Segment } from "semantic-ui-react";

const About = () => (
  <div className="about">
    <Segment placeholder>
      <h1>Welcome!</h1>
      <h3>Arcadian is an arcade management app</h3>
      <br/>
      <h4>With Arcadian:</h4>

      <h4>>Arcades advertise their line-ups to the
      world</h4>
      <h4>> Players report mechanical issues as they arise</h4>
      <h4>> Owners log
      repairs in real time</h4>
      <br />
      <br />
      To get started gently cram a quarter in your device's charging port and
      lets find a machine near you!
    </Segment>
  </div>
);

export default About;
