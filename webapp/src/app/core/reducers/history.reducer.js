import types from "../types"

const initialState = {
  items: { data: [] },
  table: { data: [] },
  fromDate: new Date(+new Date() - 10 * 24 * 60 * 60 * 1000),
  toDate: new Date(),
};

const updateTableData = (state, action) => {
  const items = action.payload;
  var date = undefined;
  var result = [];

  for(var i = 0; i < items.length; i++) {
    date = new Date(items[i].updated_at);
    console.log(date)
    if(date >= state.fromDate && date <= state.toDate) {
      result.push(items[i])
    }
  }

  return result;
};

export default function history(state=initialState, action) {
  switch (action.type) {
    case types.history.GET_ALL_HISTORY: {
      state = {
        ...state,
        items: {
          ...state.items,
        }
      };

      break;
    }
    case types.history.UPDATE_FROM_DATE: {
      state = {
        ...state,
        fromDate: action.fromDate,
      };

      break;
    }
    case types.history.UPDATE_TO_DATE: {
      state = {
        ...state,
        toDate: action.toDate,
      };

      break;
    }
    case types.history.UPDATE_TABLE_SUCCESS: {
      state = {
        ...state,
        table: {
          ...state.table,
          data: updateTableData(state, action),
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
