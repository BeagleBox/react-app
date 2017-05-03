import { connect } from 'react-redux'
import RequestComponent from './request'

const stateToProps = (state) => {
  return {
    isSamePlace: state.request.isSamePlace,
  }
};

const dispatchToProps = (dispatch) => {
  return {

  }
};

const Request = connect(stateToProps, dispatchToProps)(RequestComponent);

export default Request;
