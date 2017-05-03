import { connect } from 'react-redux'
import DifferentLocationComponent from './request-different-location'

import * as actions from '../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    location: state.request.location.data,
    origin: state.request.location.origin,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doRequestCar: () => {
      dispatch(actions.requestCar());
    },
    doSelectOriginLocation: (index) => {
      dispatch(actions.selectOriginLocation(index));
    }
  }
};

const DifferentLocation = connect(stateToProps, dispatchToProps)(DifferentLocationComponent);

export default DifferentLocation;
