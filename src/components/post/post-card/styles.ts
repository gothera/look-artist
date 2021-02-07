import { StyleSheet, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import {
  BORDER_RADIUS,
  POST_CARD_HEIGHT,
  POST_CARD_WIDTH,
} from '../../../res/constants';

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
  gradient: ViewStyle;
  layersIconContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: POST_CARD_WIDTH,
    height: POST_CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
  imageStyle: {
    borderRadius: BORDER_RADIUS,
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
    zIndex: 2,
    borderRadius: BORDER_RADIUS,
  },
  layersIconContainer: {
    position: 'absolute',
    zIndex: 3,
    right: 10,
    top: 10,
  },
});
