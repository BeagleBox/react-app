import { connect } from 'react-redux'
import DialogKeyComponent from './request-same-location-dialog-key'

import * as actions from '../../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    open: state.request.dialog,
    accessKey: state.request.accessKey,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowDialogKey: (open) => {
      dispatch(actions.showDialogKey(open));
    },
  }
};

const DialogKey = connect(stateToProps, dispatchToProps)(DialogKeyComponent);

export default DialogKey;
