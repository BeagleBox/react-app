import types from '../types'

import getApiUrl from "."
import { CALL_API } from "redux-api-middleware"

export function requestCar() {
  return {
    type: types.request.REQUEST_CAR,
  }
}

export function selectOriginLocation(location) {
  return {
    location,
    type: types.request.SELECT_ORIGIN_LOCATION,
  }
}

export function selectDestinationLocation(location) {
  return {
    location,
    type: types.request.SELECT_DESTINATION_LOCATION,
  }
}

export function addNewLoadItem(item) {
  return {
    item,
    type: types.request.ADD_LOAD_ITEM,
  }
}

export function getItems() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/items`,
      method: "GET",
      credentials: "include",
      types: [
        types.request.GET_ALL_ITEMS_REQUEST,
        types.request.GET_ALL_ITEMS_SUCCESS,
        types.request.GET_ALL_ITEMS_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }
  };
}

export function deleteLoadItem(item) {
  return {
    item,
    type: types.request.DELETE_LOAD_ITEM,
  }
}

export function changeDeleted(deleted) {
  return {
    deleted,
    type: types.request.CHANGE_DELETED_VALUE,
  }
}

export function showDialogKey(open) {
  return {
    open,
    type: types.request.SHOW_DIALOG_KEY,
  }
}

export function generateKey(key) {
  return {
    key,
    type: types.request.GENERATE_KEY,
  }
}

export function disableRequestButton(disable) {
  return {
    disable,
    type: types.request.DISABLE_REQUEST_BUTTON,
  }
}

export function createDelivery(user, origin, destination, items) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/deliveries`,
      method: "POST",
      credentials: "include",
      types: [
        types.request.CREATE_DELIVERY_REQUEST,
        types.request.CREATE_DELIVERY_SUCCESS,
        types.request.CREATE_DELIVERY_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        status: "Em trânsito",
        source_id: origin,
        sender_id: user,
        destination_id: destination,
        items_names: items,
      })
    }
  };
}
