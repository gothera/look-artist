import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  chooseIntervalContainer: ViewStyle;
  errorContainer: ViewStyle;
  btnContainer: ViewStyle;
  optionsIntervalContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    paddingTop: spacing.base,
    flex: 1,
  },
  title: {
    ...typography.body,
    color: color.muted,
    textAlign: 'center',
  },
  chooseIntervalContainer: {
    width: '100%',
  },
  errorContainer: {
    marginTop: spacing.base,
    width: '100%',
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: spacing.base,
    marginTop: spacing.extraLarge,
  },
  optionsIntervalContainer: {
    marginTop: 0,
  },
});
