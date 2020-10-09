import { StyleSheet, ViewStyle } from 'react-native';
import { color } from '../../theme';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
});
