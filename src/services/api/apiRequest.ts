import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '../../../env.json';
import { store } from '../../store';

const client = axios.create({
  baseURL: API_URL,
});

const listener = () => {
  const state = store.getState();
  if (state.profile.token) {
    client.defaults.headers.common.Authorization =
      'Bearer ' + state.profile.token;
  }
};

store.subscribe(listener);

export function onRequestSuccess<T = any>(response: AxiosResponse<T>) {
  console.log('Request Successful!', response);

  return response.data;
}

export function onRequestError<T = any>(error: AxiosError<T>) {
  console.log('Request Failed!', error);

  //   if (error.response && error.response.status === 401) {
  //     // TODO maybe logout
  //     // store.dispatch(logout());
  //   }

  return Promise.reject(error.response || error.message);
}

export async function getRequest<T = any>(
  url: string,
  config?: AxiosRequestConfig | undefined,
) {
  return client
    .get<T, AxiosResponse<T>>(url, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function postRequest<T = any, D = any>(
  url: string,
  data?: D | undefined,
  config?: AxiosRequestConfig | undefined,
) {
  console.log(url);
  return client
    .post<T, AxiosResponse<T>>(url, data, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function putRequest<T = any, D = any>(
  url: string,
  data?: D | undefined,
  config?: AxiosRequestConfig | undefined,
) {
  return client
    .put<T, AxiosResponse<T>>(url, data, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function deleteRequest<T = any>(
  url: string,
  config?: AxiosRequestConfig | undefined,
) {
  return client
    .delete<T, AxiosResponse<T>>(url, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}

export async function patchRequest<T = any, D = any>(
  url: string,
  data?: D | undefined,
  config?: AxiosRequestConfig | undefined,
) {
  return client
    .patch<T, AxiosResponse<T>>(url, data, config)
    .then(onRequestSuccess)
    .catch(onRequestError);
}
