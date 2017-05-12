import types from "../types"
import { hashHistory } from 'react-router'

const initialState = {
  user: {},
  token: "",
  error: false,
};

export default function auth(state=initialState, action) {
  switch (action.type) {
    case types.authToken.LOG_IN_SUCCESS: {
      let payload = action.payload;

      state = {
        ...state,
        user: payload.current_employee,
        token: payload.result,
        error: false,
      };

      hashHistory.push('/informacoes-gerais')

      break;
    }
    case types.authToken.LOG_IN_FAILURE: {
      let payload = action.payload;

      state = {
        ...state,
        error: true,
      };

      break;
    }
    default: {

      break;
    }
  }

  return state;
}
