import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    backgroundColor: color.background,
    borderWidth: 0.7,
    borderColor: color.textPrimary,
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 14,
  },
  title: {
    ...typography.body,
    color: color.textPrimary,
    textAlign: 'center',
  },
});
