import types from '../types'

import getApiUrl from "."
import { CALL_API } from "redux-api-middleware"

export function updateBatteryStatus() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/monitor/`,
      method: "GET",
      credentials: "include",
      types: [
        types.info.UPDATE_BATTERY_REQUEST,
        types.info.UPDATE_BATTERY_SUCCESS,
        types.info.UPDATE_BATTERY_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}

export function getCurrentDelivery() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/get_current_delivery`,
      method: "GET",
      credentials: "include",
      types: [
        types.info.GET_CURRENT_DELIVERY_REQUEST,
        types.info.GET_CURRENT_DELIVERY_SUCCESS,
        types.info.GET_CURRENT_DELIVERY_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  }
}
