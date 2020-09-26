import { Currency } from './enums';

export interface ImagePickerResponse {
  path: string;
  mime: string;
  width: number;
  height: number;
  filename: string;
}

export interface PickerItem {
  label: string;
  value: string;
}

export interface OfferedService {
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
  id: number;
  currency: Currency;
}

export enum NotificationType {
  NewAppointment,
  CancelledAppointment,
  Review,
}

export enum AppointmentType {
  Free,
  Reserved,
}

export interface Notification {
  id: number;
  extra: any;
  type: NotificationType;
  date: string;
}

export interface ArtistResponseApi {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  phone: string;
  bio: string;
  offeredServices: OfferedService[];
  profilePicture: string;
  programEntries: ArtistProgramEntry[];
}

export interface Appointment {
  id?: number;
  artistId?: number;
  clientId?: number;
  serviceId?: number;
  clientName?: string;
  photo?: string;
  serviceName?: string;
  startingTime: string;
  endingTime: string;
  cost?: number;
  currency: Currency;
  type: AppointmentType;
  date: string;
}

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

export interface ArtistProgramEntry {
  date: string;
  startTime: string;
  endTime: string;
}
