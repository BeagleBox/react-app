import { connect } from "react-redux"
import AdminEmployeesComponent from "./admin-employees"

import * as actions from '../../../core/actions/admin.action'

const stateToProps = (state) => {
  return {
    items: state.admin.employees.data,
    created: state.admin.created,
    edited: state.admin.edited,
    deleted: state.admin.deleted,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowCreateEmployeesDialog: (open) => {
      dispatch(actions.showCreateEmployeesDialog(open));
    },
    doDefineOperationType: (type) => {
      dispatch(actions.defineOperationType(type));
    },
    doChangeCreated: () => {
      dispatch(actions.changeCreated());
    },
    doSelectItemToModify: (item) => {
      dispatch(actions.selectItemToModify(item));
    },
    doChangeEdited: () => {
      dispatch(actions.changeEdited());
    },
    doDeleteEmployee: (item) => {
      dispatch(actions.deleteEmployee(item));
    },
    doChangeDeleted: () => {
      dispatch(actions.changeDeleted());
    }
  }
};

const AdminEmployees = connect(stateToProps, dispatchToProps)(AdminEmployeesComponent);

export default AdminEmployees;
