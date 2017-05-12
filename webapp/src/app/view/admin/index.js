import { connect } from "react-redux"
import AdminComponent from "./admin"

const stateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

const dispatchToProps = (dispatch) => {
  return {

  }
};

const Admin = connect(stateToProps, dispatchToProps)(AdminComponent);

export default Admin;
