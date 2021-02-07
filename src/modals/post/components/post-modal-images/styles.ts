import { StyleSheet, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { POST_MODAL_IMAGE_HEIGHT } from '../../../../res/constants';
import { color } from '../../../../theme';

interface Style {
  container: ViewStyle;
  image: ImageStyle;
  opacityOverlay: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: { width: '100%', height: POST_MODAL_IMAGE_HEIGHT },
  image: {
    flex: 1,
  },
  opacityOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: color.background,
    zIndex: 3,
  },
});
