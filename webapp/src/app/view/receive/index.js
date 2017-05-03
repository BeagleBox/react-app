import { connect } from 'react-redux'
import ReceiveComponent from './receive'

import * as actions from '../../core/actions/receive.action'

const stateToProps = (state) => {
  return {
    items: state.receive.items.data,
    notCheckedItems: state.receive.items.notChecked,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowAlertDialog: (open) => {
      dispatch(actions.showAlertDialog(open));
    }
  }
};

const Receive = connect(stateToProps, dispatchToProps)(ReceiveComponent);

export default Receive;
