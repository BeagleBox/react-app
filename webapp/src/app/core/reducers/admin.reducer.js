import types from "../types"

const initialState = {
  departments: {
    data: [
      {id: 1, name: 'Secretaria'},
      {id: 2, name: 'Biblioteca'},
      {id: 3, name: 'Enfermaria'},
    ],
    operation_type: '',
    to_modify: {},
    created: false,
    edited: false,
    deleted: false,
  },
  dialog: {
    create_departments: false,
  }
};

const addNewDepartment = (state, {department}) => {
  const items = state.departments.data;
  var id = items.length;
  var found = false;

  for(var i = 0; i < items.length; i++) {
    if(department === items[i].department) {
      found = true;
      break;
    }
  }

  if(!found) {
    items.push({id: id+1, name: department});
  }

  return items;
}

const updateDepartmentData = (state, {id, department}) => {
  const items = state.departments.data;
  var found = false;

  for(var i = 0; i < items.length; i++) {
    if(id === items[i].id) {
      items[i].name = department;
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
    case types.admin.DEFINE_OPERATION_TYPE: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          operation_type: action.operation,
        }
      };

      break;
    }
    case types.admin.ADD_NEW_DEPARTMENT: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: addNewDepartment(state, action),
          created: true,
        }
      };

      break;
    }
    case types.admin.CHANGE_DEPARTMENT_CREATED: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          created: false,
        }
      };

      break;
    }
    case types.admin.SELECT_ITEM_TO_MODIFY: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          to_modify: action.item,
        }
      };

      break;
    }
    case types.admin.EDIT_DEPARTMENT: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          data: updateDepartmentData(state, action),
          edited: true,
        }
      };

      break;
    }
    case types.admin.CHANGE_DEPARTMENT_EDITED: {
      state = {
        ...state,
        departments: {
          ...state.departments,
          edited: false,
        }
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
