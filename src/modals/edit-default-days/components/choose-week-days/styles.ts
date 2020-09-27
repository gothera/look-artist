import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  chooseDaysText: TextStyle;
  daysRowContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: spacing.large,
    paddingHorizontal: spacing.base,
  },
  chooseDaysText: {
    ...typography.headline,
    color: color.textSecondary,
  },
  daysRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.base,
  },
});
