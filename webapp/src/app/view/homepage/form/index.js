import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import HomepageFormComponent from './homepage-form'

import * as actions from '../../../core/actions/login.action'

const stateToProps = (state) => {
  return {

  }
};

const dispatchToProps = (dispatch) => {
  return {
    doUserLogin: (email, password) => {
      dispatch(actions.login(email, password))
      hashHistory.push('/informacoes-gerais')
    }
  }
};

const HomepageForm = connect(stateToProps, dispatchToProps)(HomepageFormComponent);

export default HomepageForm;
