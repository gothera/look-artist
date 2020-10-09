import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  descriptionText: TextStyle;
  footerContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  descriptionText: {
    ...typography.headline,
    color: color.textSecondary,
    textAlign: 'center',
    marginTop: 150,
  },
  footerContainer: {
    alignItems: 'center',
  },
});
