import { Appointment } from '../../types/globalTypes';
import { getRequest, postRequest } from './apiRequest';
import { AppointmentResponse } from './api.types';

export const fetchAppointmentsOfDay = (
  artistId: number,
  date: string,
): Promise<AppointmentResponse[]> => {
  const url = `artist/schedule/${artistId}?date=${date}`;
  return getRequest<AppointmentResponse[]>(url);
};

export const addAppointment = (
  appointment: Appointment,
): Promise<Appointment[]> => {
  const url = `artist/appointment/`;
  return postRequest<Appointment[]>(url, appointment);
};
