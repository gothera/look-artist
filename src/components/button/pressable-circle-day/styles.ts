import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  buttonCircle: ViewStyle;
  buttonCircleSelected: ViewStyle;
  title: TextStyle;
  titleSelected: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 38,
    height: 38,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: color.textSecondary,
    backgroundColor: color.background,
  },
  buttonCircleSelected: {
    backgroundColor: color.brand,
    borderWidth: 0,
  },
  title: {
    ...typography.caption1,
    color: color.textSecondary,
  },
  titleSelected: {
    color: color.background,
  },
});
