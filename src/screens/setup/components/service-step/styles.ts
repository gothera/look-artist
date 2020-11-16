import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { BOTTOM_SPACE } from '../../../../res/constants';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  input: ViewStyle;
  keyboardAccessory: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  errorDurationText: TextStyle;
  doneBtnContainer: ViewStyle;
  continueBtnContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    paddingHorizontal: spacing.base,
    flex: 1,
  },
  input: {
    marginTop: spacing.larger,
    width: '100%',
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 20,
    borderTopWidth: 0,
  },
  title: {
    ...typography.title3Bold,
    color: color.textSecondary,
  },
  description: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    marginTop: spacing.smallest,
  },
  errorDurationText: {
    ...typography.caption1,
    color: color.delete,
    marginTop: spacing.smaller,
  },
  doneBtnContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.base,
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
});
