import types from "../types"

const initialState = {
  items: {
    data: [
      {id: 1, date: '03-20-2017', origin: 'Secretaria', destiny: 'Sala I1', Checklist: []},
      {id: 2, date: '03-25-2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: []},
      {id: 3, date: '03-30-2017', origin: 'Secretaria', destiny: 'Biblioteca', Checklist: []},
      {id: 4, date: '04-05-2017', origin: 'Secretaria', destiny: 'Enfermaria', Checklist: []},
      {id: 5, date: '04-10-2017', origin: 'Secretaria', destiny: 'Sala I8', Checklist: []},
      {id: 6, date: '04-15-2017', origin: 'Secretaria', destiny: 'Sala I6', Checklist: []},
      {id: 7, date: '04-20-2017', origin: 'Secretaria', destiny: 'Sala I2', Checklist: []},
      {id: 8, date: '04-25-2017', origin: 'Secretaria', destiny: 'Enfermaria', Checklist: []}
    ]
  },
  table: {
    data: [],
  },
  fromDate: new Date(+new Date() - 10 * 24 * 60 * 60 * 1000),
  toDate: new Date(),
};

const updateTableData = (state) => {
  const items = state.items.data;
  var date = undefined;
  var result = [];

  for(var i = 0; i < items.length; i++) {
    date = new Date(items[i].date).toISOString()

    if(date >= state.fromDate.toISOString() && date <= state.toDate.toISOString()) {
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
    case types.history.UPDATE_TABLE: {
      state = {
        ...state,
        table: {
          ...state.table,
          data: updateTableData(state),
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
