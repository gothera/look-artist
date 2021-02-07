import { StyleSheet, ViewStyle } from 'react-native';
import { ANIMATED_HEADER_CIRCLE_BUTTON_SIZE } from '../../../res/constants';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: ANIMATED_HEADER_CIRCLE_BUTTON_SIZE,
    height: ANIMATED_HEADER_CIRCLE_BUTTON_SIZE,
    borderRadius: ANIMATED_HEADER_CIRCLE_BUTTON_SIZE,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
});
