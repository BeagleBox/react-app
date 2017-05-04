import { connect } from "react-redux"
import AdminDepartmentsCreateEditComponent from "./admin-departments-create-edit"

import * as actions from "../../../../core/actions/admin.action"

const stateToProps = (state) => {
  return {
    open: state.admin.dialog.create_departments,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowCreateDepartmentsDialog: (open) => {
      dispatch(actions.showCreateDepartmentsDialog(open));
    },
    doAddNewDepartment: (department) => {
      dispatch(actions.addNewDepartment(department));
    },
  }
};

const AdminDepartmentsCreateEdit = connect(stateToProps, dispatchToProps)(AdminDepartmentsCreateEditComponent);

export default AdminDepartmentsCreateEdit;
