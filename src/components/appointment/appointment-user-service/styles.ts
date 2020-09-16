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
    ...typography.userName,
    color: color.textSecondary,
    // maxWidth: '90%',
  },
  serviceName: {
    ...typography.serviceName,
    color: color.muted,
    marginTop: 2,
    // maxWidth: '90%',
  },
});
