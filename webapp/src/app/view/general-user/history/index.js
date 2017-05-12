import { connect } from 'react-redux'
import HistoryComponent from './history'

import * as actions from '../../../core/actions/history.action'

const stateToProps = (state) => {
  return {
    fromDate: state.history.fromDate,
    toDate: state.history.toDate,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doUpdateFromDate: (fromDate) => {
      dispatch(actions.updateFromDate(fromDate));
    },
    doUpdateToDate: (toDate) => {
      dispatch(actions.updateToDate(toDate));
    },
  }
};

const History = connect(stateToProps, dispatchToProps)(HistoryComponent);

export default History;
