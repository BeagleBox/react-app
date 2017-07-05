import { connect } from 'react-redux'
import TransportationTableComponent from './transportation-table'

import * as actions from '../../core/actions/history.action'

const stateToProps = (state) => {
  return {
    tableItems: state.history.table.data,
    fromDate: state.history.fromDate,
    toDate: state.history.toDate,
    newDelivery: state.history.delivery,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doUpdateTable: (origin) => {
      dispatch(actions.updateTable(origin));
    },
    doChangeNewDelivery: (newDelivery) => {
      dispatch(actions.changeNewDelivery(newDelivery));
    },
    doShowListDialog: (open) => {
      dispatch(actions.showListDialog(open));
    },
  }
};

const TransportationTable = connect(stateToProps, dispatchToProps)(TransportationTableComponent);

export default TransportationTable;
