import types from "../types"
import { hashHistory } from 'react-router'

const initialState = {
  user: {},
  token: "",
  error: false,
};

export default function auth(state=initialState, action) {
  switch (action.type) {
    case types.authToken.ACQUIRE_AUTH_TOKEN: {

      state = {
        ...state,
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('jwt'),
      };

      localStorage.setItem('jwt', state.token);
      localStorage.setItem('user', JSON.stringify(state.user));

      break;
    }
    case types.authToken.LOG_IN_SUCCESS: {
      let payload = action.payload;

      state = {
        ...state,
        user: payload.current_employee,
        token: payload.result,
        error: false,
      };

      localStorage.setItem('jwt', state.token);
      localStorage.setItem('user', JSON.stringify(state.user));
      hashHistory.push('/informacoes-gerais');

      break;
    }
    case types.authToken.LOG_IN_FAILURE: {
      state = {
        ...state,
        error: true,
      };

      break;
    }
    case types.authToken.LOG_OUT: {
      localStorage.setItem('token', '');
      localStorage.setItem('user', '');

      state = {
        ...state,
        user: {},
        token: "",
      };

      hashHistory.push('/inicio')

      break;
    }
    default: {

      break;
    }
  }

  return state;
}
