import { StyleSheet, ViewStyle } from 'react-native';
import { FOOTER_OPTIONS_HEIGHT, BOTTOM_SPACE } from '../../../res/constants';
import { color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    height: 70,
    width: '100%',
    zIndex: 10000,
    backgroundColor: color.background,
    borderTopWidth: 1,
    borderTopColor: color.unchosen,
    borderBottomWidth: 1,
    borderColor: color.unchosen,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    marginBottom: BOTTOM_SPACE,
    paddingTop: spacing.larger,
    paddingHorizontal: spacing.base,
  },
});
