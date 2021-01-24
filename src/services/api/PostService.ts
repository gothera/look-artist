import { Page, Post } from '../../types/globalTypes';
import { getRequest, postRequest } from './apiRequest';

export const fetchPostsOfArtists = (
  artistId: number,
  page: number,
): Promise<Page<Post>> => {
  const url = `post/artist/posts/${artistId}?page=${page}`;
  return getRequest<Page<Post>>(url);
};

export const addPost = (formData: FormData): Promise<any> => {
  const url = `post/artist/`;

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  return postRequest<any>(url, formData, config);
};
