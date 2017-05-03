import types from "../types"

const initialState = {
  isSamePlace: false,
  location: {
    data: ['Biblioteca', 'Enfermaria', 'Sala I2', 'Sala I6', 'Secretaria'],
    origin: '',
    destination: '',
  },
  loadItems: [],
  dialog: false,
  accessKey: '',
};

const getSelectedLocation = (state, {index}) => {
  const location = state.location.data;
  var selected = location[index];

  return selected;
};

const addLoadItem = (state, {item}) => {
  const items = state.loadItems;
  items.push(item);

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
          origin: getSelectedLocation(state, action),
        },
      };

      break;
    }
    case types.request.SELECT_DESTINATION_LOCATION: {
      state = {
        ...state,
        location: {
          ...state.location,
          destination: getSelectedLocation(state, action),
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
    default: {
      break;
    }
  }
  return state;
};
