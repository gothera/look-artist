import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  btnText: TextStyle;
  plusIcon: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: color.highlight,
    paddingLeft: spacing.small,
    borderRadius: 8,
  },
  btnText: {
    ...typography.button,
    color: color.muted,
    marginLeft: 10,
  },
  plusIcon: {
    marginBottom: 3,
  },
});
