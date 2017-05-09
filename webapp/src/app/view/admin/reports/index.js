import { connect } from 'react-redux'
import AdminReportsComponent from './admin-reports'

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

const AdminReports = connect(stateToProps, dispatchToProps)(AdminReportsComponent);

export default AdminReports;
