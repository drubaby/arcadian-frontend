import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MachinesContainer from '../containers/MachinesContainer'
import Location from '../containers/Location'
import LocationsContainer from '../containers/LocationsContainer'


const SidebarExample = () => (
  <Router>
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
      <Menu.Item as={Link} to ='/'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to='/location/:id'>
        <Icon name='gamepad' />
        Games [Test Location Link]
      </Menu.Item>
      <Menu.Item as={Link} to='/locations'>
        <Icon name='building' />
        Locations
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Arcadian :]</Header>
        <Switch>
          <Route exact path="/location/:id" component={() => (<Location />)} />
          <Route exact path="/locations" component={()=> (<LocationsContainer />)} />
        </Switch>

      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  </Router>
)

export default SidebarExample
