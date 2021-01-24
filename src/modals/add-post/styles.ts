import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';

interface Style {
  container: ViewStyle;
  descriptionContainer: ViewStyle;
  descriptionInput: TextStyle;
  descriptionLabel: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  descriptionContainer: {
    marginTop: spacing.extraLarge,
    paddingHorizontal: spacing.smaller,
  },
  descriptionInput: {
    marginBottom: spacing.smaller,
    ...typography.body,
    color: color.textSecondary,
  },
  descriptionLabel: {
    ...typography.subheadline,
    color: color.textSecondary,
    marginBottom: spacing.smaller,
  },
});
