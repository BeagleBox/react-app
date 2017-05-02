import { connect } from "react-redux"
import HomepageFormComponent from "./homepage-form"

import * as actions from "../../../core/actions/login.action"

const stateToProps = (state) => {
  return {

  }
};

const dispatchToProps = (dispatch) => {
  return {
    doUserLogin: (email, password) => {
      dispatch(actions.login(email, password))
    }
  }
};

const HomepageForm = connect(stateToProps, dispatchToProps)(HomepageFormComponent);

export default HomepageForm;
