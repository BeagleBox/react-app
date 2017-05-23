import { connect } from 'react-redux'
import SameLocationComponent from './request-same-location'

import * as receiveActions from '../../../../core/actions/receive.action'
import * as requestActions from '../../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    origin: state.request.location.origin,
    destination: state.request.location.destination,
    loadList: state.request.loadItems,
    requestButton: state.request.button,
    accessKey: state.request.accessKey,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doSendCar: (list) => {
      dispatch(receiveActions.sendCar(list));
    },
    doShowDialogKey: (open) => {
      dispatch(requestActions.showDialogKey(open));
    },
    doGenerateKey: (key) => {
      dispatch(requestActions.generateKey(key));
    },
    doDisableButton: (disabled) => {
      dispatch(requestActions.disableRequestButton(disabled));
    },
    doCreateDelivery: (origin, destination, items) => {
      dispatch(requestActions.createDelivery(origin, destination, items));
    },
  }
};

const SameLocation = connect(stateToProps, dispatchToProps)(SameLocationComponent);

export default SameLocation;
