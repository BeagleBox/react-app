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

export function defineOperationType(operation) {
  return {
    operation,
    type: types.admin.DEFINE_OPERATION_TYPE,
  }
}

export function selectItemToModify(item) {
  return {
    item,
    type: types.admin.SELECT_ITEM_TO_MODIFY,
  }
}

export function editDepartment(id, department) {
  return {
    id,
    department,
    type: types.admin.EDIT_DEPARTMENT,
  }
}

export function changeDepartmentEdited() {
  return {
    type: types.admin.CHANGE_DEPARTMENT_EDITED,
  }
}
