import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { color, typography } from '../../../theme';

interface Style {
  slide: ViewStyle;
  image: ImageStyle;
  paginationBox: ViewStyle;
  paginationText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  slide: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  paginationBox: {
    backgroundColor: color.muted,
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  paginationText: {
    ...typography.subheadline,
    color: color.textSecondary,
  },
});
