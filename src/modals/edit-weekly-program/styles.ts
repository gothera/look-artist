import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../theme';

interface Style {
  container: ViewStyle;
  errorContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  errorContainer: {
    marginTop: spacing.base,
  },
});
