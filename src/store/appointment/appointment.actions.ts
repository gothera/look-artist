import { AppointmentResponse } from '../../services/api/api.types';
import * as AppointmentService from '../../services/api/AppointmentService';
import { Appointment } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as appointmentConstants from './appointment.constants';
import * as appointmentTypes from './appointment.types';
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

export const fetchAppointmentOfDay = (
  date: string,
  token?: string,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    if (getState().notification.fetching) return Promise.resolve();

    const artistId = getState().profile.artistId;

    if (!artistId) {
      return Promise.resolve();
    }

    dispatch(fetchAppointmentsOfDayRequest());
    return AppointmentService.fetchAppointmentsOfDay(artistId, date, token)
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

export const addAppointment = (
  appointment: Appointment,
  onSuccess?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(addAppointmentRequest());
    return AppointmentService.addAppointment(appointment)
      .then((response: Appointment[]) => {
        dispatch(fetchAppointmentsOfDaySuccess(response, appointment.date));
        onSuccess && onSuccess();
      })
      .catch((error) => {
        dispatch(addAppointmentFailure(error));
      });
  };
};

const deleteAppointmentRequest = (): appointmentTypes.deleteAppointmentRequest => {
  return {
    type: appointmentConstants.DELETE_APPOINTMENT_REQUEST,
  };
};

const deleteAppointmentFailure = (
  error: string,
): appointmentTypes.deleteAppointmentFailure => {
  return {
    type: appointmentConstants.DELETE_APPOINTMENT_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteAppointment = (
  appointmentId: string,
  date: string,
  closeModal: () => void,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(deleteAppointmentRequest());
    return AppointmentService.deleteAppointment(appointmentId)
      .then((response: Appointment[]) => {
        dispatch(fetchAppointmentsOfDaySuccess(response, date));
        closeModal();
      })
      .catch((error) => {
        dispatch(deleteAppointmentFailure(error));
      });
  };
};
