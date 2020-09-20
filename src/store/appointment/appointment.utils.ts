import { AppointmentResponse } from '../../services/api/api.types';
import { Appointment, AppointmentType } from '../../types/globalTypes';

/**
 * Normalize appointment from server
 * @param appointmentResponse
 */
export const normalizeAppointment = (
  appointmentResponse: AppointmentResponse,
) => {
  const normalizedAppointment: Appointment = {
    id: appointmentResponse.id,
    artistId: appointmentResponse.artistId,
    clientId: appointmentResponse.clientId,
    serviceId: appointmentResponse.serviceId,
    clientName: appointmentResponse.clientName,
    photo: appointmentResponse.photo,
    serviceName: appointmentResponse.serviceName,
    date: appointmentResponse.date,
    startingTime: appointmentResponse.startingTime.substring(0, 5), // '20:00:00' to '20:00'
    endingTime: appointmentResponse.endingTime.substring(0, 5),
    type:
      appointmentResponse.type === 'Free'
        ? AppointmentType.Free
        : AppointmentType.Reserved,
  };
  return normalizedAppointment;
};

/**
 * Normalize `Appointment[]` from server
 * @param appointmentsResponse
 */
export const normalizeAppointments = (
  appointmentsResponse: AppointmentResponse[],
) => {
  const normalizedAppointments: Appointment[] = [];
  appointmentsResponse.forEach((appointmentResponse) =>
    normalizedAppointments.push(normalizeAppointment(appointmentResponse)),
  );
  return normalizedAppointments;
};
