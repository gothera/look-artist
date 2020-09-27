import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  textContainer: ViewStyle;
  chooseTitle: TextStyle;
  chooseDescription: TextStyle;
  optionsContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: spacing.extraLarge,
  },
  textContainer: {
    paddingHorizontal: spacing.base,
  },
  chooseTitle: {
    ...typography.headline,
    color: color.textSecondary,
  },
  chooseDescription: {
    ...typography.caption1,
    color: color.muted,
    marginTop: spacing.smaller,
  },
  optionsContainer: {
    marginTop: spacing.large,
  },
});
