import types from "../types"

const initialState = {
  departments: {
    data: [],
    specific_location: [],
    specific_recipients: [],
  },
  employees: { data: [] },
  operation_type: '',
  to_modify: '',
  created: false,
  edited: false,
  deleted: false,
  dialog: {
    create_departments: false,
    create_employees: false,
  }
};

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
    case types.admin.ADD_NEW_DEPARTMENT_SUCCESS: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: action.payload,
        },
        created: true,
      };

      break;
    }
    case types.admin.EDIT_DEPARTMENT_SUCCESS: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: action.payload,
        },
        edited: true,
      };

      break;
    }
    case types.admin.DELETE_DEPARTMENT_SUCCESS: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: action.payload,
        },
        deleted: true,
      };

      break;
    }
    case types.admin.ADD_NEW_EMPLOYEE_SUCCESS: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: action.payload,
        },
        created: true,
      };

      break;
    }
    case types.admin.EDIT_EMPLOYEE_SUCCESS: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: action.payload,
        },
        edited: true,
      };

      break;
    }
    case types.admin.DELETE_EMPLOYEE_SUCCESS: {
      state = {
        ...state,
        employees: {
          ...state.employees,
          data: action.payload,
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
    case types.admin.GET_SPECIFIC_RECIPIENTS_SUCCESS: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          specific_recipients: action.payload,
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
