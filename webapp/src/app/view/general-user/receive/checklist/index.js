import { connect } from 'react-redux'
import ReceiveChecklistComponent from './receive-checklist'

import * as actions from '../../../../core/actions/receive.action'

const stateToProps = (state) => {
  return {
    items: state.receive.items.data,
    hasChecked: state.receive.items.hasChecked,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doCheckItem: (index, checked) => {
      dispatch(actions.checkItem(index, checked));
    },
    doChangeChecked: () => {
      dispatch(actions.changeChecked());
    },
    doSelectAllItems: (checked) => {
      dispatch(actions.selectAllItems(checked));
    },
  }
};

const ReceiveChecklist = connect(stateToProps, dispatchToProps)(ReceiveChecklistComponent);

export default ReceiveChecklist;
