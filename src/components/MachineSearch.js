import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { changeSearchText } from "../redux/actions/locationActions";
// import { mapSearchTextToProps } from '../../redux/mapStateToProps'

const MachineSearch = props => (
  <div className="ui container">
    <div className="ui very large fluid input">
      <Input
        type="text"
        placeholder="Find Pinball Machine"
        value={props.searchText}
        onChange={e => props.changeSearchText(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchText: input => {
      dispatch(changeSearchText(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineSearch);
