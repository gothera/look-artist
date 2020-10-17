import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../theme';

interface Style {
  label: TextStyle;
  input: TextStyle;
  placeholder: TextStyle;
  pressableContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  label: {
    ...typography.subheadlineSemiBold,
    color: color.textSecondary,
  },
  input: {
    ...typography.body,
    color: color.textSecondary,
  },
  placeholder: {
    ...typography.body,
    color: color.muted,
  },
  pressableContainer: {
    paddingVertical: spacing.smaller,
    marginTop: spacing.smallest,
  },
});
