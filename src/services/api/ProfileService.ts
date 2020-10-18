import { ArtistResponseApi } from '../../types/globalTypes';
import {
  SetupBody,
  ProgramDefaultElement,
  ProgramSpecificElement,
  UpdateArtistApi,
} from './api.types';
import { getRequest, postRequest, putRequest } from './apiRequest';
import { DaysAbbreviation } from '../../types/enums';
import { AxiosRequestConfig } from 'axios';

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

export const fetchProfile = (token?: string): Promise<ArtistResponseApi> => {
  const url = `artist/current/`;

  const extraConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return getRequest<ArtistResponseApi>(url, { ...(token && extraConfig) });
};

/**
 * Edit Specific days program schedule
 * @param dates
 * @param startTime
 * @param endTime
 */
export const updateSpecificProgram = (
  dates: string[],
  startTime: string,
  endTime: string,
): Promise<ProgramSpecificElement[]> => {
  const url = `artist/program/specific/`;
  const data: ProgramSpecificElement[] = dates.map((date) => {
    return {
      date: date,
      startTime: startTime,
      endTime: endTime,
    };
  });
  return putRequest<ProgramSpecificElement[]>(url, data);
};

/**
 * Edit Default programs for days of the week
 * @param days array of days to edit
 * @param startTime
 * @param endTime
 * @param artistId
 */
export const updateDefaultProgram = (
  days: DaysAbbreviation[],
  startTime: string,
  endTime: string,
  artistId: number,
): Promise<ProgramDefaultElement[]> => {
  const url = 'artist/program/default/';
  const data: ProgramDefaultElement[] = days.map((day) => {
    return {
      day: day,
      startTime: startTime,
      endTime: endTime,
      artistId: artistId,
    };
  });
  return putRequest<ProgramDefaultElement[]>(url, data);
};

export const updateProfile = (
  profile: UpdateArtistApi,
): Promise<UpdateArtistApi> => {
  const url = 'artist/profile/';

  return putRequest<UpdateArtistApi>(url, profile);
};
