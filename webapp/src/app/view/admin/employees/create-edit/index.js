import { connect } from "react-redux"
import AdminEmployeesCreateEditComponent from "./admin-employees-create-edit"

import * as actions from "../../../../core/actions/admin.action"

const stateToProps = (state) => {
  return {
    open: state.admin.dialog.create_employees,
    type: state.admin.operation_type,
    toModify: state.admin.to_modify,
    items: state.admin.departments.data,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowCreateEmployeesDialog: (open) => {
      dispatch(actions.showCreateEmployeesDialog(open));
    },
    doAddNewEmployee: (employee) => {
      dispatch(actions.addNewEmployee(employee));
    },
    doEditEmployee: (id, employee) => {
      dispatch(actions.editEmployee(id, employee));
    },
  }
};

const AdminEmployeesCreateEdit = connect(stateToProps, dispatchToProps)(AdminEmployeesCreateEditComponent);

export default AdminEmployeesCreateEdit;
