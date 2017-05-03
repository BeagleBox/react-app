import login from './login.type'
import history from './history.type'

function combineTypes(typeArray) {
  return Object.assign({}, ...typeArray);
}

const types = combineTypes([
  login,
  history,
]);

export default types;
