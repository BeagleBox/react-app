import { connect } from "react-redux"
import AppComponent from "./app"

import * as actions from './core/actions/acquire-auth-token.action'

const stateToProps = (state) => {
  return {

  }
};

const dispatchToProps = (dispatch) => {
  return {
    onInitiallize: () => {
      dispatch(actions.onInitiallize());
    }
  }
};

const App = connect(stateToProps, dispatchToProps)(AppComponent);

export default App;

