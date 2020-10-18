import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  root: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  title: {
    ...typography.headlineSemiBold,
    color: color.textSecondary,
  },
  root: {
    width: '100%',
  },
});
