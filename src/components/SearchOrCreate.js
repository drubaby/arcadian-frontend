import React from "react";
import LocationSearchBar from './LocationSearchBar'
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";

const SearchOrCreate = () => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign="center">
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <Header icon>
            <Icon name="search" />
            Find Arcade
          </Header>
          <br />
          <LocationSearchBar />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name="world" />
            Add New Arcade
          </Header>
          <Button as={Link} to='/new_location'  primary>Create Arcade</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SearchOrCreate;
