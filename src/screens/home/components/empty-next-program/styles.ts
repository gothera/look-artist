import { StyleSheet, TextStyle } from 'react-native';
import { typography, color } from '../../../../theme';

interface Style {
  text: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  text: {
    ...typography.body,
    color: color.textSecondary,
  },
});
