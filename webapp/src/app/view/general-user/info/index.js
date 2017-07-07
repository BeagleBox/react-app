import { connect } from "react-redux"
import GeneralInformationComponent from "./info"

import * as actions from '../../../core/actions/info.action'

const stateToProps = (state) => {
  return {
    status: state.info.status,
    actualStep: state.info.actualStep,
    totalStep: state.info.totalStep,
    statusDelivery: state.info.statusDelivery,
    origin: state.info.origin,
    destination: state.info.destination,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    doUpdateBatteryStatus: () => {
      dispatch(actions.updateBatteryStatus());
    },
    doGetCurrentDelivery: () => {
      dispatch(actions.getCurrentDelivery());
    }
  }
};

const GeneralInformation = connect(stateToProps, dispatchToProps)(GeneralInformationComponent);

export default GeneralInformation;
