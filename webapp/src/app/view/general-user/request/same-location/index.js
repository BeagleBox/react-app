import { connect } from 'react-redux'
import SameLocationComponent from './request-same-location'

import * as receiveActions from '../../../../core/actions/receive.action'
import * as requestActions from '../../../../core/actions/request.action'
import * as historyActions from '../../../../core/actions/history.action'

const stateToProps = (state) => {
  return {
    origin: state.request.location.origin,
    destination: state.request.location.destination,
    loadList: state.request.loadItems,
    requestButton: state.request.button,
    accessKey: state.request.accessKey,
    user: state.auth.user,
    recipient: state.request.location.destination_recipient,
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
    doCreateDelivery: (userID, origin, destination, recipientID, items, key) => {
      dispatch(requestActions.createDelivery(userID, origin, destination, recipientID, items, key));
    },
    doChangeNewDelivery: (newDelivery) => {
      dispatch(historyActions.changeNewDelivery(newDelivery));
    },
    doAllowReceive: (allow) => {
      dispatch(receiveActions.allowReceive(allow));
    }
  }
};

const SameLocation = connect(stateToProps, dispatchToProps)(SameLocationComponent);

export default SameLocation;
