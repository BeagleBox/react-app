import { connect } from "react-redux"
import AdminDepartmentsComponent from "./admin-departments"

import * as actions from '../../../core/actions/admin.action'

const stateToProps = (state) => {
  return {
    items: state.admin.departments.data,
    created: state.admin.departments.created,
    edited: state.admin.departments.edited,
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
  }
};

const AdminDepartments = connect(stateToProps, dispatchToProps)(AdminDepartmentsComponent);

export default AdminDepartments;
