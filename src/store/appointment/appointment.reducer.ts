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
    case appointmentConstants.ADD_APPOINTMENT_REQUEST:
    case appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_REQUEST: {
      return {
        ...state,
        fetching: true,
      };
    }
    case appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_SUCCESS: {
      action.payload.appointments.forEach((appointment) => {
        if (appointment.id) {
          state.local[appointment.id.toString()] = appointment;
        } else {
          state.local[
            `${action.payload.date}#${appointment.startingTime}`
          ] = appointment;
        }
      });
      return {
        ...state,
        appointmentIDs: {
          ...state.appointmentIDs,
          [action.payload
            .date]: action.payload.appointments.map((appointment) =>
            appointment.id
              ? appointment.id.toString()
              : `${action.payload.date}#${appointment.startingTime}`,
          ),
        },

        local: {
          ...state.local,
        },

        fetching: false,
      };
    }

    default:
      return state;
  }
}

export default notificationReducer;
