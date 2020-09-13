import { addArrayToDictByProp } from '../../utils/global';
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
        appointmentIDs: {
          ...state.appointmentIDs,
          [action.payload.date]: action.payload.appointments.map(
            (appointment) => appointment.id,
          ),
        },
        local: {
          ...addArrayToDictByProp(state.local, action.payload.appointments),
        },

        fetching: false,
      };
    }

    default:
      return state;
  }
}

export default notificationReducer;
