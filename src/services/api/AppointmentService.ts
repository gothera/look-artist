import { Appointment } from '../../types/globalTypes';
import { getRequest } from './apiRequest';

export const fetchAppointmentsOfDay = (
  artistId: number,
  date: string,
): Promise<Appointment[]> => {
  const url = `schedule/${artistId}?date=${date}`;
  return getRequest<Appointment[]>(url);
};
