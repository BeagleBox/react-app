import { connect } from "react-redux"
import { hashHistory } from 'react-router'
import HomepageComponent from "./homepage"

const stateToProps = (state) => {
  return {
    token: state.auth.token
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doRedirectInfo: () => {
      hashHistory.push('/informacoes-gerais');
    }
  }
};

const Homepage = connect(stateToProps, dispatchToProps)(HomepageComponent);

export default Homepage;
