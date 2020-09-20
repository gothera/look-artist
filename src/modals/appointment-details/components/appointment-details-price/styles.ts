import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, color } from '../../../../theme';

interface Style {
  container: ViewStyle;
  labelText: TextStyle;
  priceRowContainer: ViewStyle;
  priceText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.largest,
  },
  labelText: {
    ...typography.subheadlineSemiBold,
    color: color.success,
    textTransform: 'uppercase',
  },
  priceRowContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceText: {
    ...typography.headline,
    color: color.textSecondary,
    marginTop: spacing.smaller,
  },
});
