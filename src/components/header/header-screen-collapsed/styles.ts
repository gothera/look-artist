import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {
  COLLAPSED_HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
} from '../../../res/constants';
import { color, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: color.background,
    height: COLLAPSED_HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: color.unchosen,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
  },
  titleContainer: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 0,
    zIndex: 3,
    height: COLLAPSED_HEADER_HEIGHT - STATUS_BAR_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...typography.collapsedHeaderTitle,
    color: color.textPrimary,
  },
});

export default styles;
