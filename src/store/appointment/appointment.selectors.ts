import { createSelector } from 'reselect';
import { StoreState } from '../store.types';

export const selectAppointmentsPerDays = (state: StoreState) =>
  state.appointment.appointmentIDs;

export const selectLocalAppointments = (state: StoreState) =>
  state.appointment.local;

/**
 * @returns string[] ids for all appointments in a day
 * @param date
 */
export const selectAppointmentsIdsPerDay = (date: string) =>
  createSelector([selectAppointmentsPerDays], (appointmentsPerDays) => {
    return appointmentsPerDays[date] ? appointmentsPerDays[date] : [];
  });

/**
 * @return `Appointment` object
 * @param idStr id of the appointment as string
 */
export const selectAppointmentById = (idStr: string) =>
  createSelector(
    [selectLocalAppointments],
    (appointments) => appointments[idStr],
  );
