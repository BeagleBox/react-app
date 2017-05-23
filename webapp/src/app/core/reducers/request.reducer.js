import types from "../types"

const initialState = {
  isSamePlace: false,
  isDeleted: false,
  isCreated: false,
  location: {
    origin: '',
    destination: '',
  },
  delivery: {},
  delivery_items: [],
  loadItems: [],
  dialog: false,
  accessKey: '',
  button: false,
};

const addLoadItem = (state, {item}) => {
  const items = state.loadItems;
  items.push(item);

  return items;
};

const deleteLoadItem = (state, {item}) => {
  const items = state.loadItems;
  const index = items.indexOf(item);

  if (index > -1) {
    items.splice(index, 1);
  }

  return items;
};

export default function request(state=initialState, action) {
  switch (action.type) {
    case types.request.REQUEST_CAR: {
      state = {
        ...state,
        isSamePlace: true,
      };

      break;
    }
    case types.request.SELECT_ORIGIN_LOCATION: {
      state = {
        ...state,
        location: {
          ...state.location,
          origin: action.location,
        },
      };

      break;
    }
    case types.request.SELECT_DESTINATION_LOCATION: {
      state = {
        ...state,
        location: {
          ...state.location,
          destination: action.location,
        },
      };

      break;
    }
    case types.request.ADD_LOAD_ITEM: {
      state = {
        ...state,
        loadItems: addLoadItem(state, action),
      };

      break;
    }
    case types.request.GET_ALL_ITEMS_SUCCESS: {
      state = {
        ...state,
        delivery_items: action.payload,
      };

      break;
    }
    case types.request.DELETE_LOAD_ITEM: {
      state = {
        ...state,
        loadItems: deleteLoadItem(state, action),
      };

      break;
    }
    case types.request.CHANGE_DELETED_VALUE: {
      state = {
        ...state,
        isDeleted: action.deleted,
      };

      break;
    }
    case types.request.SHOW_DIALOG_KEY: {
      state = {
        ...state,
        dialog: action.open,
      };

      break;
    }
    case types.request.GENERATE_KEY: {
      state = {
        ...state,
        accessKey: action.key,
      };

      break;
    }
    case types.request.DISABLE_REQUEST_BUTTON: {
      state = {
        ...state,
        button: action.disable,
      };

      break;
    }
    case types.request.CREATE_DELIVERY_SUCCESS: {
      state = {
        ...state,
        delivery: action.payload,
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
