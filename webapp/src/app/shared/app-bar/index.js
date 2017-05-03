import { connect } from "react-redux"
import AppBarComponent from "./app-bar"

const stateToProps = (state) => {
  return {
    user: state.login.user,
  }
};

const dispatchToProps = (dispatch) => {
  return {

  }
};

const AppBar = connect(stateToProps, dispatchToProps)(AppBarComponent);

export default AppBar;
