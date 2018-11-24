import { combineReducers } from "redux";

//placeholders
const rootReducer = combineReducers({
  machines: machineReducer
});

export default rootReducer;

function machineReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}
