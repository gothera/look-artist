import initialState from '../initialState';
import { AppointmentState, TAction } from '../store.types';
import * as appointmentConstants from './appointment.constants';

function getInitialState() {
  return Object.assign({}, initialState.appointment);
}

function notificationReducer(
  state = getInitialState(),
  action: TAction,
): AppointmentState {
  switch (action.type) {
    case appointmentConstants.INVALIDATE_STORE: {
      return getInitialState();
    }
    case appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        fetching: false,
      };
    }
    case appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_REQUEST: {
      return {
        ...state,
        fetching: true,
      };
    }
    case appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_SUCCESS: {
      return {
        ...state,

        local: {
          ...state.local,
          [action.payload.date]: action.payload.appointments,
        },

        fetching: false,
      };
    }

    default:
      return state;
  }
}

export default notificationReducer;
