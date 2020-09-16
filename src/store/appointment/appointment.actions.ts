import * as AppointmentService from '../../services/api/AppointmentService';
import { Appointment } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as appointmentConstants from './appointment.constants';
import * as appointmentTypes from './appointment.types';
import { AppointmentResponse } from '../../services/api/api.types';
import { normalizeAppointments } from './appointment.utils';

const fetchAppointmentsOfDayRequest = (): appointmentTypes.fetchAppointmentsRequest => {
  return {
    type: appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_REQUEST,
  };
};

const fetchAppointmentsOfDaySuccess = (
  appointments: Appointment[],
  date: string,
): appointmentTypes.fetchAppointmentsSuccess => {
  return {
    type: appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_SUCCESS,
    payload: {
      appointments,
      date,
    },
  };
};

const fetchAppointmentsOfDayFailure = (
  error: string,
): appointmentTypes.fetchAppointmentsFailure => {
  return {
    type: appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchAppointmentOfDay = (date: string): ThunkResult<void> => {
  return async function (dispatch, getState) {
    console.log('am ajuns aici');
    // if (getState().notification.fetching || getState().notification.error)
    //   return Promise.resolve();

    const artistId = getState().profile.artistId;

    if (!artistId) {
      return Promise.resolve();
    }

    dispatch(fetchAppointmentsOfDayRequest());
    return AppointmentService.fetchAppointmentsOfDay(artistId, date)
      .then((response: AppointmentResponse[]) => {
        const normalizedAppointments = normalizeAppointments(response);
        dispatch(fetchAppointmentsOfDaySuccess(normalizedAppointments, date));
      })
      .catch((error) => {
        dispatch(fetchAppointmentsOfDayFailure(error));
      });
  };
};

const addAppointmentRequest = (): appointmentTypes.addAppointmentRequest => {
  return {
    type: appointmentConstants.ADD_APPOINTMENT_REQUEST,
  };
};

// const addAppointmentSuccess = (
//   appointments: Appointment[],
//   date: string,
// ): appointmentTypes.addAppointmentRequest => {
//   return {
//     type: appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_SUCCESS,
//     payload: {
//       appointments,
//       date,
//     },
//   };
// };

const addAppointmentFailure = (
  error: string,
): appointmentTypes.addAppointmentFailure => {
  return {
    type: appointmentConstants.ADD_APPOINTMENT_FAILURE,
    payload: {
      error,
    },
  };
};

export const addAppointment = (appointment: Appointment): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(fetchAppointmentsOfDayRequest());
    return AppointmentService.addAppointment(appointment)
      .then((response: Appointment[]) => {
        dispatch(fetchAppointmentsOfDaySuccess(response, date));
      })
      .catch((error) => {
        dispatch(fetchAppointmentsOfDayFailure(error));
      });
  };
};
