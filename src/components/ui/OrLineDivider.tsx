import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  Dimensions,
  Text,
  TextStyle,
} from 'react-native';
import { color, typography } from '../../theme';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const LINE_WIDTH = SCREEN_WIDTH / 2 - 45;

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const OrLineDivider: React.FC<OwnProps> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};
interface Style {
  container: ViewStyle;
  line: ViewStyle;
  orText: TextStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    width: LINE_WIDTH,
    height: 1,
    backgroundColor: color.unchosen,
  },
  orText: {
    ...typography.orDivider,
    color: color.muted,
    marginTop: 5,
  },
});

export default OrLineDivider;
