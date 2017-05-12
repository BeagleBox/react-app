import history from './history.type'
import receive from './receive.type'
import request from './request.type'
import admin from './admin.type'
import auth from './acquire-auth-token.type'

function combineTypes(typeArray) {
  return Object.assign({}, ...typeArray);
}

const types = combineTypes([
  history,
  receive,
  request,
  admin,
  auth,
]);

export default types;
