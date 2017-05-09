import { connect } from 'react-redux'
import AlertDialogComponent from './alert-dialog'

import * as actions from '../../core/actions/receive.action'

const stateToProps = (state) => {
  return {
    openReceive: state.receive.dialog,
    notCheckedItems: state.receive.items.notChecked,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowAlertDialog: (open) => {
      dispatch(actions.showAlertDialog(open));
    },
    doGetNotCheckedList: () => {
      dispatch(actions.getNotCheckedList());
    },
  }
};

const AlertDialog = connect(stateToProps, dispatchToProps)(AlertDialogComponent);

export default AlertDialog;
