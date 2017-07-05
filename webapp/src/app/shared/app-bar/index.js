import { connect } from "react-redux"
import AppBarComponent from "./app-bar"

import * as actions from '../../core/actions/acquire-auth-token.action'

const stateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    receiveAllowed: state.receive.allowed,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doLogout: () => {
      dispatch(actions.logOut())
    }
  }
};

const AppBar = connect(stateToProps, dispatchToProps)(AppBarComponent);

export default AppBar;
