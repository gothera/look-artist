import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  clearBtn: ViewStyle;
  clearText: TextStyle;
  clearTextDisabled: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearBtn: {
    paddingVertical: spacing.base,
    paddingRight: spacing.base,
  },
  clearText: {
    ...typography.body,
    color: color.textPrimary,
  },
  clearTextDisabled: {
    color: color.muted,
  },
});
