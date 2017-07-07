import React from 'react'
import CheckListIcon from 'material-ui/svg-icons/action/info'
import CheckedItem from 'material-ui/svg-icons/action/check-circle'

import types from "../types"

const initialState = {
  items: {
    data: [],
    notChecked: [],
    hasChecked: false,
  },
  delivery: {
    data: [],
  },
  dialog: false,
  allowed: true,
  key_status: '',
};

const checkItem = (state, {index, check}) => {
  const items = state.items.data;

  var selectedItem = items[index];
  var icon = <CheckListIcon />;
  check = !check;

  if(check) {
    icon = <CheckedItem className="check-icon" />;
  }

  selectedItem.title = selectedItem.title;
  selectedItem.check = check;
  selectedItem.icon = icon;

  var result = items;

  return result;
};

const checkAllItems = (state, {checked}) => {
  const items = state.items.data;

  var icon = <CheckListIcon />;

  if(checked) {
    icon = <CheckedItem className="check-icon" />;
  }

  for(var i = 0; i < items.length; i++) {
    items[i].title = items[i].title;
    items[i].check = checked;
    items[i].icon = icon;
  }

  return items;
};

const isNotChecked = (state) => {
  const items = state.items.data;
  let notCheckedItems = [];

  for(var i = 0; i < items.length; i++) {
    if(!items[i].check) {
      notCheckedItems.push(items[i].title)
    }
  }

  return notCheckedItems;
}

const updateLoadList = (state, {list}) => {
  var items = [];

  for(var i = 0; i < list.length; i++) {
    items.push({title: list[i], check: false, icon: <CheckListIcon />})
  }

  return items;
}

export default function receive(state=initialState, action) {
  switch (action.type) {
    case types.receive.SHOW_ALERT_DIALOG: {
      state = {
        ...state,
        dialog: action.open,
      };

      break;
    }
    case types.receive.CHECK_ITEM: {
      state = {
        ...state,
        items: {
          ...state.items,
          data: checkItem(state, action),
          hasChecked: true,
          notChecked: isNotChecked(state),
        }
      };

      break;
    }
    case types.receive.GET_NOT_CHECKED_LIST: {
      state = {
        ...state,
        items: {
          ...state.items,
          notChecked: isNotChecked(state),
        }
      };

      break;
    }
    case types.receive.CHANGE_CHECKED: {
      state = {
        ...state,
        items: {
          ...state.items,
          hasChecked: false,
        }
      };

      break;
    }
    case types.receive.SEND_CAR: {
      state = {
        ...state,
        items: {
          ...state.items,
          data: updateLoadList(state, action),
        }
      };

      break;
    }
    case types.receive.SELECT_ALL_ITEMS: {
      state = {
        ...state,
        items: {
          ...state.items,
          data: checkAllItems(state, action),
          hasChecked: true,
          notChecked: isNotChecked(state),
        }
      };

      break;
    }
    case types.receive.GET_DELIVERIES_SUCCESS: {
      state = {
        ...state,
        delivery: {
          ...state.delivery,
          data: action.payload,
        }
      };

      break;
    }
    case types.receive.ALLOW_RECEIVE: {
      state = {
        ...state,
        allowed: action.allow,
      };

      break;
    }
    case types.receive.SET_KEY_STATUS_SUCCESS: {
      state = {
        ...state,
        key_status: action.payload,
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
