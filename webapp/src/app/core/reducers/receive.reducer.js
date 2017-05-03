import React from 'react'
import CheckListIcon from 'material-ui/svg-icons/action/info'
import CheckedItem from 'material-ui/svg-icons/action/check-circle'

import types from "../types"

const initialState = {
  items: {
    data: [
      {title: 'Caixa de pincéis: preto', check: false, icon: <CheckListIcon />},
      {title: 'Caixa de pincéis: vermelho', check: false, icon: <CheckListIcon />},
      {title: 'Caixa de pincéis: verde', check: false, icon: <CheckListIcon />},
      {title: 'Apagador de quadro branco', check: false, icon: <CheckListIcon />}
    ],
    notChecked: [],
    hasChecked: false,
  },
  dialog: false,
  accessKey: Math.floor(1000 + Math.random() * 9000),
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
    default: {
      break;
    }
  }
  return state;
};
