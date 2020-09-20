import { StyleSheet, ViewStyle } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { FOOTER_OPTIONS_HEIGHT } from '../../../res/constants';
import { color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    bottom: 0,
    height: FOOTER_OPTIONS_HEIGHT,
    width: '100%',
    zIndex: 10000,
    backgroundColor: color.background,
    borderTopWidth: 1,
    borderTopColor: color.unchosen,
  },
  contentContainer: {
    flex: 1,
    marginBottom: getBottomSpace(),
    paddingTop: spacing.larger,
    paddingHorizontal: spacing.base,
  },
});
