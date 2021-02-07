import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  rowContainer: ViewStyle;
  detailsContainer: ViewStyle;
  name: TextStyle;
  date: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  detailsContainer: {
    marginLeft: spacing.small,
  },
  name: {
    ...typography.caption1SemiBold,
    color: color.textPrimary,
  },
  date: {
    ...typography.footnoteRegular,
    color: color.muted,
  },
});
