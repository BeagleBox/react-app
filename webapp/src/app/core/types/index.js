import login from './login.type'

function combineTypes(typeArray) {
  return Object.assign({}, ...typeArray);
}

const types = combineTypes([
  login,
]);

export default types;
