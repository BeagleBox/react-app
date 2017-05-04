import types from '../types'

export function requestCar() {
  return {
    type: types.request.REQUEST_CAR,
  }
}

export function selectOriginLocation(index) {
  return {
    index,
    type: types.request.SELECT_ORIGIN_LOCATION,
  }
}

export function selectDestinationLocation(index) {
  return {
    index,
    type: types.request.SELECT_DESTINATION_LOCATION,
  }
}

export function addNewLoadItem(item) {
  return {
    item,
    type: types.request.ADD_LOAD_ITEM,
  }
}

export function showDialogKey(open) {
  return {
    open,
    type: types.request.SHOW_DIALOG_KEY,
  }
}

export function generateKey(key) {
  return {
    key,
    type: types.request.GENERATE_KEY,
  }
}
