import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { color } from '../../theme';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const LineDivider: React.FC<OwnProps> = ({ containerStyle }) => {
  return <View style={[styles.container, containerStyle]} />;
};
interface Style {
  container: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: color.unchosen,
  },
});

export default LineDivider;
