import types from "../types"

import getApiUrl from "."

import { CALL_API } from "redux-api-middleware"

export function logIn(email, password) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/login`,
      method: "POST",
      // TODO: Remove credentials key. it include cookies
      credentials: "include",
      types: [
        types.authToken.LOG_IN_REQUEST,
        types.authToken.LOG_IN_SUCCESS,
        types.authToken.LOG_IN_FAILURE
      ],
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        email, password
      })
    }
  };
}
