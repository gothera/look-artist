import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  selectHourText: TextStyle;
  selectedHour: TextStyle;
  bottomBorder: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: color.unchosen,
    alignItems: 'center',
  },
  title: {
    ...typography.bodySemiBold,
    color: color.textSecondary,
  },
  selectHourText: {
    ...typography.caption1SemiBold,
    color: color.muted,
  },
  selectedHour: {
    ...typography.subheadlineSemiBold,
    color: color.textSecondary,
  },
  bottomBorder: {
    borderBottomColor: color.unchosen,
    borderBottomWidth: 1,
  },
});
