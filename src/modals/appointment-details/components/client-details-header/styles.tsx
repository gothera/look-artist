import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, color, font } from '../../../../theme';

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  clientName: TextStyle;
  lineDivider: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clientName: {
    marginLeft: spacing.small,
    ...font.semiBold,
    fontSize: 18,
    color: color.textSecondary,
  },
  lineDivider: {
    marginTop: spacing.small,
  },
});
