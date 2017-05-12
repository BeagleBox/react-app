import { connect } from "react-redux"
import GeneralUserComponent from "./general-user"

const stateToProps = (state) => {
  return {
    token: state.auth.token,
  }
};

const dispatchToProps = (dispatch) => {
  return {

  }
};

const GeneralUser = connect(stateToProps, dispatchToProps)(GeneralUserComponent);

export default GeneralUser;
