import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, font, typography } from '../../../../theme';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ImageStyle } from 'react-native-fast-image';

interface Style {
  container: ViewStyle;
  leftRowContainer: ViewStyle;
  avatar: ImageStyle;
  monthText: TextStyle;
  statusBarOverlay: ViewStyle;
  addProgramIconContainer: ViewStyle;
  editText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: color.background,
    position: 'absolute',
    zIndex: 2,
    marginTop: getStatusBarHeight(true),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    paddingHorizontal: 16,
  },
  leftRowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    // marginLeft: 16,
  },
  monthText: {
    ...font.semiBold,
    fontSize: 18,
    color: color.textPrimary,
    marginLeft: 16,
  },
  statusBarOverlay: {
    width: '100%',
    height: getStatusBarHeight(true),
    backgroundColor: color.background,
    position: 'absolute',
    zIndex: 3,
    top: 0,
  },
  addProgramIconContainer: {
    marginBottom: 2,
  },
  editText: {
    ...typography.subheadline,
  },
});

export default styles;
