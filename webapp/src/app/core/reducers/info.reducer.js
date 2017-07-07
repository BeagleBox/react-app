import types from "../types"

const initialState = {
  status: 'Médio',
  actualStep: '',
  totalStep: '',
  statusDelivery: '',
  origin: '',
  destination: '',
};

export default function info(state=initialState, action) {
  switch (action.type) {
    case types.info.UPDATE_BATTERY_SUCCESS: {
      state = {
        ...state,
        status: action.payload.status,
      };

      break;
    }
    case types.info.GET_CURRENT_DELIVERY_SUCCESS: {
      state = {
        ...state,
        actualStep: action.payload[0].current_step,
        totalStep: action.payload[0].total_steps,
        statusDelivery: action.payload[0].status,
        origin: action.payload[0].source.departament_name,
        destination: action.payload[0].destination.departament_name,
      };

      break;
    }
    default: {
      break;
    }
  }
  return state;
};
