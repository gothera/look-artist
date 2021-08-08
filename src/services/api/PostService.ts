import { ArtistPostsResponse } from './api.types';
import { getRequest, postRequest } from './apiRequest';

export const getArtistPosts = (
  artistId: number,
  page: number,
): Promise<ArtistPostsResponse> => {
  const url = `post/artist/posts/${artistId}?page=${page}`;
  return getRequest<ArtistPostsResponse>(url);
};

export const addPost = (formData: FormData): Promise<any> => {
  const url = `post/artist/`;

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return postRequest<any>(url, formData, config);
};
