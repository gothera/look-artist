import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  btnText: TextStyle;
  plusIcon: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    ...typography.button,
    color: color.textSecondary,
    marginLeft: 10,
  },
  plusIcon: {
    marginBottom: 3,
  },
});
