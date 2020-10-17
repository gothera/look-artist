import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  title: TextStyle;
  description: TextStyle;
  scroll: ViewStyle;
  scrollContainer: ViewStyle;
  fNameContainer: ViewStyle;
  birthdayContainer: ViewStyle;
  keyboardAccessory: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  title: {
    ...typography.title3Bold,
    color: color.textSecondary,
  },
  description: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    marginTop: spacing.smallest,
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    paddingHorizontal: spacing.base,
    marginTop: spacing.larger,
    width: '100%',
    height: '100%',
  },
  fNameContainer: {
    marginTop: spacing.largest,
  },
  birthdayContainer: {
    marginTop: spacing.largest,
  },
  keyboardAccessory: {
    backgroundColor: color.background,
    marginBottom: 24,
    borderTopWidth: 0,
  },
});
