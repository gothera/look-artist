import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  label: TextStyle;
  description: TextStyle;
  price: TextStyle;
  divider: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  label: {
    ...typography.boldTitle,
    marginTop: spacing.small,
    color: color.textSecondary,
  },
  description: {
    ...typography.smallInterval,
    marginTop: spacing.small,
    color: color.muted,
  },
  price: {
    ...typography.boldSubtitle,

    marginVertical: spacing.base,
    marginBottom: spacing.small,

    color: color.textSecondary,
  },
  divider: {
    marginBottom: spacing.base,
  },
});
