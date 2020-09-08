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
// import { createSelector } from 'reselect';
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

// export const selectProfile = (state: StoreState) => state.profile;

// export const selectSavedInsightsIds = (state: StoreState) =>
//   state.profile.savedInsights;

// export const selectCreatedArticlesById = (state: StoreState) =>
//   state.profile.createdArticles;

// const getSavedElementsForArticle = (
//   article: Article,
//   articleInsights: Insight[],
//   currentOrder?: ListOrder,
// ) => {
//   const res: SavedElement[] = [];
//   res.push({ type: SavedElementType.ArticleHeader, id: article.id });

//   /* Sort Saved Insights based on Reads insight the `Article` element in Saved Ideas */
//   if (currentOrder === 'reads') {
//     articleInsights.sort((a, b) => b.numberOfReads! - a.numberOfReads!);
//   }
//   articleInsights.forEach((insight) => {
//     if (insight.saved) {
//       res.push({ type: SavedElementType.Insight, id: insight.id });
//     }
//   });

//   return res;
// };

// export const selectSavedElementsForProfile = createSelector(
//   [
//     selectSavedArticlesById,
//     selectLocalArticles,
//     selectLocalInsights,
//     selectCurrentSavedInsightsOrder,
//     selectReadIdeas,
//   ],
//   (savedArticlesById, localArticles, localInsights, currentOrder, reads) => {
//     const savedElementsArrays = savedArticlesById.map((articleId) => {
//       const article = localArticles[articleId];
//       const articleInsights: Insight[] = article.insightsById.map((id) => ({
//         ...localInsights[id],
//         numberOfReads: reads[id] || 0,
//       }));

//       return getSavedElementsForArticle(article, articleInsights, currentOrder);
//     });

//     return savedElementsArrays.flat(1);
//   },
// );

// export const selectCanSendToEditors = (articleId: number) => {
//   return createSelector(
//     [selectSavedInsightsIds, selectInsightsByIdForArticle(articleId)],
//     (savedInsightsById, insightsByIdForArticle) => {
//       for (const insightId of insightsByIdForArticle) {
//         if (savedInsightsById.includes(insightId)) {
//           return true;
//         }
//       }
//       return false;
//     },
//   );
// };

// export const selectUserId = createSelector(
//   [selectProfile],
//   (profile) => profile.id,
// );
