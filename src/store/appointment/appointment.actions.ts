import * as AppointmentService from '../../services/api/AppointmentService';
import { Appointment } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as appointmentConstants from './appointment.constants';
import * as notificationTypes from './appointment.types';

const fetchAppointmentsOfDayRequest = (): notificationTypes.fetchAppointmentsRequest => {
  return {
    type: appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_REQUEST,
  };
};

const fetchAppointmentsOfDaySuccess = (
  appointments: Appointment[],
  date: string,
): notificationTypes.fetchAppointmentsSuccess => {
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
): notificationTypes.fetchAppointmentsFailure => {
  return {
    type: appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchAppointmentOfDay = (
  artistId: number,
  date: string,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    console.log('am ajuns aici');
    // if (getState().notification.fetching || getState().notification.error)
    //   return Promise.resolve();

    dispatch(fetchAppointmentsOfDayRequest());
    return AppointmentService.fetchAppointmentsOfDay(artistId, date)
      .then((response: Appointment[]) => {
        dispatch(fetchAppointmentsOfDaySuccess(response, date));
      })
      .catch((error) => {
        dispatch(fetchAppointmentsOfDayFailure(error));
      });
  };
};
