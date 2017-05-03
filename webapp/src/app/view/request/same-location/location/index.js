import { connect } from 'react-redux'
import LocationComponent from './request-same-location-location'

import * as actions from '../../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    location: state.request.location.data,
    origin: state.request.location.origin,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doSelectDestinationLocation: (index) => {
      dispatch(actions.selectDestinationLocation(index));
    },
  }
};

const Location = connect(stateToProps, dispatchToProps)(LocationComponent);

export default Location;
