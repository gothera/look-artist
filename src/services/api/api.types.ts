import { AppointmentType, Notification } from '../../types/globalTypes';
import { DaysAbbreviation, Currency } from '../../types/enums';

export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  bio: string;
  email: string;
  password: string;
  phone: string;
  type: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

export interface SignupResponse {
  id: number;
  user: UserResponse;
  offeredServices: any[];
  profilePicture: string;
  category: string;
}

export interface SetupBody {
  firstName: string;
  lastName: string;
  category: string;
  phone?: string;
  name: string; // service name
  description: string;
  price: number;
  duration: number;
  birthDate: string; // ISO string
}

export interface FetchNotificationsResponse {
  totalPages: number;
  content: Notification[];
}

export interface AppointmentResponse {
  id?: number;
  artistId?: number;
  clientId?: number;
  serviceId?: number;
  clientName?: string;
  photo?: string;
  serviceName?: string;
  startingTime: string;
  endingTime: string;
  type: AppointmentType;
  currency: string;
  cost: number;
  date: string;
}

export interface ProgramDefaultElement {
  startTime: string;
  endTime: string;
  day: DaysAbbreviation; // eg 0 = Monday
  artistId: number;
}

export interface ProgramSpecificElement {
  date: string;
  startTime: string;
  endTime: string;
}

export interface UpdateArtistApi {
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  bio: string;
  phone: string;
}

export interface AddOfferedServiceApi {
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
  currency: Currency;
}
