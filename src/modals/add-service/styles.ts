import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';

interface Style {
  subheadline: TextStyle;
  clientContainer: TextStyle;
  clientLabel: TextStyle;
  labelTitle: TextStyle;
  divider: ViewStyle;
  textHour: TextStyle;
  clearBtn: ViewStyle;
  clearBtnText: TextStyle;
  saveBtn: ViewStyle;
  input: ViewStyle;
  errorDurationText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  subheadline: {
    ...typography.subheadline,
    color: color.muted,
    marginTop: spacing.large,
    marginBottom: spacing.largest,
  },
  clientContainer: {
    marginTop: spacing.larger,
  },
  clientLabel: {
    ...typography.label,
    color: color.textSecondary,
  },
  labelTitle: {
    ...typography.subheadlineSemiBold,
    color: color.textSecondary,
    marginTop: spacing.largest,
  },
  divider: {
    marginTop: spacing.smaller,
  },
  textHour: {
    marginTop: spacing.base,
    ...typography.body,
    color: color.textSecondary,
  },
  clearBtn: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '30%',
    backgroundColor: color.background,
  },
  saveBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '30%',
  },
  clearBtnText: {
    ...typography.textInput,
    color: color.textSecondary,
  },
  input: {
    marginTop: 30,
  },
  errorDurationText: {
    ...typography.caption1,
    color: color.delete,
    marginTop: spacing.smaller,
  },
});
