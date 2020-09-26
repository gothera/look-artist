import { Appointment } from '../../types/globalTypes';
import { AppointmentResponse } from './api.types';
import { deleteRequest, getRequest, postRequest } from './apiRequest';

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

export const deleteAppointment = (
  appointmentId: string,
): Promise<Appointment[]> => {
  const url = `artist/appointment/${appointmentId}`;

  return deleteRequest<Appointment[]>(url);
};
