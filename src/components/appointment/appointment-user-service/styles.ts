import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  userNameText: TextStyle;
  serviceName: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginLeft: 10,
  },
  userNameText: {
    ...typography.body,
    color: color.textSecondary,
  },
  serviceName: {
    ...typography.caption1,
    color: color.muted,
    marginTop: 2,
  },
});
