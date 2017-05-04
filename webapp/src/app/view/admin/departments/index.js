import { connect } from "react-redux"
import AdminDepartmentsComponent from "./admin-departments"

import * as actions from '../../../core/actions/admin.action'

const stateToProps = (state) => {
  return {
    items: state.admin.departments.data,
    created: state.admin.departments.created,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doShowCreateDepartmentsDialog: (open) => {
      dispatch(actions.showCreateDepartmentsDialog(open));
    },
    doChangeCreated: () => {
      dispatch(actions.changeDepartmentCreated());
    }
  }
};

const AdminDepartments = connect(stateToProps, dispatchToProps)(AdminDepartmentsComponent);

export default AdminDepartments;
