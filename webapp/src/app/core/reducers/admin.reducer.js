import types from "../types"

const initialState = {
  departments: {
    data: [],
    specific_location: [],
  },
  employees: { data: [] },
  operation_type: '',
  to_modify: {},
  created: false,
  edited: false,
  deleted: false,
  dialog: {
    create_departments: false,
    create_employees: false,
  }
};

const addNewDepartment = (state, {department}) => {
  const items = state.departments.data;
  var id = items[items.length-1].id + 1;
  var found = false;

  for(var i = 0; i < items.length; i++) {
    if(department === items[i].department) {
      found = true;
      break;
    }
  }

  if(!found) {
    items.push({id, department_name: department});
  }

  return items;
}

const updateDepartmentData = (state, {id, department}) => {
  const items = state.departments.data;

  for(var i = 0; i < items.length; i++) {
    if(id === items[i].id) {
      items[i].department_name = department;
    }
  }

  return items;
}

const deleteDepartment = (state, {item}) => {
  const items = state.departments.data;

  for(var i = 0; i < items.length; i++) {
    if(item.id === items[i].id) {
      items.splice(i, 1);
    }
  }

  return items;
}

const addNewEmployee = (state, {employee}) => {
  const items = state.employees.data;
  var id = items[items.length-1].id + 1;
  var found = false;

  for(var i = 0; i < items.length; i++) {
    if(employee === items[i].employee) {
      found = true;
      break;
    }
  }

  if(!found) {
    items.push({
      id,
      employee_name: employee.name,
      registration: employee.registration,
      email: employee.email,
      department: employee.department
    });
  }

  return items;
}

const updateEmployeeData = (state, {id, employee}) => {
  const items = state.employees.data;

  for(var i = 0; i < items.length; i++) {
    if(id === items[i].id) {
      items[i].employee_name = employee.name;
      items[i].registration = employee.registration;
      items[i].email = employee.email;
      items[i].department = employee.department;
    }
  }

  return items;
}

const deleteEmployee = (state, {item}) => {
  const items = state.employees.data;

  for(var i = 0; i < items.length; i++) {
    if(item.id === items[i].id) {
      items.splice(i, 1);
    }
  }

  return items;
}

export default function admin(state=initialState, action) {
  switch (action.type) {
    case types.admin.SHOW_CREATE_DEPARTMENTS_DIALOG: {
      state = {
        ...state,
        dialog: {
          ...state.dialog,
          create_departments: action.open,
        }
      };

      break;
    }
    case types.admin.SHOW_CREATE_EMPLOYEES_DIALOG: {
      state = {
        ...state,
        dialog: {
          ...state.dialog,
          create_employees: action.open,
        }
      };

      break;
    }
    case types.admin.CHANGE_CREATED: {
      state = {
        ...state,
        created: false,
      };

      break;
    }
    case types.admin.CHANGE_EDITED: {
      state = {
        ...state,
        edited: false,
      };

      break;
    }
    case types.admin.CHANGE_DELETED: {
      state = {
        ...state,
        deleted: false,
      };

      break;
    }
    case types.admin.DEFINE_OPERATION_TYPE: {
      state = {
        ...state,
        operation_type: action.operation,
      };

      break;
    }
    case types.admin.SELECT_ITEM_TO_MODIFY: {
      state = {
        ...state,
        to_modify: action.item,
      };

      break;
    }
    case types.admin.ADD_NEW_DEPARTMENT: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: addNewDepartment(state, action),
        },
        created: true,
      };

      break;
    }
    case types.admin.EDIT_DEPARTMENT: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: updateDepartmentData(state, action),
        },
        edited: true,
      };

      break;
    }
    case types.admin.DELETE_DEPARTMENT: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: deleteDepartment(state, action),
        },
        deleted: true,
      };

      break;
    }
    case types.admin.ADD_NEW_EMPLOYEE: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: addNewEmployee(state, action),
        },
        created: true,
      };

      break;
    }
    case types.admin.EDIT_EMPLOYEE: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: updateEmployeeData(state, action),
        },
        edited: true,
      };

      break;
    }
    case types.admin.DELETE_EMPLOYEE: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: deleteEmployee(state, action),
        },
        deleted: true,
      };

      break;
    }
    case types.admin.GET_ALL_HOTSPOTS_SUCCESS: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          specific_location: action.payload,
        },
      };

      break;
    }
    case types.admin.GET_ALL_DEPARTMENTS_SUCCESS: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: action.payload,
        },
      };

      break;
    }
    case types.admin.GET_ALL_EMPLOYEES_SUCCESS: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: action.payload,
        },
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
