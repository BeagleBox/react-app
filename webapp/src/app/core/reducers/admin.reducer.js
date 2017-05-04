import types from "../types"

const initialState = {
  departments: {
    data: [
    {id: 1, name: 'Secretaria'},
    {id: 2, name: 'Biblioteca'},
    {id: 3, name: 'Enfermaria'},
  ],
    created: false,
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
    default: {
      break;
    }
  }
  return state;
};
