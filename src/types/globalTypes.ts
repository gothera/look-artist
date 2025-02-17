import { PostApi, ReviewApi } from '../services/api/api.types';
import { Category, Currency } from './enums';

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
  category: Category;
  description: string;
  price: number;
  duration: number;
  id: number;
  currency: Currency;
}

export enum NotificationType {
  CreateAppointment = 'CREATE_APPOINTMENT',
  CancelAppointment = 'CANCEL_APPOINTMENT',
  AddReview = 'ADD_REVIEW',
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

export interface ArtistProgramEntry {
  date: string;
  startTime: string;
  endTime: string;
}

export interface Post extends PostApi {}

export interface DefaultProgramEntry {
  startTime: string;
  endTime: string;
  day: number;
}

export interface ArtistResponseApi {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  category: Category;
  phone: string;
  bio: string;
  offeredServices: OfferedService[];
  scheduledDates: string[];
  profilePicture: string;
  saves: number;
  appointmentsCount: number;
  rating: number;
  programEntries: ArtistProgramEntry[];
  birthDate: string;
  hasSetup: boolean;
  defaultProgram: DefaultProgramEntry[];
  address: string;
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
// nu am pus toate prorietatile unei pagini
export interface Page<T> {
  content: T[];
  last: boolean;
  numberOfElements: number;
  size: number;
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

export type RequestStatus = 'loading' | 'success' | 'failure';

export interface Review extends ReviewApi {}

export interface SelectedDateCalendar {
  [date: string]: {
    selected: boolean;
    selectedColor: string;
  };
}

export interface ArtistData {
  artistPicture: string;
  rating: number;
  name: string;
  reviewsCount: number;
  category: Category;
}
