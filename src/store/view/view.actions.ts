// import { Vibration, Clipboard } from 'react-native';
// import * as viewConstants from './view.constants';
// import * as viewTypes from './view.types';
// import {
//   incrementMaybeHighlightSaveCount,
//   getMaybeHighlightSaveCount,
// } from '../../utils/SharedPreferences';
// import { selectInsightById } from '../insights/insights.selectors';
// import { StoreState, ThunkResult } from '../store.types';
// import { ColorScheme } from '../../types';

// function highlightInsightSave(
//   insightId: number,
// ): viewTypes.HighlightInsightSave {
//   return {
//     type: viewConstants.MAYBE_HIGHLIGHT_SAVE_FOR_INSIGHT,
//     payload: {
//       insightId,
//     },
//   };
// }

// async function shouldHighlightInsightSave(
//   state: StoreState,
//   insightId: number,
// ) {
//   if (state.profile.savedInsightsCount > 0) {
//     return false;
//   }

//   const insight = selectInsightById(insightId)(state);

//   if (!insight) {
//     return false;
//   } else if (insight.saved) {
//     return false;
//   }

//   const highlightSavePeriodicity = 5;
//   const maybeHighlightSaveCount = await getMaybeHighlightSaveCount();
//   if (maybeHighlightSaveCount % highlightSavePeriodicity !== 0) {
//     return false;
//   }

//   return true;
// }

// let maybeHighlightSaveTimer: number;

// export function maybeHighlightSaveForInsight(
//   insightId: number,
//   delay = 3000,
// ): ThunkResult<void> {
//   return function (dispatch, getState) {
//     clearTimeout(maybeHighlightSaveTimer);
//     maybeHighlightSaveTimer = setTimeout(async () => {
//       incrementMaybeHighlightSaveCount();

//       if (!(await shouldHighlightInsightSave(getState(), insightId))) {
//         return Promise.resolve();
//       }

//       dispatch(highlightInsightSave(insightId));
//     }, delay);
//   };
// }

// export function dismissHighlightSaveForInsight(): ThunkResult<void> {
//   return function (dispatch, getState) {
//     clearTimeout(maybeHighlightSaveTimer);

//     if (getState().view.maybeHighlightSaveForInsightById) {
//       const action: viewTypes.DismissHighlightForSaveInsight = {
//         type: viewConstants.DISMISS_HIGHLIGHT_SAVE_FOR_INSIGHT,
//       };
//       dispatch(action);
//     }
//   };
// }

// export function changeColorScheme(
//   colorScheme: ColorScheme,
//   activateSystemAppearance?: boolean,
// ): ThunkResult<void> {
//   return function (dispatch) {
//     const changeColorSchemeAction: viewTypes.ChangeColorSchemeAction = {
//       type: viewConstants.CHANGE_COLOR_SCHEME,
//       payload: {
//         colorScheme,
//         activateSystemAppearance: activateSystemAppearance || false,
//       },
//     };
//     dispatch(changeColorSchemeAction);
//   };
// }

// export function toggleSoundsActivate(
//   isSoundOn: boolean,
// ): viewTypes.ToggleSoundsActivate {
//   return { type: viewConstants.TOGGLE_SOUNDS_ACTIVATE, payload: { isSoundOn } };
// }

// export function copyToClipboard(text: string): ThunkResult<void> {
//   return function (dispatch) {
//     Clipboard.setString(text);
//     Vibration.vibrate([0, 500, 0, 0]);

//     dispatch({
//       type: viewConstants.COPY_TO_CLIPBOARD,
//       payload: { copiedToClipboard: text },
//     });
//   };
// }

// export function changeFocusedInsightId(
//   insightId: number,
// ): viewTypes.ChangeFocusedInsightId {
//   return {
//     type: viewConstants.CHANGE_FOCUSED_INSIGHT_ID,
//     payload: { insightId },
//   };
// }

// export function updateConfig(config: unknown): viewTypes.UpdateConfig {
//   return {
//     type: viewConstants.UPDATE_CONFIG,
//     payload: { config },
//   };
// }

// export function closeGreetingBanner(): viewTypes.CloseGreetingBanner {
//   return {
//     type: viewConstants.CLOSED_GREETING_BANNER,
//   };
// }

// export function startEditStashId(stashId: number): viewTypes.StartEditStashId {
//   return {
//     type: viewConstants.EDITING_STASH_ID,
//     payload: { stashId },
//   };
// }

// export function toggleBackgroundAnimationWhenReading(
//   isVisible: boolean,
// ): viewTypes.ToggleBackgroundAnimationWhenReading {
//   return {
//     type: viewConstants.TOGGLE_BACKGROUND_ANIMATION_WHEN_READING,
//     payload: { isVisible },
//   };
// }

// export function removeSnackbarStashId(): viewTypes.RemoveSnackbarStashId {
//   return {
//     type: viewConstants.REMOVE_SNACKBAR_STASH_ID,
//   };
// }

// export function removeReadInsightId(): viewTypes.RemoveReadInsightId {
//   return {
//     type: viewConstants.REMOVE_READ_INSIGHT_ID,
//   };
// }

// export function sentArticleForReview(): viewTypes.SentArticleForReview {
//   return {
//     type: viewConstants.SENT_ARTICLE_FOR_REVIEW,
//   };
// }

// export function setSentArticleForReviewToFalse(): viewTypes.SetSentArticleForReviewToFalse {
//   return {
//     type: viewConstants.SET_SENT_ARTICLE_FOR_REVIEW_TO_FALSE,
//   };
// }

// export function removeSnackbarArchivedArticleId(): viewTypes.RemoveSnackbarArchivedArticleId {
//   return {
//     type: viewConstants.REMOVE_SNACKBAR_ARCHIVED_ARTICLE_ID,
//   };
// }

// export function toggleIntroduceReadingModal(): viewTypes.ToggleIntroduceReadingModal {
//   return {
//     type: viewConstants.TOGGLE_INTRODUCE_READING_MODAL,
//   };
// }

// export function toggleSnackbarReadsGoal(): viewTypes.ToggleSnackbarReadsGoal {
//   return {
//     type: viewConstants.TOGGLE_SNACKBAR_READS_GOAL,
//   };
// }
