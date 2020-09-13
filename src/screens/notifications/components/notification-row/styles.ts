import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { color, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  avatarStyle: ImageStyle;
  textContainer: ViewStyle;
  reviewTitle: TextStyle;
  reviewDescription: TextStyle;
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
  reviewTitle: { ...typography.smallTitle, color: color.textPrimary },
  reviewDescription: { ...typography.mutedDescription, color: color.muted },
});

export default styles;
