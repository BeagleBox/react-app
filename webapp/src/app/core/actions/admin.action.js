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
    [CALL_API]: {
      endpoint: `${getApiUrl()}/departaments`,
      method: "POST",
      credentials: "include",
      types: [
        types.admin.ADD_NEW_DEPARTMENT_REQUEST,
        types.admin.ADD_NEW_DEPARTMENT_SUCCESS,
        types.admin.ADD_NEW_DEPARTMENT_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({ departament_name: department })
    }
  }
}

export function editDepartment(id, department) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/departaments/${id}`,
      method: "PUT",
      credentials: "include",
      types: [
        types.admin.EDIT_DEPARTMENT_REQUEST,
        types.admin.EDIT_DEPARTMENT_SUCCESS,
        types.admin.EDIT_DEPARTMENT_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({ departament_name: department })
    }
  }
}

export function deleteDepartment(id) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/departaments/${id}`,
      method: "DELETE",
      credentials: "include",
      types: [
        types.admin.DELETE_DEPARTMENT_REQUEST,
        types.admin.DELETE_DEPARTMENT_SUCCESS,
        types.admin.DELETE_DEPARTMENT_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }
  }
}

export function addNewEmployee(employee) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/employees`,
      method: "POST",
      credentials: "include",
      types: [
        types.admin.ADD_NEW_EMPLOYEE_REQUEST,
        types.admin.ADD_NEW_EMPLOYEE_SUCCESS,
        types.admin.ADD_NEW_EMPLOYEE_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        employee_name: employee.employee_name,
        employee_email: employee.employee_email,
        employee_registration: employee.employee_registration,
        password: employee.password,
        password_confirmation: employee.password_confirmation,
        departament_id: employee.departament_id
      })
    }
  }
}

export function editEmployee(id, employee) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/employees/${id}`,
      method: "PUT",
      credentials: "include",
      types: [
        types.admin.EDIT_EMPLOYEE_REQUEST,
        types.admin.EDIT_EMPLOYEE_SUCCESS,
        types.admin.EDIT_EMPLOYEE_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        employee_name: employee.employee_name,
        employee_email: employee.employee_email,
        employee_registration: employee.employee_registration,
        password: employee.password,
        password_confirmation: employee.password_confirmation,
        departament_id: employee.departament_id
      })
    }
  }
}

export function deleteEmployee(id) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/employees/${id}`,
      method: "DELETE",
      credentials: "include",
      types: [
        types.admin.DELETE_EMPLOYEE_REQUEST,
        types.admin.DELETE_EMPLOYEE_SUCCESS,
        types.admin.DELETE_EMPLOYEE_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }
  }
}

export function getAllHotspots() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/departaments`,
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

export function getSpecificRecipients(id) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/employees/search_departament/${id}`,
      method: "GET",
      credentials: "include",
      types: [
        types.admin.GET_SPECIFIC_RECIPIENTS_REQUEST,
        types.admin.GET_SPECIFIC_RECIPIENTS_SUCCESS,
        types.admin.GET_SPECIFIC_RECIPIENTS_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}
