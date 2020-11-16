import { StyleSheet, ViewStyle } from 'react-native';
import { BOTTOM_SPACE } from '../../../../res/constants';
import { spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  continueBtnContainer: ViewStyle;
  elementMarginTop: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    paddingHorizontal: spacing.base,
    paddingTop: spacing.largest,
  },
  continueBtnContainer: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: BOTTOM_SPACE,
    paddingHorizontal: spacing.base,
  },
  elementMarginTop: {
    marginTop: spacing.larger,
  },
});
