import types from '../types'

export function getAllHistory() {
  return {
    type: types.history.GET_ALL_HISTORY,
  };
}

export function updateFromDate(fromDate) {
  return {
    fromDate,
    type: types.history.UPDATE_FROM_DATE,
  };
}

export function updateToDate(toDate) {
  return {
    toDate,
    type: types.history.UPDATE_TO_DATE,
  };
}

export function updateTable() {
  return {
    type: types.history.UPDATE_TABLE,
  };
}
