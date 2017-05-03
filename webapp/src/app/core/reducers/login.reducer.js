import types from "../types"

const initialState = {
  user: {
    name: '',
    email: 'elaine@email.com',
    password: '',
    admin: false,
  }
};

export default function login(state=initialState, action) {
  switch (action.type) {
    case types.login.USER_LOGIN: {
      state = {
        ...state,
        user: {
          ...state.user,
          email: action.email,
          password: action.password,
        }
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
