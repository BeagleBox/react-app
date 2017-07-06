import types from '../types'

import getApiUrl from "."
import { CALL_API } from "redux-api-middleware"

export function showAlertDialog(open) {
  return {
    open,
    type: types.receive.SHOW_ALERT_DIALOG,
  };
}

export function checkItem(index, check) {
  return {
    index,
    check,
    type: types.receive.CHECK_ITEM,
  };
}

export function getNotCheckedList() {
  return {
    type: types.receive.GET_NOT_CHECKED_LIST,
  };
}

export function changeChecked() {
  return {
    type: types.receive.CHANGE_CHECKED,
  }
}

export function sendCar(list) {
  return {
    list,
    type: types.receive.SEND_CAR,
  }
}

export function selectAllItems(checked) {
  return {
    checked,
    type: types.receive.SELECT_ALL_ITEMS,
  }
}

export function getDeliveries() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/deliveries`,
      method: "GET",
      credentials: "include",
      types: [
        types.receive.GET_DELIVERIES_REQUEST,
        types.receive.GET_DELIVERIES_SUCCESS,
        types.receive.GET_DELIVERIES_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}

export function allowReceive(allow) {
  return {
    allow,
    type: types.receive.ALLOW_RECEIVE,
  }
}
