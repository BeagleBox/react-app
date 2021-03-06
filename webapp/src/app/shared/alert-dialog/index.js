import { connect } from 'react-redux'
import AlertDialogComponent from './alert-dialog'

import * as actionsReceive from '../../core/actions/receive.action'
import * as actionsRequest from '../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    openReceive: state.receive.dialog,
    openRequest: state.request.dialog,
    items: state.request.loadItems,
    notCheckedItems: state.receive.items.notChecked,
    accessKey: state.request.accessKey,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowAlertDialog: (open) => {
      dispatch(actionsReceive.showAlertDialog(open));
    },
    doGetNotCheckedList: () => {
      dispatch(actionsReceive.getNotCheckedList());
    },
    doShowDialogKey: (open) => {
      dispatch(actionsRequest.showDialogKey(open));
    },
    doDisableButton: (disabled) => {
      dispatch(actionsRequest.disableRequestButton(disabled));
    },
    doAllowReceive: (allow) => {
      dispatch(actionsReceive.allowReceive(allow));
    }
  }
};

const AlertDialog = connect(stateToProps, dispatchToProps)(AlertDialogComponent);

export default AlertDialog;
