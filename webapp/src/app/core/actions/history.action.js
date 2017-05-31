import types from '../types'

import getApiUrl from "."
import { CALL_API } from "redux-api-middleware"

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

export function updateTable(origin) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/search_delivery_by_source/${origin}`,
      method: "GET",
      credentials: "include",
      types: [
        types.history.UPDATE_TABLE_REQUEST,
        types.history.UPDATE_TABLE_SUCCESS,
        types.history.UPDATE_TABLE_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  };
}
