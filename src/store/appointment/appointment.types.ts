import { Appointment } from '../../types/globalTypes';
import * as appointmentConstants from './appointment.constants';
export interface InvalidateStoreAction {
  type: typeof appointmentConstants.INVALIDATE_STORE;
}

export interface fetchAppointmentsSuccess {
  type: typeof appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_SUCCESS;
  payload: { appointments: Appointment[]; date: string };
}

export interface fetchAppointmentsFailure {
  type: typeof appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_FAILURE;
  payload: { error: string };
}

export interface fetchAppointmentsRequest {
  type: typeof appointmentConstants.FETCH_APPOINTMENTS_OF_DAY_REQUEST;
}

export type AppointmentAction =
  | InvalidateStoreAction
  | fetchAppointmentsSuccess
  | fetchAppointmentsFailure
  | fetchAppointmentsRequest;
