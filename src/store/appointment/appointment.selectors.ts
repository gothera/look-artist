// import {
//   selectSavedArticlesById,
//   selectLocalArticles,
//   selectInsightsByIdForArticle,
// } from '../articles/articles.selectors';
// import {
//   selectLocalInsights,
//   selectReadIdeas,
//   selectCurrentSavedInsightsOrder,
// } from '../insights/insights.selectors';
import { createSelector } from 'reselect';
import { StoreState } from '../store.types';
// import { Article, Insight, ListOrder } from '../../types';
// import { StoreState } from '../store.types';

// export enum SavedElementType {
//   ArticleHeader,
//   Insight,
// }

// export interface SavedElement {
//   type: SavedElementType;
//   id: number;
// }

export const selectNotification = (state: StoreState) => state.notification;

export const selectLocalInsights = createSelector(
  [selectNotification],
  (notification) => notification.local,
);

export const selectNotificationById = (notificationId: number) =>
  createSelector([selectLocalInsights], (local) => local[notificationId]);
