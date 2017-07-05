import { connect } from 'react-redux'
import ReceiveComponent from './receive'

import * as receiveActions from '../../../core/actions/receive.action'
import * as requestActions from '../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    items: state.receive.items.data,
    notCheckedItems: state.receive.items.notChecked,
    accessKey: state.request.accessKey,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowAlertDialog: (open) => {
      dispatch(receiveActions.showAlertDialog(open));
    },
    doConfirmOpenKey: (open_key) => {
      dispatch(receiveActions.confirmOpenKey(open_key));
    },
    doChangePlace: (change) => {
      dispatch(requestActions.changePlace(change));
    }
  }
};

const Receive = connect(stateToProps, dispatchToProps)(ReceiveComponent);

export default Receive;
