import login from './login.type'
import history from './history.type'
import receive from './receive.type'
import request from './request.type'

function combineTypes(typeArray) {
  return Object.assign({}, ...typeArray);
}

const types = combineTypes([
  login,
  history,
  receive,
  request,
]);

export default types;
