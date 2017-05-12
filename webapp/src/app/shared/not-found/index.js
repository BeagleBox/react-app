import { connect } from "react-redux"
import NotFoundComponent from "./not-found"

import * as actions from '../../core/actions/acquire-auth-token.action'

const stateToProps = (state) => {
  return {

  }
};

const dispatchToProps = (dispatch) => {
  return {
    doLogout: () => {
      dispatch(actions.logOut())
    }
  }
};

const NotFound = connect(stateToProps, dispatchToProps)(NotFoundComponent);

export default NotFound;
