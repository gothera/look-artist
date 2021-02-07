import { StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

interface Style {
  image: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
  image: {
    flex: 1,
  },
});
