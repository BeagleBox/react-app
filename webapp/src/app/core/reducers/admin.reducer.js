import types from "../types"

const initialState = {
  departments: {
    data: [
      {id: 1, name: 'Secretaria'},
      {id: 2, name: 'Biblioteca'},
      {id: 3, name: 'Enfermaria'},
    ],
  },
  operation_type: '',
  to_modify: {},
  created: false,
  edited: false,
  deleted: false,
  dialog: {
    create_departments: false,
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
    items.push({id, name: department});
  }

  return items;
}

const updateDepartmentData = (state, {id, department}) => {
  const items = state.departments.data;

  for(var i = 0; i < items.length; i++) {
    if(id === items[i].id) {
      items[i].name = department;
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
        operation_type: action.operation,
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
    case types.admin.CHANGE_DEPARTMENT_CREATED: {
      state = {
        ...state,
        created: false,
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
    case types.admin.CHANGE_DEPARTMENT_EDITED: {
      state = {
        ...state,
        edited: false,
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
    case types.admin.CHANGE_DEPARTMENT_DELETED: {
      state = {
        ...state,
        deleted: false,
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
