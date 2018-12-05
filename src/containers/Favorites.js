// import React, { Component } from "react";
// import { Grid, Header } from "semantic-ui-react";
// import { connect } from "react-redux";
// import LocationCard from "../components/LocationCard";
// import FavoriteIssues from "./FavoriteIssues";
//
// class Favorites extends Component {
//   render() {
//     if (this.props.favoriteLocations.length < 1) {
//       return <Header align="center">No Locations Favorited</Header>;
//     }
//     return (
//       <Grid celled>
//         <Header>Favorite Locations</Header>
//         {this.props.favoriteLocations.map(loc => {
//           return (
//             <Grid.Row columns={2}>
//             <Grid.Column fluid>
//               <LocationCard
//                 key={loc.id}
//                 location={loc}
//                 machines={loc.location_machines}
//               />
//               </Grid.Column>
//               <Grid.Column fluid>
//               <FavoriteIssues locationIssues={loc.machine_issues} />
//               </Grid.Column>
//             </Grid.Row>
//           );
//         })}
//       </Grid>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return { favoriteLocations: state.favoriteLocations };
// };
//
// export default connect(
//   mapStateToProps,
//   null
// )(Favorites);
