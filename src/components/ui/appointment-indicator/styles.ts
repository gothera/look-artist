import { StyleSheet, ViewStyle } from 'react-native';
import { color } from '../../../theme';

interface Style {
  container: ViewStyle;
  outerCircle: ViewStyle;
  innerCircle: ViewStyle;
  verticalLine: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    left: 0,
    top: 2,
    alignItems: 'center',
  },
  outerCircle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: color.unchosen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: color.background,
  },
  verticalLine: {
    width: 1.5,
    height: 88,
    backgroundColor: color.unchosen,
  },
});
