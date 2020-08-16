// import * as viewConstants from './view.constants';
// import { ColorScheme } from '../../types';

// export interface HighlightInsightSave {
//   type: typeof viewConstants.MAYBE_HIGHLIGHT_SAVE_FOR_INSIGHT;
//   payload: {
//     insightId: number;
//   };
// }

// export interface DismissHighlightForSaveInsight {
//   type: typeof viewConstants.DISMISS_HIGHLIGHT_SAVE_FOR_INSIGHT;
// }

// export interface ChangeColorSchemeAction {
//   type: typeof viewConstants.CHANGE_COLOR_SCHEME;
//   payload: { colorScheme: ColorScheme; activateSystemAppearance: boolean };
// }

// export interface CopyToClipboardAction {
//   type: typeof viewConstants.COPY_TO_CLIPBOARD;
//   payload: { copiedToClipboard: string };
// }

// export interface ChangeFocusedInsightId {
//   type: typeof viewConstants.CHANGE_FOCUSED_INSIGHT_ID;
//   payload: { insightId: number };
// }

// export interface UpdateConfig {
//   type: typeof viewConstants.UPDATE_CONFIG;
//   payload: { config: unknown };
// }

// export interface CloseGreetingBanner {
//   type: typeof viewConstants.CLOSED_GREETING_BANNER;
// }

// export interface StartEditStashId {
//   type: typeof viewConstants.EDITING_STASH_ID;
//   payload: { stashId: number };
// }

// export interface ToggleBackgroundAnimationWhenReading {
//   type: typeof viewConstants.TOGGLE_BACKGROUND_ANIMATION_WHEN_READING;
//   payload: { isVisible: boolean };
// }

// export interface ToggleSoundsActivate {
//   type: typeof viewConstants.TOGGLE_SOUNDS_ACTIVATE;
//   payload: { isSoundOn: boolean };
// }

// export interface RemoveSnackbarStashId {
//   type: typeof viewConstants.REMOVE_SNACKBAR_STASH_ID;
// }

// export interface RemoveReadInsightId {
//   type: typeof viewConstants.REMOVE_READ_INSIGHT_ID;
// }

// export interface SentArticleForReview {
//   type: typeof viewConstants.SENT_ARTICLE_FOR_REVIEW;
// }

// export interface SetSentArticleForReviewToFalse {
//   type: typeof viewConstants.SET_SENT_ARTICLE_FOR_REVIEW_TO_FALSE;
// }
// export interface RemoveSnackbarArchivedArticleId {
//   type: typeof viewConstants.REMOVE_SNACKBAR_ARCHIVED_ARTICLE_ID;
// }

// export interface ToggleIntroduceReadingModal {
//   type: typeof viewConstants.TOGGLE_INTRODUCE_READING_MODAL;
// }

// export interface ToggleSnackbarReadsGoal {
//   type: typeof viewConstants.TOGGLE_SNACKBAR_READS_GOAL;
// }

// export type ViewAction =
//   | HighlightInsightSave
//   | DismissHighlightForSaveInsight
//   | ChangeColorSchemeAction
//   | CopyToClipboardAction
//   | ChangeFocusedInsightId
//   | UpdateConfig
//   | CloseGreetingBanner
//   | StartEditStashId
//   | ToggleBackgroundAnimationWhenReading
//   | ToggleSoundsActivate
//   | RemoveSnackbarStashId
//   | RemoveReadInsightId
//   | SentArticleForReview
//   | SetSentArticleForReviewToFalse
//   | RemoveSnackbarArchivedArticleId
//   | ToggleIntroduceReadingModal
//   | ToggleSnackbarReadsGoal;
