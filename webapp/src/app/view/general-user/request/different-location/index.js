import { connect } from 'react-redux'
import DifferentLocationComponent from './request-different-location'

import * as requestActions from '../../../../core/actions/request.action'
import * as adminActions from '../../../../core/actions/admin.action'

const stateToProps = (state) => {
  return {
    location: state.admin.departments.specific_location,
    origin: state.request.location.origin,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doGetAllDepartments: () => {
      dispatch(adminActions.getAllDepartments())
    },
    doRequestCar: () => {
      dispatch(requestActions.requestCar());
    },
    doSelectOriginLocation: (index) => {
      dispatch(requestActions.selectOriginLocation(index));
    }
  }
};

const DifferentLocation = connect(stateToProps, dispatchToProps)(DifferentLocationComponent);

export default DifferentLocation;
