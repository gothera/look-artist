import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, color } from '../../theme';

interface Style {
  container: ViewStyle;
  optionsContainer: ViewStyle;
  scheduleIntroContainer: ViewStyle;
  scheduleIntroText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  optionsContainer: {
    marginTop: spacing.extraLarge,
  },
  scheduleIntroContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: spacing.largest,
  },
  scheduleIntroText: {
    ...typography.subheadline,
    color: color.textSecondary,
    textAlign: 'center',
    marginTop: spacing.base,
  },
});
