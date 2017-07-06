import { connect } from 'react-redux'
import SameLocationChecklistComponent from './request-same-location-checklist'

import * as actions from '../../../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    items: state.request.loadItems,
    isDeleted: state.request.isDeleted,
    requestButton: state.request.button,
    delivery: state.request.delivery,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doGetItems: () => {
      dispatch(actions.getItems());
    },
    doAddNewItem: (item) => {
      dispatch(actions.addNewLoadItem(item));
    },
    doSaveItem: (item, delivery_id) => {
      dispatch(actions.saveItem(item, delivery_id));
    },
    doDeleteItem: (item) => {
      dispatch(actions.deleteLoadItem(item));
    },
    doRemoveItem: (item_id) => {
      dispatch(actions.removeItem(item_id));
    },
    doChangeDeleted: (deleted) => {
      dispatch(actions.changeDeleted(deleted));
    },
  }
};

const SameLocationChecklist = connect(stateToProps, dispatchToProps)(SameLocationChecklistComponent);

export default SameLocationChecklist;
