import types from "../types"

import getApiUrl from "."

import { CALL_API } from "redux-api-middleware"

export function acquireAuthToken(email, password) {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/login`,
      method: "POST",
      // TODO: Remove credentials key. it include cookies
      credentials: "include",
      types: [
        types.authToken.ACQUIRE_AUTH_TOKEN_REQUEST,
        types.authToken.ACQUIRE_AUTH_TOKEN_SUCCESS,
        types.authToken.ACQUIRE_AUTH_TOKEN_FAILURE
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
