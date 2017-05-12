import { connect } from 'react-redux'
import SameLocationChecklistComponent from './request-same-location-checklist'

import * as actions from '../../../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    items: state.request.loadItems,
    isDeleted: state.request.isDeleted,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doAddNewItem: (item) => {
      dispatch(actions.addNewLoadItem(item));
    },
    doDeleteItem: (item) => {
      dispatch(actions.deleteLoadItem(item));
    },
    doChangeDeleted: (deleted) => {
      dispatch(actions.changeDeleted(deleted));
    }
  }
};

const SameLocationChecklist = connect(stateToProps, dispatchToProps)(SameLocationChecklistComponent);

export default SameLocationChecklist;
