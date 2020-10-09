import { Appointment } from '../../types/globalTypes';
import { AppointmentResponse } from './api.types';
import { deleteRequest, getRequest, postRequest } from './apiRequest';
import { AxiosRequestConfig } from 'axios';

export const fetchAppointmentsOfDay = (
  artistId: number,
  date: string,
  token?: string,
): Promise<AppointmentResponse[]> => {
  const url = `artist/schedule/${artistId}?date=${date}`;

  const extraConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return getRequest<AppointmentResponse[]>(url, { ...(token && extraConfig) });
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
