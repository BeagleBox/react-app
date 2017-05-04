import { connect } from 'react-redux'
import SameLocationChecklistComponent from './request-same-location-checklist'

import * as actions from '../../../../core/actions/request.action'

const stateToProps = (state) => {
  return {
    items: state.request.loadItems,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doAddNewItem: (item) => {
      dispatch(actions.addNewLoadItem(item));
    }
  }
};

const SameLocationChecklist = connect(stateToProps, dispatchToProps)(SameLocationChecklistComponent);

export default SameLocationChecklist;
