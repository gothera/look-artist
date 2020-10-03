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
    ...typography.bodySemiBold,
    color: color.textSecondary,
  },
  serviceName: {
    ...typography.caption1SemiBold,
    color: color.muted,
    marginTop: 2,
  },
});
