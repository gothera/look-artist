import { Appointment } from '../../types/globalTypes';
import { getRequest, postRequest } from './apiRequest';

export const fetchAppointmentsOfDay = (
  artistId: number,
  date: string,
): Promise<Appointment[]> => {
  const url = `artist/schedule/${artistId}?date=${date}`;
  return getRequest<Appointment[]>(url);
};

export const addAppointment = (
  appointment: Appointment,
): Promise<Appointment[]> => {
  const url = `artist/appointment/`;
  return postRequest<Appointment[]>(url, appointment);
};
