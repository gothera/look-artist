import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { color, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  avatarStyle: ImageStyle;
  textContainer: ViewStyle;
  notificationTitle: TextStyle;
  notificationName: TextStyle;

  notificationDescription: TextStyle;
  dividerStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: { width: 50, height: 50, borderRadius: 50 },
  textContainer: {
    paddingVertical: 20,
    marginVertical: 6,
    marginHorizontal: 20,
  },
  notificationTitle: {
    ...typography.body,
    color: color.textPrimary,
  },
  notificationName: {
    ...typography.bodySemiBold,
    color: color.textPrimary,
  },
  notificationDescription: {
    ...typography.caption1Regular,
    marginTop: 4,
    color: color.muted,
  },
  dividerStyle: { backgroundColor: '#EEEEEE' },
});

export default styles;
