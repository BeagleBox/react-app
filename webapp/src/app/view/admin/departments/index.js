import { connect } from "react-redux"
import AdminDepartmentsComponent from "./admin-departments"

import * as actions from '../../../core/actions/admin.action'

const stateToProps = (state) => {
  return {
    items: state.admin.departments.data,
    created: state.admin.created,
    edited: state.admin.edited,
    deleted: state.admin.deleted,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowCreateDepartmentsDialog: (open) => {
      dispatch(actions.showCreateDepartmentsDialog(open));
    },
    doDefineOperationType: (type) => {
      dispatch(actions.defineOperationType(type));
    },
    doChangeCreated: () => {
      dispatch(actions.changeDepartmentCreated());
    },
    doSelectItemToModify: (item) => {
      dispatch(actions.selectItemToModify(item));
    },
    doChangeEdited: () => {
      dispatch(actions.changeDepartmentEdited());
    },
    doDeleteDepartment: (item) => {
      dispatch(actions.deleteDepartment(item));
    },
    doChangeDepartmentDeleted: () => {
      dispatch(actions.changeDepartmentDeleted());
    }
  }
};

const AdminDepartments = connect(stateToProps, dispatchToProps)(AdminDepartmentsComponent);

export default AdminDepartments;
