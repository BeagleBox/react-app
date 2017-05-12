import { CALL_API } from "redux-api-middleware"

export default function auth({ getState, dispatch }) {
  return next => action => {
    if (action[CALL_API]) {
      const token = getState().auth.token;

      if (token) {
        action[CALL_API].headers = {
          Authorization: `Bearer ${token}`,
          ...action[CALL_API].headers
        }
      }
    }

    return next(action);
  }
}
