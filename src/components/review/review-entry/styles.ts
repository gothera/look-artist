import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: spacing.base,
  },
  description: {
    ...typography.subheadlineRegular,
    color: color.textPrimary,
    marginTop: spacing.smaller,
    lineHeight: 20,
  },
});
