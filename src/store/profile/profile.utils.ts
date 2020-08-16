// import {
//   ProfileInfoResponse,
//   UserTopicResponse,
//   ReadsByDayApiResponse,
//   ReadByDayApiResponse,
// } from '../../services/api/api.types';
// import { ProfileInfo, ReadsByDay, ReadByDay } from '../../types';
// import { groupStashesWithInsights } from '../stashes/stashes.utils';

// function sanitizeCategoriesOfSavedInsights(categories: UserTopicResponse[]) {
//   return categories.map((it) => {
//     return {
//       id: it.id,
//       count: it.num_blocks,
//     };
//   });
// }
// export const normalizeProfile = (profile: ProfileInfoResponse): ProfileInfo => {
//   return {
//     categories: sanitizeCategoriesOfSavedInsights(profile.categories),
//     createdAt: profile.created_at,
//     email: profile.email,
//     emailSubscribed: {
//       daily: profile.daily_emails,
//       weekly: profile.subscribed,
//       product: profile.product_emails,
//     },
//     firstName: profile.first_name,
//     id: profile.id,
//     lastName: profile.last_name,
//     name: profile.name,
//     photo: profile.photo.replace(/^http:\/\//i, 'https://'),
//     savedInsights: profile.saved_by_id,
//     savedInsightsCount: profile.insight_count,
//     createdArticles: profile.created_articles,
//     createdArticlesCount: profile.created_articles_count,
//     savedArticles: profile.saved_articles,
//     notificationsTime: profile.notifications_time,
//     notificationsOn:
//       profile.notifications_on === undefined ? true : profile.notifications_on,
//     notificationsToken: profile.notifications_token,
//     timezone: profile.timezone,
//     userStashes: groupStashesWithInsights(
//       profile.stashes,
//       profile.stashed_insights,
//     ),
//     userProgress: {
//       currentStreak: profile.current_streak,
//       longestStreak: profile.longest_streak,
//       achievements: profile.achievements,
//     },
//   };
// };

// export const normalizeReadsByDay = (
//   readsByDay: ReadsByDayApiResponse,
// ): ReadsByDay => {
//   const readsByDayResult: ReadsByDay = [];
//   readsByDay.forEach((readByDayApi: ReadByDayApiResponse) => {
//     readsByDayResult.push({
//       date: readByDayApi.date,
//       goalAchieved: readByDayApi.goal_achieved,
//       reads: readByDayApi.reads,
//     } as ReadByDay);
//   });
//   return readsByDayResult;
// };
