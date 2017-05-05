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
      dispatch(actions.changeCreated());
    },
    doSelectItemToModify: (item) => {
      dispatch(actions.selectItemToModify(item));
    },
    doChangeEdited: () => {
      dispatch(actions.changeEdited());
    },
    doDeleteDepartment: (item) => {
      dispatch(actions.deleteDepartment(item));
    },
    doChangeDeleted: () => {
      dispatch(actions.changeDeleted());
    }
  }
};

const AdminDepartments = connect(stateToProps, dispatchToProps)(AdminDepartmentsComponent);

export default AdminDepartments;
