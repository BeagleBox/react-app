import types from "../types"
import { hashHistory } from 'react-router'

const initialState = {
  user: {},
  token: "",
};

export default function auth(state=initialState, action) {
  switch (action.type) {
    case types.authToken.ACQUIRE_AUTH_TOKEN_SUCCESS: {
      let payload = action.payload;

      state = {
        ...state,
        user: payload.current_employee,
        token: payload.result,
      };

      hashHistory.push('/informacoes-gerais')

      break;
    }
    default: {

      break;
    }
  }

  return state;
}
