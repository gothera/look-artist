import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { HEADER_SCREEN_HEIGHT } from '../../res/constants';
import { typography } from '../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: HEADER_SCREEN_HEIGHT,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  title: {
    ...typography.bigTitle,
  },
});

export default styles;
