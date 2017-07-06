import { connect } from 'react-redux'
import ReceiveComponent from './receive'

import * as receiveActions from '../../../core/actions/receive.action'
import * as requestActions from '../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    items: state.receive.items.data,
    notCheckedItems: state.receive.items.notChecked,
    accessKey: state.receive.key_access,
    deliveries: state.receive.delivery.data,
    key_access: state.request.delivery.key_access,
    receiveAllowed: state.receive.allowed,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowAlertDialog: (open) => {
      dispatch(receiveActions.showAlertDialog(open));
    },
    doGetDeliveries: () => {
      dispatch(receiveActions.getDeliveries());
    },
    doChangePlace: (change) => {
      dispatch(requestActions.changePlace(change));
    },
    doAllowReceive: (allow) => {
      dispatch(receiveActions.allowReceive(allow));
    },
  }
};

const Receive = connect(stateToProps, dispatchToProps)(ReceiveComponent);

export default Receive;
