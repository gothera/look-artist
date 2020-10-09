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
  container: ViewStyle;
  clearBtnText: TextStyle;
  saveBtn: ViewStyle;
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
    ...typography.label,
    color: color.textSecondary,
    marginTop: spacing.largest,
  },
  divider: {
    marginRight: spacing.base,
    marginTop: spacing.base,
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
  container: { paddingLeft: spacing.base, height: '100%', width: '100%' },
});
