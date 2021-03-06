import { connect } from "react-redux"
import AdminDepartmentsCreateEditComponent from "./admin-departments-create-edit"

import * as actions from "../../../../core/actions/admin.action"

const stateToProps = (state) => {
  return {
    open: state.admin.dialog.create_departments,
    type: state.admin.operation_type,
    toModify: state.admin.to_modify,
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
    doEditDepartment: (id, department) => {
      dispatch(actions.editDepartment(id, department));
    },
    doSelectItemToModify: (item) => {
      dispatch(actions.selectItemToModify(item));
    },
  }
};

const AdminDepartmentsCreateEdit = connect(stateToProps, dispatchToProps)(AdminDepartmentsCreateEditComponent);

export default AdminDepartmentsCreateEdit;
