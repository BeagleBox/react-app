import { connect } from 'react-redux'
import OpenKeyComponent from './receive-open-key'

const stateToProps = (state) => {
  return {
    accessKey: state.request.accessKey,
  }
};

const dispatchToProps = (dispatch) => {
  return {

  }
};

const OpenKey = connect(stateToProps, dispatchToProps)(OpenKeyComponent);

export default OpenKey;
