import { SetupBody } from './api.types';
import { postRequest } from './apiRequest';

export const setup = (setupBody: SetupBody, artistId: number): Promise<any> => {
  const url = `artist/setup/${artistId}`;
  return postRequest<any>(url, setupBody);
};

export const changeProfilePicture = (
  formData: FormData,
  artistId: number,
): Promise<any> => {
  const url = `artist/picture/${artistId}`;

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return postRequest<any>(url, formData, config);
};
