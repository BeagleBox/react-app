import types from '../types'

export function login({ email, password }) {
  return {
    email,
    password,
    type: types.login.USER_LOGIN,
  };
}
