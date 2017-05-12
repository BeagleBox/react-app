import { connect } from 'react-redux'

import HomepageFormComponent from './homepage-form'
import * as actions from '../../../core/actions/acquire-auth-token.action'

const stateToProps = (state) => {
  return {

  }
};

const dispatchToProps = (dispatch) => {
  return {
    doUserLogin: (email, password) => {
      dispatch(actions.acquireAuthToken(email, password))
    }
  }
};

const HomepageForm = connect(stateToProps, dispatchToProps)(HomepageFormComponent);

export default HomepageForm;
