import { ArtistReviewsResponse } from './api.types';
import { getRequest } from './apiRequest';

export const fetchReviewsOfArtists = (
  artistId: number,
  page: number,
): Promise<ArtistReviewsResponse> => {
  const url = `review/artist/get/${artistId}?page=${page}`;
  return getRequest<ArtistReviewsResponse>(url);
};
