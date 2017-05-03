import login from './login.type'
import history from './history.type'
import receive from './receive.type'

function combineTypes(typeArray) {
  return Object.assign({}, ...typeArray);
}

const types = combineTypes([
  login,
  history,
  receive,
]);

export default types;
