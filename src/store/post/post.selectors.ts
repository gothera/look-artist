import { createSelector } from 'reselect';
import { StoreState } from '../store.types';

export const selectLocalPosts = (state: StoreState) => state.post.local;

export const selectPostById = (id: number) =>
  createSelector([selectLocalPosts], (posts) => posts[id]);
