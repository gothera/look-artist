import { ArtistResponseApi } from '../../types/globalTypes';
import { SetupBody } from './api.types';
import { getRequest, postRequest } from './apiRequest';

export const setup = (setupBody: SetupBody): Promise<ArtistResponseApi> => {
  const url = `artist/setup/`;
  return postRequest<ArtistResponseApi>(url, setupBody);
};

export const changeProfilePicture = (formData: FormData): Promise<any> => {
  const url = `artist/picture/`;

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  return postRequest<any>(url, formData, config);
};

export const fetchProfile = (): Promise<ArtistResponseApi> => {
  const url = `artist/current/`;

  return getRequest<ArtistResponseApi>(url);
};
