import { Page, Post } from '../../types/globalTypes';
import { getRequest } from './apiRequest';

export const fetchPostsOfArtists = (
  artistId: number,
  page: number,
): Promise<Page<Post>> => {
  const url = `post/artist/posts/${artistId}?page=${page}`;
  return getRequest<Page<Post>>(url);
};
