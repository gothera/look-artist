import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color } from '../../../../theme';

interface Style {
  footerContentContainer: ViewStyle;
  cancelText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  footerContentContainer: {
    alignItems: 'center',
  },
  cancelText: {
    ...typography.body,
    textTransform: 'uppercase',
    color: color.muted,
  },
});
