import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  rowContainer: ViewStyle;
  starIcon: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  starIcon: {
    marginRight: 2,
  },
});
