import { Page, Review } from '../../types/globalTypes';
import { getRequest } from './apiRequest';

export const fetchReviewsOfArtists = (
  artistId: number,
  page: number,
): Promise<Page<Review>> => {
  const url = `review/artist/${artistId}?page=${page}`;
  return getRequest<Page<Review>>(url);
};
