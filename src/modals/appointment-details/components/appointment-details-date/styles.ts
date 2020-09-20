import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, color } from '../../../../theme';

interface Style {
  container: ViewStyle;
  labelRow: ViewStyle;
  labelText: TextStyle;
  dateText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.larger,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    ...typography.subheadline,
    color: color.textSecondary,
    marginTop: 2,
    marginLeft: spacing.smaller,
  },
  dateText: {
    ...typography.headline,
    color: color.textSecondary,
    marginTop: spacing.smaller,
  },
});
