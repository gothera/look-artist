import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {
  HEADER_SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
} from '../../../res/constants';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
    height: HEADER_SCREEN_HEIGHT,
    justifyContent: 'flex-end',
    backgroundColor: color.background,
  },
  title: {
    ...typography.bigTitle,
    marginLeft: 16,
  },
});

export default styles;
