import types from '../types'

export function showAlertDialog(open) {
  return {
    open,
    type: types.receive.SHOW_ALERT_DIALOG,
  };
}

export function checkItem(index, check) {
  return {
    index,
    check,
    type: types.receive.CHECK_ITEM,
  };
}

export function getNotCheckedList() {
  return {
    type: types.receive.GET_NOT_CHECKED_LIST,
  };
}

export function changeChecked() {
  return {
    type: types.receive.CHANGE_CHECKED,
  }
}
