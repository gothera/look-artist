import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  errorText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingHorizontal: spacing.base,
  },
  errorText: {
    ...typography.caption1,
    color: color.delete,
  },
});
