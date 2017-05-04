import types from '../types'

export function showCreateDepartmentsDialog(open) {
  return {
    open,
    type: types.admin.SHOW_CREATE_DEPARTMENTS_DIALOG
  }
}

export function addNewDepartment(department) {
  return {
    department,
    type: types.admin.ADD_NEW_DEPARTMENT
  }
}

export function changeDepartmentCreated() {
  return {
    type: types.admin.CHANGE_DEPARTMENT_CREATED,
  }
}
