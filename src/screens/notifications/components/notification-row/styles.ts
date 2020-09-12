import { StyleSheet, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

interface Style {
  container: ViewStyle;
  avatarStyle: ImageStyle;
  textContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: { width: 50, height: 50, borderRadius: 50 },
  textContainer: {
    paddingVertical: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    display: 'flex',
  },
});

export default styles;
