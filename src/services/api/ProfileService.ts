import { SetupBody } from './api.types';
import { postRequest } from './apiRequest';
import { ArtistResponseApi } from '../../types/globalTypes';

export const setup = (setupBody: SetupBody): Promise<ArtistResponseApi> => {
  const url = `artist/setup/`;
  return postRequest<ArtistResponseApi>(url, setupBody);
};

export const changeProfilePicture = (formData: FormData): Promise<any> => {
  const url = `artist/picture/`;

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return postRequest<string>(url, formData, config);
};
