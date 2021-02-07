import {
  AppointmentType,
  ArtistData,
  Notification,
} from '../../types/globalTypes';
import { DaysAbbreviation, Currency, Category } from '../../types/enums';

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
  category: Category;
}

export interface SetupBody {
  firstName: string;
  lastName: string;
  category: Category;
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
  category: Category;
  bio: string;
  phone: string;
}

export interface AddOfferedServiceApi {
  name: string;
  category: Category;
  description: string;
  price: number;
  duration: number;
  currency: Currency;
}

export interface ReviewApi {
  id: number;
  artistId: number;
  clientId: number;
  name: string;
  avatar: string;
  rating: number;
  description: string;
  date: string;
}

export interface ArtistReviewsSummarization {
  reviewsAverage: number;
  reviewsCount: number;
  numberOf1s: number;
  numberOf2s: number;
  numberOf3s: number;
  numberOf4s: number;
  numberOf5s: number;
}

export interface ArtistReviewsResponse {
  content: ReviewApi[];
  last: boolean;
  number: number;
  summarization: ArtistReviewsSummarization;
}

export interface ArtistPostsResponse {
  content: PostApi[];
  last: boolean;
  number: number;
}

export interface PostApi {
  id: number;
  description: string;
  pictures: string[];
  artistId: number;
  saves: number;
  isSaved: boolean;
  artistData: ArtistData;
}

export interface ReviewApi {
  id: number;
  artistId: number;
  clientId: number;
  name: string;
  avatar: string;
  rating: number;
  description: string;
  date: string;
}
