import { connect } from 'react-redux'
import SameLocationComponent from './request-same-location'

import * as actions from '../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    origin: state.request.location.origin,
    destination: state.request.location.destination,
    loadList: state.request.loadList,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doSendCar: (origin, destination, list) => {
      dispatch(actions.sendCar(origin, destination, list));
    },
  }
};

const SameLocation = connect(stateToProps, dispatchToProps)(SameLocationComponent);

export default SameLocation;
