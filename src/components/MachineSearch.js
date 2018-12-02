// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Search, Grid, Segment, Header, Label, Item } from "semantic-ui-react";
// import { changeSearchText } from "../redux/actions/locationActions";
// // import { mapSearchTextToProps } from '../../redux/mapStateToProps'
//
// class MachineSearch extends Component {
//   componentWillMount() {
//     this.resetComponent();
//   }
//   resetComponent = () =>
//     this.setState({ isLoading: false, results: [], value: "" , selectedMachine: []});
//
//   //if successfully selected will set search bar value to machine
//   // handleResultSelect = (e, { result }) =>
//   //   this.setState({ value: result.name });
//
//   handleSearchChange = (e, { value }) => {
//     this.setState({ isLoading: true, value })
//
//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.resetComponent()
//       this.setState({
//         isLoading: false
//       })
//     }, 300)
//   }
//
//   handleResultSelect = (e, { result }) => this.setState({ selectedMachine: result })
//
// // if the search results are too slow/anoying just use an input and a pop-up
//
//   render() {
//
//     const resultRenderer = ({ name, id }) => (
//       <Item key={id} content={name} />
//     )
//
//     return (
//       <Grid className="ui container">
//         <Grid.Column className="ui very large fluid input">
//           <Search
//             type="text"
//             placeholder="Find Pinball Machine"
//             value={this.props.searchText}
//             onResultSelect={this.handleResultSelect}
//             onSearchChange={e => this.props.changeSearchText(e.target.value)}
//             minCharacters={2}
//             {...this.props}
//             resultRenderer={resultRenderer}
//           />
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     // allMachines: state.allMachines,
//     // searchText: state.searchText,
//     // works! returns array of machines that match search text
//     results: state.allMachines.filter(function(machine) {
//       return machine.name
//         .toLowerCase()
//         .includes(state.searchText.toLowerCase());
//     })
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     changeSearchText: input => {
//       dispatch(changeSearchText(input));
//     }
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MachineSearch);
