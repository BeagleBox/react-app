import types from '../types'

import getApiUrl from "."
import { CALL_API } from "redux-api-middleware"

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

export function getAllHotspots() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/departament_name`,
      method: "GET",
      credentials: "include",
      types: [
        types.admin.GET_ALL_HOTSPOTS_REQUEST,
        types.admin.GET_ALL_HOTSPOTS_SUCCESS,
        types.admin.GET_ALL_HOTSPOTS_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}

export function getAllDepartments() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/departaments`,
      method: "GET",
      credentials: "include",
      types: [
        types.admin.GET_ALL_DEPARTMENTS_REQUEST,
        types.admin.GET_ALL_DEPARTMENTS_SUCCESS,
        types.admin.GET_ALL_DEPARTMENTS_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}

export function getAllEmployees() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/employees`,
      method: "GET",
      credentials: "include",
      types: [
        types.admin.GET_ALL_EMPLOYEES_REQUEST,
        types.admin.GET_ALL_EMPLOYEES_SUCCESS,
        types.admin.GET_ALL_EMPLOYEES_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}
