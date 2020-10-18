import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableHighlight,
} from 'react-native';
import { styles } from './styles';
import { color } from '../../../theme';
import LineDivider from '../../ui/LineDivider';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
}

const TextEntry: React.FC<OwnProps> = ({
  containerStyle,
  title,
  onPress,
  titleStyle,
}) => {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        style={[styles.container, containerStyle]}
        onPress={onPress}
        underlayColor={color.highlight}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableHighlight>
      <LineDivider />
    </View>
  );
};

export default TextEntry;
