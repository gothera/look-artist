import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, color } from '../../../../theme';

interface Style {
  container: ViewStyle;
  labelText: TextStyle;
  serviceName: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.largest,
  },
  labelText: {
    ...typography.subheadline,
    color: color.textSecondary,
  },
  serviceName: {
    ...typography.headline,
    color: color.textSecondary,
    marginTop: spacing.smaller,
  },
});
