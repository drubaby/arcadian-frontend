import React, { Component } from "react";
import { connect } from "react-redux";
import LocationCard from '../components/LocationCard'

// const CardExampleCard = (props) => (
//   <Card>
//   <Image src={location_pic} />
//   <Card.Content>
//   <Card.Header>{props.location.name}</Card.Header>
//   <Card.Meta>
//   <span className='date'>Joined in 2015</span>
//   </Card.Meta>
//   <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//   <a>
//   <Icon name='user' />
//   22 Friends
//   </a>
//   </Card.Content>
//   </Card>
// )

class Location extends Component {

  componentDidMount(){
    console.log('Location Mounted')
  }


  //2 columns
  // left column display location name, address, and operator
  // right column display card grid with location machines

  render() {
    return <div>
    {this.props.location ? <LocationCard location={this.props.location} /> : null}
    {this.props.location ? "I am a location" : null}</div>;
  }
}



// dispatch action to fetch location machines on location render

const mapStateToProps = (state, propsFromParent) => {
  return {
    location: state.allLocations.find(
      loc => loc.id === parseInt(propsFromParent.locationId)
    )
  };
};

export default connect(
  mapStateToProps,
  null
)(Location);
