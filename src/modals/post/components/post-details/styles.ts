import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {},
  text: {
    ...typography.subheadlineRegular,
    lineHeight: 18,
    letterSpacing: 0.3,
    color: color.textPrimary,
    marginHorizontal: spacing.base,
    marginTop: spacing.base,
  },
});
