import { postRequest } from './apiRequest';
import { LoginResponse, SignupResponse } from './api.types';

export const login = (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const url = 'auth/login';
  const data = {
    email: email,
    password: password,
  };
  return postRequest<LoginResponse>(url, data);
};

export const signUp = (
  email: string,
  password: string,
): Promise<SignupResponse> => {
  const url = 'auth/signup';
  const data = {
    type: 'Artist',
    email: email,
    password: password,
  };
  return postRequest<SignupResponse>(url, data);
};
