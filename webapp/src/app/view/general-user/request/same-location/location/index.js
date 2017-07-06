import { connect } from 'react-redux'
import LocationComponent from './request-same-location-location'

import * as requestActions from '../../../../../core/actions/request.action'
import * as adminActions from '../../../../../core/actions/admin.action'

const stateToProps = (state) => {
  return {
    location: state.admin.departments.specific_location,
    origin: state.request.location.origin,
    destination: state.request.location.destination,
    recipient: state.request.location.destination_recipient,
    recipients: state.admin.departments.specific_recipients,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doGetAllHotspots: () => {
      dispatch(adminActions.getAllHotspots());
    },
    doGetSpecificRecipients: (id) => {
      dispatch(adminActions.getSpecificRecipients(id));
    },
    doSelectDestinationLocation: (index) => {
      dispatch(requestActions.selectDestinationLocation(index));
    },
    doSelectRecipient: (index) => {
      dispatch(requestActions.selectRecipient(index));
    },
  }
};

const Location = connect(stateToProps, dispatchToProps)(LocationComponent);

export default Location;
