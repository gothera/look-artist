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
  phone: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}
