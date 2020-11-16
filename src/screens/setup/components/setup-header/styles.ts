import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  stepsIndicator: ViewStyle;
  stepName: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.large,
  },
  title: {
    ...typography.title1Bold,
    color: color.textSecondary,
    marginLeft: spacing.base,
  },
  stepsIndicator: {
    paddingHorizontal: 8,
    marginTop: spacing.small,
  },
  stepName: {
    ...typography.headline,
    color: color.textSecondary,
    marginLeft: spacing.base,
    marginTop: spacing.larger,
  },
});
