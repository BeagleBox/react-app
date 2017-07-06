import { connect } from 'react-redux'
import ListDialogComponent from './list-dialog'

import * as actions from '../../core/actions/history.action'

const stateToProps = (state) => {
  return {
    openListDialog: state.history.openListDialog,
    items: state.history.table.data,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowListDialog: (open) => {
      dispatch(actions.showListDialog(open));
    },
  }
};

const ListDialog = connect(stateToProps, dispatchToProps)(ListDialogComponent);

export default ListDialog;
