import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const AUX_BOTTOM_SPACE = getBottomSpace() !== 0 ? getBottomSpace() + 10 : 30;

export const STATUS_BAR_HEIGHT = getStatusBarHeight();

export const HEADER_SCREEN_HEIGHT = 60;

export const COLLAPSED_HEADER_HEIGHT = STATUS_BAR_HEIGHT + 35;

export const MODAL_BIG_SNAP_POINT = Dimensions.get('screen').height * 0.6;

export const FOOTER_OPTIONS_HEIGHT = 70 + AUX_BOTTOM_SPACE;

export const DIALOG_MODAL_HEIGHT = 180;

export const BOTTOM_SPACE = AUX_BOTTOM_SPACE;
