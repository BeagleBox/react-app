import types from '../types'

export function showCreateDepartmentsDialog(open) {
  return {
    open,
    type: types.admin.SHOW_CREATE_DEPARTMENTS_DIALOG
  }
}

export function showCreateEmployeesDialog(open) {
  return {
    open,
    type: types.admin.SHOW_CREATE_EMPLOYEES_DIALOG
  }
}

export function changeCreated() {
  return {
    type: types.admin.CHANGE_CREATED,
  }
}

export function changeDeleted() {
  return {
    type: types.admin.CHANGE_DELETED,
  }
}

export function changeEdited() {
  return {
    type: types.admin.CHANGE_EDITED,
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

export function addNewDepartment(department) {
  return {
    department,
    type: types.admin.ADD_NEW_DEPARTMENT
  }
}

export function editDepartment(id, department) {
  return {
    id,
    department,
    type: types.admin.EDIT_DEPARTMENT,
  }
}

export function deleteDepartment(item) {
  return {
    item,
    type: types.admin.DELETE_DEPARTMENT,
  }
}

export function addNewEmployee(employee) {
  return {
    employee,
    type: types.admin.ADD_NEW_EMPLOYEE
  }
}

export function editEmployee(id, employee) {
  return {
    id,
    employee,
    type: types.admin.EDIT_EMPLOYEE,
  }
}

export function deleteEmployee(item) {
  return {
    item,
    type: types.admin.DELETE_EMPLOYEE,
  }
}

